import Home from "./pages/Home"
import AllTask from "./pages/AllTask"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ImportantTasks from "./pages/ImpotantTasks"
import CompletedTasks from "./pages/CompletedTasks"
import IncompletedTasks from "./pages/IncompletedTasks"
function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route index element={<AllTask/>}></Route>
          <Route path="/important-tasks" element={<ImportantTasks/>}></Route>
          <Route path="/completed-tasks" element={<CompletedTasks/>}></Route>
          <Route path="/incompleted-tasks" element={<IncompletedTasks/>}></Route>
          </Route>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
