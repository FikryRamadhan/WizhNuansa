import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Routers from './utils/Routers'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Router>
        <Routes>
          {Routers.map((item, index) => {
            return(
              <Route path={item.path} element={item.element} key={index} />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
