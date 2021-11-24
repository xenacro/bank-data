import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import './App.css';

function App() {
  const cookies = new Cookies();
  const [favs, setFavs] = useState('');
  const [city, setCity] = useState('');
  const [banks, setBanks] = useState([]);
  const [banksShow, setBanksShow] = useState([]);
  const [pgNo, setPgNo] = useState(0);
  const [dum, setDum] = useState(0);
  const [sortBy, setSortBy] = useState('bank_id');
  const [asc, setAsc] = useState(true);

  useEffect(()=>{
    axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
      .then((response) => {
        console.log(response);
        const data = [].concat(response.data).sort((a,b)=>asc ? a[sortBy]-b[sortBy] : b[sortBy]-a[sortBy]);
        setBanks(data);
        setPgNo(0)
        setBanksShow(data.slice(0, 10));
      })
  },[city]);

  useEffect(()=>{
    // setBanksShow(banks.slice(pgNo*10, 10));
    console.log('sdghhj')
    let data = [];
    if(asc)
      data = [].concat(banks).sort((a,b)=> a[sortBy] > b[sortBy] ? 1 : -1);
    else 
      data = [].concat(banks).sort((a,b)=> b[sortBy] > a[sortBy] ? 1 : -1);
    setBanks(data);
    let arr=[];
    for(let i=pgNo*10; i<(pgNo+1)*10; i++){
      arr.push(data[i]);
    }
    setBanksShow(arr);
  },[pgNo, sortBy, asc]);

  useEffect(()=>{
    setFavs(cookies.get('favs') || '')
    console.log('djsdkjf')
  },[dum]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-4 mt-3'>
              <h2>Bank Branches</h2>
            </div>
          </div>
          <div className='row mt-1'>
            <div className='col-12 col-md-4'>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {city||`Select City`}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" onClick={()=>setCity('MUMBAI')}>MUMBAI</a>
                  <a class="dropdown-item" onClick={()=>setCity('NALANDA')}>NALANDA</a>
                  <a class="dropdown-item" onClick={()=>setCity('PATNA')}>PATNA</a>
                  <a class="dropdown-item" onClick={()=>setCity('LIMADIA')}>LIMADIA</a>
                  <a class="dropdown-item" onClick={()=>setCity('WAGHODIA')}>WAGHODIA</a>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-8'>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="">
                    <img src="https://img.icons8.com/ios/50/000000/search--v1.png" style={{height: 26}}/>
                  </span>
                </div>
                <input type="text" placeholder="Search" class="form-control" value={city} onChange={(e)=>setCity(e.target.value.toUpperCase())} />
              </div>
            </div>
          </div>
          {banks.length>0 ? 
            <>
              <div className='row mt-4'>
                <div className='col-12'>
                  <table class="table table-hover table-dark table-responsive">
                    <thead>
                      <tr>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='bank_id'?setAsc(!asc):setAsc(true); setSortBy('bank_id');}} >{sortBy=='bank_id'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  Bank Id. </th>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='bank_name'?setAsc(!asc):setAsc(true); setSortBy('bank_name');}} >{sortBy=='bank_name'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  Bank Name </th>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='branch'?setAsc(!asc):setAsc(true); setSortBy('branch');}} >{sortBy=='branch'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  Branch</th>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='ifsc'?setAsc(!asc):setAsc(true); setSortBy('ifsc');}} >{sortBy=='ifsc'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  IFSC</th>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='city'?setAsc(!asc):setAsc(true); setSortBy('city');}} >{sortBy=='city'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  City</th>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='district'?setAsc(!asc):setAsc(true); setSortBy('district');}} >{sortBy=='district'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  District</th>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='state'?setAsc(!asc):setAsc(true); setSortBy('state');}} >{sortBy=='state'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  State</th>
                        <th scope="col" className='linear' onClick={()=>{sortBy=='address'?setAsc(!asc):setAsc(true); setSortBy('address');}} >{sortBy=='address'&&(asc?(<span>&#x022C1;</span>):(<span>&#x022C0;</span>))}  Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {banks.length>pgNo*10 && banksShow.map((item) => 
                        item?.bank_id&&(<tr style={{fontSize: 16}}>
                        <th scope="row"><img onClick={()=>{cookies.set('favs', favs+item?.ifsc+', '); setDum(dum+1); console.log(dum+1);}} src={favs.includes(item?.ifsc) ? "https://img.icons8.com/fluency/48/000000/star.png" : "https://img.icons8.com/color/48/000000/star--v1.png"} style={{height: 18}} /> {item?.bank_id} </th>
                        <td>{item?.bank_name}</td>
                        <td>{item?.branch}</td>
                        <td>{item?.ifsc}</td>
                        <td>{item?.city}</td>
                        <td>{item?.district}</td>
                        <td>{item?.state}</td>
                        <td>{item?.address}</td>
                      </tr>)
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" onClick={()=>pgNo>0&&setPgNo(pgNo-1)} style={{backgroundColor:pgNo<=0&&'grey'}}>Previous</a></li>
                      {pgNo>0 && <li class="page-item"><a class="page-link" onClick={()=>setPgNo(pgNo-1)}>{pgNo}</a></li>}
                      <li class="page-item"><a class="page-link" style={{backgroundColor:'grey'}}>{pgNo+1}</a></li>
                      {banksShow[9]?.bank_id && <li class="page-item"><a class="page-link" onClick={()=>setPgNo(pgNo+1)}>{pgNo+2}</a></li>}
                      <li class="page-item"><a class="page-link" style={{backgroundColor:!banksShow[9]?.bank_id&&'grey'}} onClick={()=>banksShow[9]?.bank_id&&setPgNo(pgNo+1)}>Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
            :
            <div className='row mt-5'>
              <div className='col-12'>
                <h4>Select the top cities or search them.</h4>
              </div>
            </div>
          }
          
        </div>
      </header>
    </div>
  );
}

export default App;
