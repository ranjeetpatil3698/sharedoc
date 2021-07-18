import React, { useEffect } from 'react';
import axios from 'axios';
import Logout from '../components/Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getfiles = async () => {
      const token = await getAccessTokenSilently();
      console.log(token);

      
      const data = await axios.get(
        `${process.env.REACT_APP_API_GATEWAY}/allfiles`,
        { crossdomain: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      console.log(data);
    };
    getfiles();
  }, []);

  return (
    <div>
      <Logout />
      Hello
    </div>
  );
};

export default Dashboard;
