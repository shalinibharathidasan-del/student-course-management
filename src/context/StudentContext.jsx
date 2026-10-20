import { createContext, useContext, useEffect, useState } from 'react'
import { courses, initialStudents } from '../data/initialData'

const StudentContext = createContext()
const STORAGE_KEY = 'students'

function loadStudents() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialStudents
  } catch {
    return initialStudents
  }
}

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(loadStudents)

  // Save to localStorage whenever the student list changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
  }, [students])

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }])
  }

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  const getCourse = (courseId) => courses.find((c) => c.id === courseId)

  return (
    <StudentContext.Provider value={{ students, courses, addStudent, deleteStudent, getCourse }}>
      {children}
    </StudentContext.Provider>
  )
}

export function useStudents() {
  return useContext(StudentContext)
}
