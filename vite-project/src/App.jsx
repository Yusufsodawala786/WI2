import './App.css'
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom'
import Home from './home'

function App() {


  return (
    
      <Router>
        <Routes>
            <Route path="/" element={<Home />}>
                  
            </Route>
        </Routes>
      </Router>
  )
}

export default App
