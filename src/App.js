import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Cards from"./Components/Cards";
import Filter from "./Components/Filter"
import { apiUrl,filterData } from './data';
import axios from 'axios';
import { useState ,useEffect} from 'react';

import Spinner from './Components/Spinner';

function App() {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  useEffect(() => {
   async function fetchData(){
    setLoading(true);
    try{
      let response = await axios.get(apiUrl) 
      console.log(response.data);
      setCourses(response.data);

      //let response = await fetch(apiUrl)
      // let output = await response.json();
      // console.log(output.data)
      // setCourses(output.data)
      
    }
    catch(e){

    }
    setLoading(false);
  }
 fetchData();
  }, []);

  
  return (
    <div className=''>
      <div>
      <Navbar/>
      </div>
      <div className='bg-bgDark2 min-h-[100vh]'>
      <div>
        <Filter filterData={filterData} category=
        {category} setCategory={setCategory} />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-full '>
        {
          loading ? <Spinner/> : <Cards courses={courses}  category={category}/>
        }
      </div>
      </div>
     
    </div>
  );
}

export default App;
