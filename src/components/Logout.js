import React from "react";
import { Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout } = useAuth0();
  return (
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
      onClick={() => logout({ returnTo: window.location.origin })}
    >
    Logout
    </Box>
  );
};

export default Logout;
