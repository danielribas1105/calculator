import './Input.css';

const Input = (props) => {
    return(
        <div className='input'>
            <input disabled className='visor__label' value={props.value}/>
            <input disabled className='visor__valor' value={props.value}/>
        </div>
    );
}

export default Input;