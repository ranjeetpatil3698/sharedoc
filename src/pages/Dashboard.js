import React, { useEffect } from 'react';
import axios from 'axios';
import Logout from '../components/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import UploadFile from '../components/UploadFile';

const Dashboard = () => {
  const { getAccessTokenSilently,getIdTokenClaims } = useAuth0();
  const {user}=useAuth0();

  if(user){
    console.log(user)
  }

  useEffect(() => {
    const getfiles = async () => {
      const token = await getIdTokenClaims();

      axios.defaults.headers.Authorization ='Bearer '+token.__raw;

      const data = await axios.get(`${process.env.REACT_APP_API_GATEWAY}/allfiles`);
      console.log(data);
    };
    getfiles();
  }, []);

  return (
    <div>
      <Logout />
      <UploadFile/>
      Hello {user?user.name:""}
    </div>
  );
};

export default Dashboard;
