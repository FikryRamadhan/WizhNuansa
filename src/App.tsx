import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Routers from './utils/Routers'

function App() {

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
