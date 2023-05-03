import React, {useState} from 'react'
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App()  {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Has Been Enabled", "success")
      // document.title = 'TextUtil - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success")
      // document.title = 'TextUtil - Light Mode';
    }
  }
  return(
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
 
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtile - Word Counter, Character Counter" mode={mode}/>}/>
        <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>
      </Router>
     </>
  );
}


export default App
