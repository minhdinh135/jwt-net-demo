import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './service/useToken';
import { Login } from './pages/Login';
import { HelloWorld } from './pages/HelloWorld';
import { Layout } from './pages/Layout';

function App() {
    const { token, reloadToken, setToken, removeToken } = useToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              token={token}
              setToken={setToken}
              removeToken={removeToken}
            />
          }
        >
          <Route index element={<Login token={token} setToken={setToken} />} />
          
          <Route
            path="/helloworld"
            element={
                <HelloWorld token={token} reloadToken={reloadToken}/>
            }
          ></Route>

        </Route>
      </Routes>
    </BrowserRouter>
     );
}

export default App;
