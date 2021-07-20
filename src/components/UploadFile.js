import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,Box
} from '@chakra-ui/react';

const UploadFile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getIdTokenClaims } = useAuth0();

  const [base64, setBase64] = useState(null);
  const [filename,setfilename]=useState("")
  
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
  console.log(filename)
    if(base64 && filename!=""){
        console.log(base64);
        const token = await getIdTokenClaims();
        axios.defaults.headers.Authorization ='Bearer '+token.__raw;
        // axios.defaults.headers.Authorization ='Bearer '+'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVhaEhxdFpRQi0xOUZRLTlYcEtkbSJ9.eyJuaWNrbmFtZSI6InJhbmplZXQiLCJuYW1lIjoicmFuamVldCIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84OWRiYzYzMDAyZTYzNGRhMDc2MGQ5YTAyMWU4YTI5ND9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnJhLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIxLTA3LTIwVDA0OjAwOjQxLjQ3MFoiLCJlbWFpbCI6InBhdGlsLnJhbmplZXQuMTdjZTEwNTNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vcmFuamVldC1hdXRoLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MGIxZWQ4NTc0Y2Q3MjAwNmVjZDhmMDQiLCJhdWQiOiI2bHdRc0o0UmcxMmdIRDlwQmlrRjhnU1ZtVmp3RXBuUiIsImlhdCI6MTYyNjc1MzY0MSwiZXhwIjoxNjI2Nzg5NjQxfQ.k1hXdaWppeRAYi7xKs9LJqwbG2p63upRWgWQ3YACjIOQekgNIuKoPJA3YK2snFJS3OWVAA-CWeVFadB79e4jbI1BanJgN1apzvlEzR6k5AUfqh0J8Jt0b_n6TtrjPZmpPt3U6JjxWffC_bOSJN25oiAGWfZi8PoN-MV3p_Xoi_SQFsJYO7JqNhoRGfc296KGlohBSkkIXfKEQQQdeSzimCQjPdsL_7tnXLw2mJgflfT_aAxiBdfDOGi1s0nlEhbFQfxLgJW4zFddpfzM7T2wBxYLAX9A0b2xUrGtHQoyd4pBhgAzdLmDge4Q7z5Tgx9-pOLFvkIIi6JgP1r3HhgD2g';
        const data = await axios.patch(`${process.env.REACT_APP_API_GATEWAY}/sendfile/${filename}`,base64);
  
        console.log(data);
        
    }
}

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="green">Upload File</Button>

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
