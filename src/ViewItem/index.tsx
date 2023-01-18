import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import  axios  from 'axios';

const ViewItem = () => {
    const[data,setData]=useState<any>();
    const id=useParams();
    console.log(id)
    useEffect(()=>{
        if (!data){ getData(id)}

    },[id]);
    const getData =async(item:any)=>{
        try{
            const url=`http://localhost:5000/data/${item.id}`
            const result:any= await axios.get(url)
            setData(result.data)
            console.log('Inside view --> ',result.data)
        }
        catch(err){
            console.log(err)
        }
    }
  
  return (
    <div>
        {data &&
        <ul><li>Name-{data.name}</li>
        <li>Rollnumber-{data.rollnumber}</li>
        <li>English Score{data.english}</li>
        <li>Telugu Score-{data.telugu}</li>
        <li>Hindi Score{data.hindi}</li>
        <li>Science SCore-{data.science}</li>
        <li>Social Score{data.social}</li>
        <li>Activities-{data.activities}</li>
        <li>Total-{data.total}</li></ul>}</div>
  )
}

export default ViewItem