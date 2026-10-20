import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </main>
    </>
  )
}

export default App
