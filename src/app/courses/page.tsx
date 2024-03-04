import React from 'react'
import CourseCard  from "../component/Dashboard/CourseCard";

function Courses() {
  return (
    <div style={{marginTop:'90px', marginBottom:'100px'}}>
      <CourseCard />
      <CourseCard />

      <CourseCard /> 
      <CourseCard />

      <CourseCard />
      <CourseCard />
    </div>
  )
}

export default Courses