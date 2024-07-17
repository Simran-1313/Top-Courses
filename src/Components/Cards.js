import React, { useState } from 'react'
import Card from "./Card"
import toast from 'react-hot-toast';
const Cards = ({courses,category}) => {
    console.log(Object.values(courses.data))
    console.log(courses.data)
    let CourseData = {...courses.data};
    
    const [likedCourses,setlikedCourses] = useState([])

    const getCourses = () =>{

      if(category ==='All'){
        let Allcourses = [];
        Object.values(courses.data).forEach( (courseCategories) =>{
        courseCategories.forEach((course) =>{
          Allcourses.push(course);
          
          });
      });
      return Allcourses;
      }
      else{
        return courses.data[category];
      }
    }

   

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course)=>
          <Card key={course.id} course={course} likedCourses={likedCourses} setlikedCourses ={setlikedCourses}/>
        )
      }
    </div>
  )
}

export default Cards