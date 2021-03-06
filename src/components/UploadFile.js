import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {useHistory} from "react-router-dom";
import {  AddIcon } from '@chakra-ui/icons'


import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,Box,useToast
} from '@chakra-ui/react';

const UploadFile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history=useHistory();
  const { getIdTokenClaims } = useAuth0();

  const [base64, setBase64] = useState(null);
  const [filename,setfilename]=useState("");
  const toast=useToast();
  
  let file;
  const handleFileChange = async e => {
    
    file = e.target.files[0];
    setfilename(file.name)
    // console.log(file.name)

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64(reader.result);
      
    };

    
}

useEffect(()=>{
// console.log("filename changed",filename)
},[filename])

const handleUpload=async()=>{
  // console.log(filename)
    if(base64 && filename!==""){
        // console.log(base64);
        const token = await getIdTokenClaims();
        axios.defaults.headers.Authorization ='Bearer '+token.__raw;
        
        await axios.patch(`${process.env.REACT_APP_API_GATEWAY}/sendfile/${filename}`,base64);
  
        // console.log(data);
        toast({
          title: "File uploaded.",
          description: "File upload successfull redirecting to dashboard.",
          status: "success",
          duration: 1500,
          isClosable: true,
        })
        history.push("/dashboard")
        
    }
}

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="green"><AddIcon mr="1px"/>Upload File</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select A file to upload</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <input type="file" placeholder="select file" onChange={handleFileChange}/>
          </ModalBody>

          <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={handleUpload} disabled={base64?false:true}>
              Upload
            </Button>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UploadFile;
