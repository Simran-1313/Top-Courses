import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import toast from 'react-hot-toast';

const Card = ({ course, likedCourses, setlikedCourses }) => {
  function clickHandler(){
    
     if(likedCourses.includes(course.id)){
      setlikedCourses(likedCourses.filter((item)=> item !== course.id))
      toast.error("Like Removed")
      
     }
     else{
       if(likedCourses.length === 0){
        (setlikedCourses([course.id]))
       }
       else{
        setlikedCourses([...likedCourses, course.id]);
        }
        toast.success("Liked SuccessFully")
        
     }
     
  }
  
  return (
    <div className="w-[300px] bg-bgDark/80 text-white rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>
        <div className="w-[40px] h-[40px] flex bg-white rounded-full absolute right-2 bottom-[-10px] justify-center items-center">
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? <FcLike fontSize='1.75rem'/> : <FcLikePlaceholder fontSize='1.75rem'/>
            }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg ">{course.title}</p>
        <p className="mt-2">
          {
            course.description.length > 100 ? course.description.slice(0,100) + "..." : course.description
          }
          </p>
      </div>
    </div>
  );
};

export default Card;
