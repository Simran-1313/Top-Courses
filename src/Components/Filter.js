import React from 'react'

const Filter = ({filterData,category, setCategory}) => {
    let Data = filterData;
    console.log(Data)

    function filterHandler(title){
      setCategory(title);
      console.log(title)
    }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center" >{
         Data.map((data)=>(<button  className={`text-lg px-2 py-1 rounded-md font-medium 
          text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
           '${category === data.title ? 
          "bg-opacity-60 border-white" :
          "bg-opacity-40 border-transparent"}
          `
          }
           key={data.id} 
           onClick={() =>filterHandler(data.title)}>{data.title}</button>))
    }</div>
  )
}

export default Filter