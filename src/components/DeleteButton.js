import React from 'react'
import {Button,useToast} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {useHistory} from "react-router-dom";



const DeleteButton = ({id,filename}) => {
    const { getIdTokenClaims } = useAuth0();
    const history=useHistory();
    const toast=useToast();

    const handleclick=async ()=>{
        // console.log("item deleted");
        const token = await getIdTokenClaims();

        axios.defaults.headers.Authorization ='Bearer '+token.__raw;
        const data = await axios.patch(`${process.env.REACT_APP_API_GATEWAY}/deletefile/${id}`,
            {
                filename
            }
        );
        // console.log(data)
        toast({
            title: "File Deleted",
            description: "File Deleted Successfully Refreshing dashboard.",
            status: "error",
            duration: 1200,
            isClosable: true,
          })
        history.push("/dashboard")

    }
    return (
        <div onClick={handleclick}>
            <Button colorScheme="red" variant="outline">
            <DeleteIcon/>  
            </Button>
        </div>
    )
}

export default DeleteButton
