import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserProfileAsync } from '../api';
import GithubInput from '../components/GithubInput';

function GithubInputContainer() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(getUserProfileAsync.request(text));

        setText('');
    }

    return (
        <GithubInput 
            text={text}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default GithubInputContainer;