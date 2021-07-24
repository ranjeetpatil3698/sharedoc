import React from 'react';
import { Box,Link,Flex } from '@chakra-ui/react';
import {Link as ReachLink} from "react-router-dom";
import Logout from './Logout';

export default function LoggedUserNav() {
  return (
    <Box>
        <Flex>
        <Link as={ReachLink} to="/dashboard">
            <Box
            fontSize="1rem"
            border="3px solid"
            borderColor="green.400"
            py="0.5rem"
            px="2rem"
            backgroundColor="green.500"
            borderRadius="0.3rem"
            my="1rem"
            cursor="pointer"
            textColor="white"
            mr="1rem"
            >Go To Dashboard</Box>
            
        </Link>
        <Logout />
        </Flex>
      
    </Box>
  );
}
