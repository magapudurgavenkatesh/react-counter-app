import React,{useState,useEffect} from 'react';
function Counter(){
    const[count,setCount]=useState(()=>{
        const saved=localStorage.getItem("count");
        return saved!==null? Number(saved):0;
    });
    const [step, setStep] = useState(1);

    const max=100000;
    const min=-50000;
    
    useEffect(()=>{
        localStorage.setItem("count",count);
    },[count]);
    const increment=()=>{
        setCount(prev=>((prev+step<=max?prev+step:prev)));
    }
     const decrement=()=>{
        setCount(prev=>((prev+step>=min?prev-step:prev)));
    }
     const reset=()=>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className='counter-display'>{count}</p>
            <div className="step-control">
            <label>Step:</label>
            <input type="number" value={step} onChange={(e) => {
                                            const value = Number(e.target.value);
                                            if (value > 0) setStep(value);
                                            }} />
            </div>
            {count===max &&<p>Maximum Reached</p> }
            {count===min && <p>Minimum Reached</p>}
            {count<0 && <p style={{color:"red"}}>Negative Value</p>}
            <div className="button-group">
            <button className='counter-button' onClick={increment} disabled={count>=max}>Increment</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={decrement} disabled={count<=min}>Decrement</button>
            </div>
        </div>
    );
}
export default Counter