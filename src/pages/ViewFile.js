import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FileViewer from 'react-file-viewer';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"
  import Loading from '../components/Loading';

const ViewFile = () => {
  const { id } = useParams();
  const [File, setFile] = useState(null);
  const [data,setdata]=useState(null)

  useEffect(() => {
    const getdata = async () => {
      const {data} = await axios.get(
        `${process.env.REACT_APP_API_GATEWAY}/getfile/${id}`
      );
      setdata(data)
    
      setFile(data.files);
   
      
    };
    getdata();

        console.log(File);
      
  }, []);

  if(data && data.message.includes("no")){
      return (
        <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>File Is No Longer Available!</AlertTitle>
            <AlertDescription>Ask The Owner Of The File To Share It Again.😢😢</AlertDescription>
      </Alert>
      )
  }

 

  return (
    <div>
      {File===null?<Loading/>:""}
      <div>{File && File.filename.split("%20").join(" ")}</div>
      
      {File ? (
        <FileViewer
          fileType={File.filename.split(".")[1]}
          filePath={File.url}
        />
      ) : (
        <div>&nbsp;</div>
      )}
    </div>
  );
};

export default ViewFile;
