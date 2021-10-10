import React from 'react';
import { useSelector } from 'react-redux';
import GithubInfo from '../components/GithubInfo';
import { RootState } from '../modules';

function GithubInfoContainer() {
    const githubProfile = useSelector((state: RootState) => (state.GithubReducer.userProfile));

    const {data} = githubProfile;

    return(
        <GithubInfo 
            user={data}
        />
    )
}

export default GithubInfoContainer