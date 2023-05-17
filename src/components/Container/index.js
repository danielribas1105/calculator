import { useState } from "react";
import Button from '../Button';
import Input from '../Input';
import './Container.css';

const Container = () => {

    const [currentNumber, setCurrentNumber] = useState('');
    const [firstNumber, setFirstNumber] = useState('0');

    const toClickBtn = (evento) => {
        evento.preventDefault();
        setCurrentNumber(prev => `${prev}${evento.target.value}`);
    };

    const toClickClear = () => {
        setCurrentNumber('0');
    };

    const toSumNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(currentNumber);
            toClickClear();
        }else{
            const sum = Number(firstNumber)+Number(currentNumber);
            setCurrentNumber(String(sum));
        }
    };

    return(
        <section className='container'>
            <div className='content'>
                <Input value={currentNumber}/>
                <div className='content__btn'>
                    <Button label={'C'} clickBtn={toClickClear}/>
                    <Button label={'<'}/>
                    <Button label={'%'}/>
                    <Button label={'/'}/>
                    <Button label={'7'} value={7} clickBtn={toClickBtn}/>
                    <Button label={'8'} value={8} clickBtn={toClickBtn}/>
                    <Button label={'9'} value={9} clickBtn={toClickBtn}/>
                    <Button label={'x'}/>
                    <Button label={'4'} value={4} clickBtn={toClickBtn}/>
                    <Button label={'5'} value={5} clickBtn={toClickBtn}/>
                    <Button label={'6'} value={6} clickBtn={toClickBtn}/>
                    <Button label={'-'}/>
                    <Button label={'1'} value={1} clickBtn={toClickBtn}/>
                    <Button label={'2'} value={2} clickBtn={toClickBtn}/>
                    <Button label={'3'} value={3} clickBtn={toClickBtn}/>
                    <Button 
                        label={'+'}
                        clickBtn={toSumNumbers}
                    />
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