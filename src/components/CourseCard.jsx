// Reusable card: receives course info and enrolled count via props
function CourseCard({ course, enrolled }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h6 className="text-muted">{course.id}</h6>
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text mb-1">Duration: {course.duration}</p>
        <p className="card-text">Credits: {course.credits}</p>
      </div>
      <div className="card-footer bg-white">
        <span className="badge bg-success">{enrolled} enrolled</span>
      </div>
    </div>
  )
}

export default CourseCard
