import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="p-4 p-md-5 mb-4 bg-light rounded-3">
      <h1 className="display-6 fw-bold">Welcome</h1>
      <p className="lead">Manage students and the courses they are enrolled in.</p>
      <Link to="/students" className="btn btn-primary me-2">View Students</Link>
      <Link to="/add" className="btn btn-outline-primary">Add Student</Link>
    </div>
  )
}

export default Home
