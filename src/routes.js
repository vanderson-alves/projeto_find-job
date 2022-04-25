import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AbrirVaga from './pages/Abrir-vaga'
import VerVaga from './pages/Ver-vaga'


const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
                     <ToastContainer autoClose={3000}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/abrir-vagas" component={AbrirVaga}/>
                    <Route exact path="/ver-vagas/:id" component={VerVaga}/>
                </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes
