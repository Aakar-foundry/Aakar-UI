
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import { BasicRoutesConfig } from './Routes/Router';

// imporoved
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';


function App() {  
  return (
    <>
    <Suspense fallback={<div>Loding....!</div>}>
      <Routes>

        {/* changes made for react element */}
      {/* <Route element={true ? <Layout/> : <Home/>}> */}


      <Route element={true ? <ForgotPassword/> : <Home/>}>
        {BasicRoutesConfig.map((route, key) => {
          return route ? <Route key={route.name} {...route} /> : null;
        })}   
        </Route>            
      </Routes>
    </Suspense>
    
    </>
  );
}

export default App;
