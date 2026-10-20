import { useState } from 'react'

const emptyForm = { name: '', email: '', usn: '', courseId: '' }

// Controlled form: every input value lives in state
function StudentForm({ courses, onSubmit }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.usn.trim()) errs.usn = 'USN is required'
    if (!form.courseId) errs.courseId = 'Select a course'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    onSubmit(form)
    setForm(emptyForm)
  }

  const field = (name) => `form-control ${errors[name] ? 'is-invalid' : ''}`

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">Name</label>
        <input id="name" name="name" className={field('name')} value={form.name} onChange={handleChange} />
        <div className="invalid-feedback">{errors.name}</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className={field('email')} value={form.email} onChange={handleChange} />
        <div className="invalid-feedback">{errors.email}</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="usn">USN</label>
        <input id="usn" name="usn" className={field('usn')} value={form.usn} onChange={handleChange} />
        <div className="invalid-feedback">{errors.usn}</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="courseId">Course</label>
        <select
          id="courseId"
          name="courseId"
          className={`form-select ${errors.courseId ? 'is-invalid' : ''}`}
          value={form.courseId}
          onChange={handleChange}
        >
          <option value="">-- Select course --</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <div className="invalid-feedback">{errors.courseId}</div>
      </div>
      <button type="submit" className="btn btn-primary">Add Student</button>
    </form>
  )
}

export default StudentForm
