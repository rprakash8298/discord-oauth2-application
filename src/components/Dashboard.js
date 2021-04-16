import React from 'react'
import {useState,useEffect} from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import codeData from './data/data'
import './dashboard.css'
import {discord_dummy} from '../data_discord'

const Dashboard = () => {
  const history = useHistory()
   
    const [username, setUsername] = useState([])
    // const [userId, setUserId] = useState([])
    const [userdiscriminator, setUserdiscriminator] = useState([])
    const [guildId, setGuildId] = useState([])
    const [members, setMembers] = useState(discord_dummy)
  useEffect(async () => {
    //   const code = new URLSearchParams(window.location.search).get('code')
    //     console.log('***',code)
    //     if (code) {
    //        await codeData(code)
    //         history.push('/dashboard')
          
    // }
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
          
        
          const userResult = await fetch('https://discord.com/api/users/@me', {
	        headers: {
	     	authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
         	},
          });
        const data = await userResult.json()
        console.log(data)
        setUsername(data)
        
        // setUserId(data.id)
        setUserdiscriminator(data.discriminator)
         const userGuilds = await fetch('https://discord.com/api/users/@me/guilds', {
	        headers: {
	     	authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
         	},
         });
        const data1 = await userGuilds.json()
        // setGuildId(data1)
        console.log(data1)
         data1.map(data => {
            // console.log(data)
            setGuildId((prevRes) => [...prevRes,data])
        })
        // const ids = (guildId.map((guild) => { return guild.id }))
        // console.log(ids)
        }
    }, [])
    
    const logoutHandler = () => {
        localStorage.removeItem('token')
        history.push('/')
    }
    // const memberHandler = () => {
    //     members.map((el) => {
    //         console.log(el)
    //     })
    // }

    return (
      <>
        {/* {token ? <Redirect to='/' /> : ''} */}
          <div className="grid">
      <div className="nav">
        <div className="nav__container">
         
        </div>
      </div>
      <div className="header">
        <div className="header__container">
          <div className="header__server">
            <div className="server__title">Server</div>
          </div>
          <div className="header__channel">
              {guildId.map((guild,index) =>{
                  const { icon, id, name } = guild
                  return (
                        
            <div className="channel__item" key={index}>
              <h4 className="channel__group">
                <img
                  src={`https://cdn.discordapp.com/icons/${id}/${icon}`}
                  width="32"
                  height="32"
                  style={{borderRadius:"50%", marginRight:'10px'}}
                />
                  <small>{name}</small> 
              </h4>
              {/* <a href="#" className="channel__title" id="guildList" onClick={memberHandler}>Members</a> */}
            </div>
                    )
              })}
            
            
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main__container">
          <div className="main__channel">
            <div className="header__title">Description</div>
          </div>
          <div className="main__chat" >
            <div className="main__post" >
              <div className="post__avatar">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/2922/2922510.svg?token=exp=1618465391~hmac=af4b9434027d5d1e1be0a901f65a9943"
                  width="43"
                  height="43"
                  style={{borderRadius:"50%"}}
                />
              </div>
              <div className="post__content">
                <h5 className="post__name">Pubg_gamer</h5>
                <div className="post__timestamp"></div>
                <div className="post__message">
                  <p>
                    Seeking a place to share your thoughts  creations? Creative
                    Thoughts is all about collaborating, sharing, conversation,
                    and more! We have a wide variety of topics however we’re
                    always listening to suggestions from the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__settings">
            <div className="settings__group">

              <button className="group__setting">
                <i className="fas fa-bell " style={{color:'yellow', borderRadius:"50%"}} />
              </button>
            </div>
              <div className="settings__group">

              <button className="group__setting" onClick={logoutHandler}>
                <i class="fas fa-sign-out-alt" style={{color:'white', borderRadius:"50%"}}/>
              </button>
            </div>  
            
            <div className="profile__badge">
              <div className="profile__user">
                <div className="user__name">{username.username}</div>
                <div className="user__id">{username.id}</div>
              </div>
              <div className="profile__avatar">
                <img
                  src={`https://cdn.discordapp.com/avatars/${username.id}/${username.avatar}`}
                  width="45"
                  height="45"
                  alt=""
                  style={{borderRadius:"50%", marginLeft:"7px"}}
                />
                <div className="avatar__status"></div>
              </div>
            </div>
          
          </div>
          <div className="footer__friends">
            <div className="friend__category">Members</div>
            {members.map((member,index) =>{
                const { name, icons } = member
                return (

            <div className="friend" key={index}>
              <div className="friend__avatar">
                <img
                  src={icons}
                  width="32"
                  height="32"
                  style={{borderRadius:"50%"}}
                />
                <div className="avatar__status"></div>
              </div>
              <div className="friend__user">
                <div className="user__name">{name}</div>
              </div>
            </div>
                )
            })}
            
            
            
          </div>
        </div>
      </div>
    </div>
       </> 
    )
}

export default Dashboard
