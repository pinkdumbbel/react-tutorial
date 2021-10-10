import React from 'react';
import { GithubProfile } from '../api/github';

type propState = {
    user: GithubProfile | null
}

const wrapperStyle = {
    marginTop:'100px',
    marginLeft: '100px'
}

const infoDivStyle = {
    display:'flex',
    alignItems:'center'
}

const imgStyle = {
    width:'60px',
    height:'60px',
    borderRadius: '30px',
    marginRight:'10px'
}
function GithubInfo({user}: propState) {

    return(
        <>
        {user !== null && <div style={wrapperStyle}>
        <div style={infoDivStyle}>
            
                <img 
                    src={user?.avatar_url} 
                    alt=''
                    style={imgStyle}
                />
            
            <h3>{user?.name}</h3>
        </div>
        <div>
            <h4>{user?.bio}</h4>
            <p><a href={user.blog} target='_blank' rel="noreferrer">블로그</a></p>
        </div>
    </div>}
    </>
    )
}

export default GithubInfo;