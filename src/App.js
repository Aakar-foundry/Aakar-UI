import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import { BasicRoutesConfig } from './Routes/Router';
import Employee from './Pages/Employee/Employee';
import Admin from './Pages/Admin/Admin';
import Quality from './Pages/Quality/Quality';
import Machinery from './Pages/Machinery/Machinery';
import Marketing from './Pages/Marketing/Marketing';
import Foundary from './Pages/Foundary/Foundary';
import Designing from './Pages/Designing/Designing';
import Management from './Pages/Management/Management';
import Packaging_Logistic from './Pages/Packaging_Logistic/Packaging_Logistic';
import RFQForm from './Pages/RFQForm/RFQForm';

function App() {  
  return (
    <>
    <Suspense fallback={<div>Loding....!</div>}>
      <Routes>
      <Route element={true ? <Layout/> : <Home/>}>
        {BasicRoutesConfig.map((route, key) => {
          return route ? <Route key={route.name} {...route} /> : null;
        })}   
        <Route path="Employee" element={<Employee />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Quality" element={<Quality />} />
        <Route path="Machinery" element={<Machinery />} />
        <Route path="Marketing" element={<Marketing />} />
        <Route path="Foundary" element={<Foundary />} />
        <Route path="Designing" element={<Designing />} />
        <Route path="Management" element={<Management />} />
        <Route path="Packaging_Logistic" element={<Packaging_Logistic />} />
        <Route path="RFQForm" element={<RFQForm />} />
        </Route>           
      </Routes>
    </Suspense>
    </>
  );
}

export default App;



