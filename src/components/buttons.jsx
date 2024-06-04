
import { useState } from 'react';
export const Buttons = () =>{
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const regex = /^[0-9]+$/;
    
    const handleClick = (value, e) => {
        debugger
        e.preventDefault();
        setInput(input+value);
        if (regex.test(value)) {
            setOutput(eval(input+value));
        }
    }
    const calculate = (e) => {
        e.preventDefault();
        setOutput(eval(input));
    }
    const handleClear = (e) =>{
        e.preventDefault();
        setInput('');
        setOutput('');
    }
    const handleBack = (e) =>{
        e.preventDefault();
        let i = input.slice(0, -1)
        let lastValue =  i.slice(-1);
        setInput(i);
        if (regex.test(lastValue) || i =='') {
            setOutput(eval(i));
        }
        
        // setOutput('');
    }
    return(    
        <div className='calculator'>
            <div className="display">
                <div className="display_current">{input}
                </div>
                <div className="display_result">{output}</div>
            </div>
          <form className="controls">
            
            <button  onClick={(e) => {handleClear(e)}} className="grey-btn btn">C</button>
            <button  onClick={(e) => {handleBack(e)}} className="grey-btn btn">X</button>
            <button onClick={(e) => {input !='' && handleClick('%',e) }} className="grey-btn btn">%</button>
            <button onClick={(e) => {input !='' && handleClick('/',e)}} className="orange-btn btn">/</button>
        
            <button onClick={(e) => {handleClick('7',e)}} className="btn">7</button>
            <button onClick={(e) => {handleClick('8',e)}} className="btn">8</button>
            <button onClick={(e) => {handleClick('9',e)}} className="btn">9</button>
            <button onClick={(e) => {input !='' && handleClick('*',e)}} className="orange-btn btn">*</button>
            <button onClick={(e) => {handleClick('4',e)}} className="btn">4</button>
            <button onClick={(e) => {handleClick('5',e)}} className="btn">5</button>
            <button onClick={(e) => {handleClick('6',e)}}  className="btn">6</button>
            <button onClick={(e) => {input !='' && handleClick('-',e)}} className="orange-btn btn">-</button>
            <button onClick={(e) => {handleClick('3',e)}} className="btn">3</button>
            <button onClick={(e) => {handleClick('2',e)}} className="btn">2</button>
            <button onClick={(e) => {handleClick('1',e)}} className="btn">1</button>
            <button onClick={(e) => {input !='' && handleClick('+',e)}} className="orange-btn btn">+</button>
            <button className="btn"></button>
            <button onClick={(e) => {handleClick('0',e)}} className="btn">0</button>
            <button onClick={(e) => {input !='' && handleClick('.',e)}} className="btn">.</button>
            <button onClick={(e) => {calculate(e)}} className="eq-btn btn">=</button>
        </form>
      </div>     
    )
}