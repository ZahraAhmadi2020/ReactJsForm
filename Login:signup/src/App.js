import 'bootstrap/dist/css/bootstrap.min.css';


import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';
import SignUp from './component/SignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';



function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path='/home' element={<ProtectedRoute>
                <Home/>
              </ProtectedRoute>}></Route>
            <Route path='/' element={<Login/>}>

            </Route>
            <Route path='/signup' element={<SignUp/>}>

            </Route>
          </Routes>
         </UserAuthContextProvider>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
