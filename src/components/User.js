import React from "react"
import { Box, Flex,Spacer } from "@chakra-ui/react";
import UploadFile from "./UploadFile";
import { useAuth0 } from '@auth0/auth0-react';




export default function Navbar() {
    const {user}=useAuth0();
    if(user){
        // console.log(user)
    }
  return (
    <Flex border="2px solid green" my="1rem" textAlign="center" mx="10rem" p="2.5rem" borderRadius="0.2rem" >
        <Box textColor="green.500" fontSize="2rem" mr="5rem">
        Hi! {user.nickname} 👋
        </Box>
        <Spacer/>
        <Box>
        <UploadFile />
        </Box>
  </Flex>
  )
}
