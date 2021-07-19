import React,{useState} from 'react';
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
  const [base64, setBase64] = useState(null);
  

  const handleFileChange = async e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64(reader.result);
      
    };

    
}

const handleUpload=()=>{
    if(base64){
        console.log(base64);
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
