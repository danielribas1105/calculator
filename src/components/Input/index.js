import './Input.css';

const Input = (props) => {
    return(
        <div className='input'>
            <input disabled className='visor' value={props.value}/>
        </div>
    );
}

export default Input;