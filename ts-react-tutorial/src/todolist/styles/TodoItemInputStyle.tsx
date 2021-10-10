import styled from 'styled-components';
import {ChevronDownOutline} from '@styled-icons/evaicons-outline/ChevronDownOutline'

export const IconBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:15%;
    height:100%;
`
export const Unfold = styled(ChevronDownOutline)`
    color: #e9ecef;
    width:50px;
    height:50px;
`
const TodoItemWrapperStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:90px;
    box-sizing:border-box;
`
export const TodoItemFormStyle = styled.form`
    display: flex;
    align-items: center;
    width:85%;
    height:100%;
    
`
export const TodoItemInputStyle = styled.input`
    width: 100%;
    height: 90%;
    border: none;
    outline: none;
    font-size:2em;
    color:#495057;

    ::placeholder,
    ::-webkit-input-placeholder {
        opacity: 0.1;
    }

`


export default TodoItemWrapperStyle;