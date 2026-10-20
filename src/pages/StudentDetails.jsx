import { Link, useParams } from 'react-router-dom'
import { useStudents } from '../context/StudentContext'

function StudentDetails() {
  const { id } = useParams()
  const { students, getCourse } = useStudents()
  const student = students.find((s) => String(s.id) === id)

  if (!student) {
    return (
      <>
        <p>Student not found.</p>
        <Link to="/students">Back to students</Link>
      </>
    )
  }

  const course = getCourse(student.courseId)

  return (
    <div className="card mx-auto" style={{ maxWidth: '36rem' }}>
      <div className="card-body">
        <h2 className="card-title">{student.name}</h2>
        <table className="table mb-3">
          <tbody>
            <tr><th>USN</th><td>{student.usn}</td></tr>
            <tr><th>Email</th><td>{student.email}</td></tr>
            <tr><th>Course</th><td>{course?.name || 'Not enrolled'}</td></tr>
            {course && (
              <>
                <tr><th>Duration</th><td>{course.duration}</td></tr>
                <tr><th>Credits</th><td>{course.credits}</td></tr>
              </>
            )}
          </tbody>
        </table>
        <Link to="/students" className="btn btn-secondary">Back</Link>
      </div>
    </div>
  )
}

export default StudentDetails
