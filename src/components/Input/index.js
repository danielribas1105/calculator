import './Input.css';

const Input = (props) => {
    return(
        <div className='input'>
            <input disabled className='visor__up' value={props.value}/>
            <input disabled className='visor__down' value={props.value}/>
        </div>
    );
}

export default Input;