import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/NavBar';
import FilesTable from '../components/FilesTable';
import User from "../components/User"
import { Box } from '@chakra-ui/react';
//TODO:copt url remaining
const Dashboard = () => {
  const { getIdTokenClaims } = useAuth0();
  const {user}=useAuth0();
  const [Files,setFiles]=useState([])

  if(user){
    // console.log(user)
  }

  useEffect(() => {
    const getfiles = async () => {
      const token = await getIdTokenClaims();

      axios.defaults.headers.Authorization ='Bearer '+token.__raw;

      const {data} = await axios.get(`${process.env.REACT_APP_API_GATEWAY}/allfiles`);
      setFiles(data.files.Items)
      
    };
    getfiles();
  }, []);

  // console.log(Files);

  return (
    <Box>
      <Navbar/>
      <User/>
      <Box m="1">
      <FilesTable data={Files}/>
      </Box>
      
    </Box>
  );
};

export default Dashboard;
