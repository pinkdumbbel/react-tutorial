import React, { useState } from 'react';

type myFormProps = {
    onSubmit: (form: {name: string, exp: string}) => void
}

function MyForm({onSubmit}: myFormProps) {
    const [form, setForm] = useState({
        name:'',
        exp:''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]:value
        })
    }

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(form);
        
        setForm({
            ...form,
            name:'',
            exp: ''
        })
    }
    return(
        <div>
            <form onSubmit={onHandleSubmit}>
                <input type='text' name='name' onChange={onChange} value={form.name} />
                <input type='text' name='exp' onChange={onChange} value={form.exp} />
                <button>등록</button>
            </form>
        </div>
    )
}

export default MyForm;