import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import { BasicRoutesConfig, rolesConfig } from './Routes/Router';
import { useDispatch, useSelector } from 'react-redux';
import { saveAuth } from './Reducer/authSlice';
import { ADMIN, USER } from './Utils/Constant';

function App() {
  const { isAuthenticated, userRole, token } = useSelector(state => state.authDetails);
  const loginToken = sessionStorage.getItem("loginToken") && sessionStorage.getItem("isAuthenticated") && sessionStorage.getItem("userRole")
  const dispatch = useDispatch();
  const storeDetails = async () => {
    await dispatch(
      saveAuth({
        isAuthenticated: sessionStorage.getItem("isAuthenticated"),
        userRole: sessionStorage.getItem("userRole"),
        token: sessionStorage.getItem("loginToken")
      })
    );
  }
  useEffect(() => {
    storeDetails();
  }, [loginToken])


  let routes;
  if (isAuthenticated || sessionStorage.getItem("isAuthenticated")) {
    if (userRole === USER || sessionStorage.getItem("userRole") === USER) {
      routes = rolesConfig["user"];
    } else if (userRole === ADMIN) {
      routes = rolesConfig["Admin"];
    }
  }
console.log("loginToken",loginToken)
  return (
    <>
      <Suspense fallback={<div>Loding....!</div>}>
        <Routes>
          {BasicRoutesConfig.map((route, key) => {
            return route ? <Route key={key} {...route} /> : null;
          })}

          {isAuthenticated || loginToken ? (
            <Route element={loginToken ? <Layout /> : <Home />}>
              {routes?.routes.map((route, key) => {
                return route ? <Route key={key} {...route} /> : null;
              })}
            </Route>
          ) : (
            <Route path="/base/*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;



