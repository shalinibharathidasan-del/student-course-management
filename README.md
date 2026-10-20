# Student Course Management (React)

MMCA314D – Web Development Using Full Stack Open — **Assignment 1, Question 1**

A frontend app built with React to manage students and the courses they are enrolled in.

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:5173 in the browser.

## Features

- Home page with student and course counts
- Student list with search by name
- Add a student (validated form)
- View student details
- Delete a student
- Course list with enrolled student count
- Data saved in the browser (localStorage)
- Responsive layout (Bootstrap)

## Project structure

```
student-course-management/
├── index.html                 HTML page that loads the React app
├── package.json               Project info, scripts and dependencies
├── vite.config.js             Vite build tool config
├── public/                    Static files (favicon)
└── src/
    ├── main.jsx               Entry point: BrowserRouter + StudentProvider + Bootstrap
    ├── App.jsx                Navbar and all routes
    ├── App.css                Custom styles
    ├── context/
    │   └── StudentContext.jsx Shared data (Context API) + useState/useEffect
    ├── data/
    │   └── initialData.js     Course list and sample students
    ├── components/            Reusable components
    │   ├── Navbar.jsx
    │   ├── StudentCard.jsx
    │   ├── CourseCard.jsx
    │   └── StudentForm.jsx
    └── pages/                 One component per route
        ├── Home.jsx
        ├── Students.jsx
        ├── StudentDetails.jsx
        ├── AddStudent.jsx
        └── Courses.jsx
```

## Routes

| Path            | Page           |
|-----------------|----------------|
| `/`             | Home           |
| `/students`     | Students       |
| `/students/:id` | StudentDetails |
| `/add`          | AddStudent     |
| `/courses`      | Courses        |

## Where each concept is used

| Concept | Where |
|---|---|
| Reusable components | `StudentCard`, `CourseCard`, `StudentForm`, `Navbar` |
| Props | `StudentCard` gets `student`, `courseName`, `onDelete`; `CourseCard` gets `course`, `enrolled`; `StudentForm` gets `courses`, `onSubmit` |
| State (`useState`) | Form fields and errors in `StudentForm`, search text in `Students`, student list in `StudentContext` |
| `useEffect` | `StudentContext` saves students to localStorage whenever the list changes |
| Forms and events | `StudentForm`: `onChange`, `onSubmit`, `preventDefault`, validation; `onClick` on Delete |
| Lists and keys | `students.map(...)` with `key={student.id}`, `courses.map(...)` with `key={course.id}` |
| React Router | `BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useParams`, `useNavigate` |
| Context API | `StudentContext` + `useStudents()` hook used by every page |
| CSS / Bootstrap | Bootstrap grid (`row`, `col-sm-6 col-lg-4`), collapsible navbar, cards, forms; `App.css` |

## Commit history

Each feature was committed separately (`git log --oneline`):

1. Initial commit: Vite React project scaffold with React Router and Bootstrap
2. Add React Router, Bootstrap navbar and Home page
3. Add StudentContext (Context API) with useState/useEffect and localStorage
4. Add Students page with reusable StudentCard, list keys and search
5. Add Add Student page with controlled form, validation and event handling
6. Add Student Details (useParams) and Courses pages with CourseCard
7. Add README with project structure and concept mapping

## Tech used

React 19, Vite, React Router, Bootstrap 5
