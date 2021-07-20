import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import Logout from '../components/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import UploadFile from '../components/UploadFile';
import FilesTable from '../components/FilesTable';


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
    <div>
      <Logout />
      <UploadFile/>
      Hello {user?user.nickname:""}
      <FilesTable data={Files}/>
    </div>
  );
};

export default Dashboard;
