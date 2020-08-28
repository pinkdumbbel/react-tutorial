import React from 'react'

const profileData = {
    choi: {
        name: '최창열',
        description: '체지방 감량중'
    },
    shanks: {
        name: '샹크스',
        description: '붉은머리 해적단 선장'
    }
}
function Profile({ match }) {

    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) return <div>존재하지 않는 사용자 입니다.</div>

    return (
        <div>
            <h3>{username} (profile.name)</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile