import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStudents } from '../context/StudentContext'
import StudentCard from '../components/StudentCard'

function Students() {
  const { students, deleteStudent, getCourse } = useStudents()
  const [search, setSearch] = useState('')

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  )

  const handleDelete = (id) => {
    if (window.confirm('Delete this student?')) deleteStudent(id)
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <h2 className="mb-0">Students</h2>
        <Link to="/add" className="btn btn-primary">+ Add Student</Link>
      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p className="text-muted">No students found.</p>
      ) : (
        <div className="row g-3">
          {filtered.map((student) => (
            <div className="col-sm-6 col-lg-4" key={student.id}>
              <StudentCard
                student={student}
                courseName={getCourse(student.courseId)?.name || 'Not enrolled'}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Students
