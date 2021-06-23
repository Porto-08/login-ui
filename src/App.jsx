import 'bootstrap/dist/css/bootstrap.min.css';
import './global.module.scss'
import Nav from "./Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route path='/' element={<SignIn />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;