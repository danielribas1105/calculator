import { useState } from "react";
import Button from '../Button';
import Input from '../Input';
import './Container.css';

const Container = () => {

    let calc = 0;

    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');

    const toClickClear = () => {
        setCurrentNumber('0');
    };

    const toClickBtn = (evento) => {
        evento.preventDefault();
        setCurrentNumber(prev => `${prev==='0'?'':prev}${evento.target.value}`);
    };

    const toCalculate = (evento) => {
        switch (evento.target.value){
            case '+':
                if(firstNumber === '0'){
                    setFirstNumber(currentNumber);
                    toClickClear();
                }else{
                    calc = calc + Number(firstNumber) + Number(currentNumber);
                    setCurrentNumber(String(calc));
                    setFirstNumber('0');
                }
            break;
            case '-':
                if(firstNumber === '0'){
                    setFirstNumber(currentNumber);
                    toClickClear();
                }else{
                    calc = Number(firstNumber) - Number(currentNumber);
                    setCurrentNumber(String(calc));
                    setFirstNumber('0');
                }
            break;
            case 'x':
                if(firstNumber === '0'){
                    setFirstNumber(currentNumber);
                    toClickClear();
                }else{
                    calc = Number(firstNumber) * Number(currentNumber);
                    setCurrentNumber(String(calc));
                    setFirstNumber('0');
                }
            break;
            case '/':
                console.log("Dividir");
            break;
            case '%':
                calc = Number(firstNumber)+
                        (Number(firstNumber)*(Number(currentNumber)/100));
                setCurrentNumber(String(calc));
                setFirstNumber('0');
            break;
            default:
                console.log("botão default calculate")
            break;
        } 
    };

    return(
        <section className='container'>
            <div className='content'>
                <Input value={currentNumber}/>
                <div className='content__btn'>
                    <Button label={'C'} clickBtn={toClickClear}/>
                    <Button label={'<'} value={'<'} clickBtn={toCalculate}/>
                    <Button label={'%'} value={'%'} clickBtn={toCalculate}/>
                    <Button label={'/'} value={'/'} clickBtn={toCalculate}/>
                    <Button label={'7'} value={7} clickBtn={toClickBtn}/>
                    <Button label={'8'} value={8} clickBtn={toClickBtn}/>
                    <Button label={'9'} value={9} clickBtn={toClickBtn}/>
                    <Button label={'x'} value={'x'} clickBtn={toCalculate}/>
                    <Button label={'4'} value={4} clickBtn={toClickBtn}/>
                    <Button label={'5'} value={5} clickBtn={toClickBtn}/>
                    <Button label={'6'} value={6} clickBtn={toClickBtn}/>
                    <Button label={'-'} value={'-'} clickBtn={toCalculate}/>
                    <Button label={'1'} value={1} clickBtn={toClickBtn}/>
                    <Button label={'2'} value={2} clickBtn={toClickBtn}/>
                    <Button label={'3'} value={3} clickBtn={toClickBtn}/>
                    <Button label={'+'} value={'+'} clickBtn={toCalculate}/>
                    <Button label={'D'}/>
                    <Button label={'0'} value={0} clickBtn={toClickBtn}/>
                    <Button label={','}/>
                    <Button label={'='}/>
                </div>
            </div>
        </section>
    );
} 

export default Container;