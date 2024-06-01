import { useState,useEffect } from "react";

export default function FetchAPI(){
  const [data,setData]=useState()
  // useEffect(()=>{
  //   fetchData()
  // },[])
  const fetchData = async () => {
    const response= await fetch('https://task-backend-7gl4.onrender.com/tasks');
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setData(result)
  }
  fetchData()
    return data
}

