import React, {useState,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useHistory,Redirect} from 'react-router-dom'
import { CLIENT_ID, redirects } from '../env'
import data from './data/data'
import vid from './media/Planet Earth Revolving.mp4'

const Login = () => {
    const history = useHistory()
  
    const url = `https://discord.com/api/v8/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirects}`
    
    useEffect(async () => {
        const code = new URLSearchParams(window.location.search).get('code')
        // console.log('***',code)
        if (code) {
            await data(code)
            history.push('/dashboard')
          
        }  
    },[])
     
    return (
      <>
    <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
      <source src={vid} type="video/mp4" />
    </video>
    <header className="viewport-header">
      <div className="card" style={{border:'18rem',borderRadius:'10px', background:'rgba(0, 0, 0, 0.1)'}}>
        <div className="card-body text-center mt-2">
		  <a href={url} className="btn btn-md btn-danger rounded-pill">LOGIN WITH DISCORD </a>
          {/* <a href="" className="btn mt-2 text-light">forgot password ?</a> */}
        </div>
      </div>
    </header>
	
	</>
    )
}

export default Login
