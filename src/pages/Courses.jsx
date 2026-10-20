import { useStudents } from '../context/StudentContext'
import CourseCard from '../components/CourseCard'

function Courses() {
  const { courses, students } = useStudents()

  return (
    <>
      <h2 className="mb-3">Courses</h2>
      <div className="row g-3">
        {courses.map((course) => (
          <div className="col-sm-6 col-lg-4" key={course.id}>
            <CourseCard
              course={course}
              enrolled={students.filter((s) => s.courseId === course.id).length}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Courses
