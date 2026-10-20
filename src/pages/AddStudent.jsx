import { useNavigate } from 'react-router-dom'
import { useStudents } from '../context/StudentContext'
import StudentForm from '../components/StudentForm'

function AddStudent() {
  const { courses, addStudent } = useStudents()
  const navigate = useNavigate()

  const handleAdd = (student) => {
    addStudent(student)
    navigate('/students')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title mb-3">Add Student</h2>
            <StudentForm courses={courses} onSubmit={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
