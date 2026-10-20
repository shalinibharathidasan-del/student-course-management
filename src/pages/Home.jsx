import { Link } from 'react-router-dom'
import { useStudents } from '../context/StudentContext'

function Home() {
  const { students, courses } = useStudents()

  return (
    <>
      <div className="p-4 p-md-5 mb-4 bg-light rounded-3">
        <h1 className="display-6 fw-bold">Welcome</h1>
        <p className="lead">Manage students and the courses they are enrolled in.</p>
        <Link to="/students" className="btn btn-primary me-2">View Students</Link>
        <Link to="/add" className="btn btn-outline-primary">Add Student</Link>
      </div>

      <div className="row g-3">
        <div className="col-sm-6">
          <div className="card text-center h-100">
            <div className="card-body">
              <h2 className="display-5 text-primary">{students.length}</h2>
              <p className="mb-0">Students</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card text-center h-100">
            <div className="card-body">
              <h2 className="display-5 text-success">{courses.length}</h2>
              <p className="mb-0">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
