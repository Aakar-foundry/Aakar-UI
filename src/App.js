
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import { BasicRoutesConfig } from './Routes/Router';
function App() {  
  return (
    <>
    <Suspense fallback={<div>Loding....!</div>}>
      <Routes>
      <Route element={true ? <Layout/> : <Home/>}>
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
