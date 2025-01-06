import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUser from './/Components/ListUser';
import NavUse from './Components/NavUser';
import Home from './Components/Home';
import { useState } from 'react';
import PrivteRoute from './Components/PrivateRoute';
import UserDescription from './Components/UserDescription';

 
function App() {
  const [auth,setAuth] = useState(false)
  return (
  <div>
    <NavUse auth={auth} setAuth={setAuth}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/ListUser' element={<PrivteRoute auth={auth}><ListUser/></PrivteRoute>}/>
      <Route path='/UserDescription/:id' element={<PrivteRoute auth={auth}><UserDescription/></PrivteRoute>}/>

    </Routes>
  </div>
  );
}

export default App;
