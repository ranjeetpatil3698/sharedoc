import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FileViewer from 'react-file-viewer';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Flex,
} from '@chakra-ui/react';
import Loading from '../components/Loading';
import Navbar from '../components/NavBar';

const ViewFile = () => {
  const { id } = useParams();
  const [File, setFile] = useState(null);
  const [data, setdata] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_GATEWAY}/getfile/${id}`
      );
      setdata(data);

      setFile(data.files);
    };
    getdata();

    // console.log(File);
  }, []);

  if (data && data.message.includes('no')) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>File Is No Longer Available!</AlertTitle>
        <AlertDescription>
          Ask The Owner Of The File To Share It Again.😢😢
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div>
      <Navbar />
      {File === null ? <Loading /> : ''}
      <Flex direction="column">
        <Box
          bgColor="green.500"
          textColor="white"
          fontSize="1.5rem"
          p="1.5"
          
          
        >
          {File && File.filename.split('%20').join(' ')}
        </Box>

        <Box p="5">
          {File ? (
            <FileViewer
              fileType={File.filename.split('.')[1]}
              filePath={File.url}
              width="0"
            />
          ) : (
            <div>&nbsp;</div>
          )}
        </Box>
      </Flex>
    </div>
  );
};

export default ViewFile;
