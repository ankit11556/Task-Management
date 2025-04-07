import Home from "./pages/Home"
import AllTask from "./pages/AllTask"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route index element={<AllTask/>}></Route>
          </Route>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
