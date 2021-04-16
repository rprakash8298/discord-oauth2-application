import React from 'react'
import {CLIENT_ID,CLIENT_SECRET,redirects} from '../../env'
const data = async (code) => {
  const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
                redirect_uri: redirects,
                scope: ['identify', 'guilds'],
            }), 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const oauthData = await oauthResult.json();
        console.log(oauthData, code);
        const token = oauthData && oauthData.access_token ? JSON.stringify(oauthData.access_token) : ''
    localStorage.setItem('token', token)
    // localStorage.setItem('access_token',JSON.stringify(oauthData.access_token) )

    return oauthData
}

export default data
