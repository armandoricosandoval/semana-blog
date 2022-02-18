import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsultItem from '../components/ConsultItem';
import ForgotPassword from '../components/ForgotPassword';
import Home from '../components/Home';
import ListAll from '../components/ListAll';
import ListPostAll from '../components/ListPostAll';
import Login from '../components/Login';
import Navbars from '../components/Navbars';
import NotPages from '../components/NotPages';
import Signup from '../components/Signup';



//aqui podemos tener las rutas publicas y las privadas y hacer el tema de authenticacion para
// Si esta authenticado o no por ejemplo 


const AppRouter = () => {
      return (
            <Router>
                  <Navbars />
                  <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/ListAll" element={<ListAll />} />
                        <Route exact path="/ListPostAll" element={<ListPostAll />} />
                        <Route exact path="/item/:id" element={<ConsultItem />} />
                        <Route path="*" element={<NotPages />} />
                  </Routes>
            </Router>
      )
}

export default AppRouter