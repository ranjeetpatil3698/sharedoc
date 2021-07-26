import React from "react"
import { Box, Flex,Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import { useAuth0 } from '@auth0/auth0-react';
import Login from "./Login";
import LoggedUserNav from "./LoggedUserNav";


export default function Navbar() {
    const {isAuthenticated}=useAuth0();
  return (
    <Flex borderBottom="2px solid green" >
        <Box >
        <Logo/>
        </Box>
        <Spacer />
        <Box>
        {isAuthenticated?<LoggedUserNav/>:<Login/>}
        {/* {isAuthenticated?"yes":"no"} */}
        </Box>
  </Flex>
  )
}
