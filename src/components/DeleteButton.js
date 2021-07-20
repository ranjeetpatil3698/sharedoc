import React from 'react'
import {Button} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {useHistory} from "react-router-dom";



const DeleteButton = ({id,filename}) => {
    const { getIdTokenClaims } = useAuth0();
    const history=useHistory();


    const handleclick=async ()=>{
        console.log("item deleted");
        const token = await getIdTokenClaims();

        axios.defaults.headers.Authorization ='Bearer '+token.__raw;
        const data = await axios.patch(`${process.env.REACT_APP_API_GATEWAY}/deletefile/${id}`,
            {
                filename
            }
        );
        console.log(data)
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
