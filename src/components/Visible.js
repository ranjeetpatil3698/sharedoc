import React,{useState} from 'react'
import { Switch } from "@chakra-ui/react";
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';



const Visible = ({state,id}) => {
    const [Check]=useState(state);
    const { getIdTokenClaims } = useAuth0();

    const handleChange=async  (e)=>{
        // console.log("switch checked",e.target)
        const token = await getIdTokenClaims();

        axios.defaults.headers.Authorization ='Bearer '+token.__raw;
        await axios.patch(`${process.env.REACT_APP_API_GATEWAY}/updatefile/${id}`,
            {
                type:"visible",
                value:!Check
            }
        );
  
        //add notif to tell visiblity is changed

        
    }

    
    return (
        <div>
            <Switch defaultChecked={state} onChange={handleChange} value={Check}/>
        </div>
    )
}

export default Visible
