import React, { useEffect, useState } from 'react'
import './style/Message.css' 
import useAxios, { baseURL } from '../utils/useAxios.js'
import jwtDecode from 'jwt-decode';
import moment from 'moment'

function MessageDetail() {
    const [message, setMessage] = useState([]); 
    const axios = useAxios() 
    const token = localStorage.getItem("authTokens"); 
    const decoded = jwtDecode(token) 
    const user_id = decoded.user_id  

    

  return (
    <div>MessageDetail</div>
  )
}

export default MessageDetail