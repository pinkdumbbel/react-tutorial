import React from 'react';

const formStyle = {
    marginLeft:'100px',
}
const inputStyle = {
    width:'20%',
    outline: 'none',
    borderWidth: '0 0 1px',
    borderColor: 'black',
    marginRight:'20px',
    marginLeft: '10px'
}

const btnStyle = {
    width:'50px',
    height:'30px',
    color:'white',
    background:'black',
    borderRadius: '3px'
}

type propsType = {
    text: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

function GithubInput({text, onChange, onSubmit}: propsType) {
    return(
        <form style={formStyle} onSubmit={onSubmit}>
            <input 
                style={inputStyle}
                value={text}
                onChange={onChange}
            />
            <button
                style={btnStyle}
            >조회</button>
        </form>
    )
}

export default GithubInput;