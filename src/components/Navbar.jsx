import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Student Course Management
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/students">Students</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/add">Add Student</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
