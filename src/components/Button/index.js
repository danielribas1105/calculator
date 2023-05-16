import './Button.css';

const Button = (props) => {
    return(
        <button 
            className='button' 
            value={props.value} 
            onClick={props.clickBtn}
        >
        {props.label}
        </button>
    );
}

export default Button;