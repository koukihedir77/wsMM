import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUser from './/Components/ListUser';
import NavUse from './Components/NavUser';
import Home from './Components/Home';
import UserDescription from './Components/UserDescription';
import { useState } from 'react';
import PrivteRoute from './Components/PrivateRoute';

 
function App() {
  const [auth,setAuth] = useState(false)
  return (
  <div>
    <NavUse auth={auth} setAuth={setAuth}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/ListUser' element={<PrivteRoute auth={auth}><ListUser/></PrivteRoute>}/>

     {/* ' </PrivteRoute>' */}
    </Routes>
  </div>
  );
}

export default App;
