import { Stack, HStack, VStack, Box } from "@chakra-ui/react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import MainHeading from "../components/MainHeading";
import { useAuth0 } from "@auth0/auth0-react";
import {Redirect} from 'react-router-dom'



export default function Home() {
    const { user, isAuthenticated, isLoading ,getAccessTokenSilently} = useAuth0();

    
    if (isLoading) {
        
        return <div>Loading ...</div>;
      }

    if(user){
        

        return <Redirect to ="/dashboard"/>
    }
    
  
  return (
    <Box
      backgroundColor="green.700"
      textColor="white"
      fontFamily="Inter"
      minHeight={{ xl: "750px" }}
      maxHeight={{ xl: "753px" }}
      padding="5rem"
    >
      <VStack spacing={2} >
        <Box>
          <MainHeading />
        </Box>
        <Box textAlign="center">
          
          {user?user.name:""}
         <Logout/>
          <Login />
          
        </Box>
      </VStack>
    </Box>
  );
}
