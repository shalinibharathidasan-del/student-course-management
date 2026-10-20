import { Link } from 'react-router-dom'

// Reusable card: receives student data and callbacks via props
function StudentCard({ student, courseName, onDelete }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{student.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{student.usn}</h6>
        <p className="card-text mb-1">{student.email}</p>
        <span className="badge bg-info text-dark">{courseName}</span>
      </div>
      <div className="card-footer bg-white d-flex gap-2">
        <Link to={`/students/${student.id}`} className="btn btn-sm btn-outline-primary">
          View
        </Link>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default StudentCard
