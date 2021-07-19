import React,{useEffect} from 'react'
import axios from 'axios';


const ViewFile = () => {

    useEffect(()=>{
        const getdata=async ()=>{
            const data = await axios.get(
                `${process.env.REACT_APP_API_GATEWAY}/getfile/d5e56b30-d307-42b7-9f1a-513e3971e5c7`
              );
              console.log(data)
        }
        getdata();

    },[])
    return (
        <div>
            
        </div>
    )
}

export default ViewFile
