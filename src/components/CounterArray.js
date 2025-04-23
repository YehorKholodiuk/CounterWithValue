import React, {useState} from 'react';

const CounterArray = (props) => {
    const [counters, setCounters] = useState([1,2,3])

    const changeCounters = (value, ind) => {

        const newCounters = counters.map((counter, index) => index === ind ?
        counter + value: counter
        )
        setCounters(newCounters)
    }
    return (
        <div>
            {counters.map((counter, index) => (<div>
                <button onClick = {() => changeCounters(-1, index)}> - </button>
                    {counter}
                <button onClick={() => changeCounters(1, index)}> + </button>
            </div>))}
        </div>
    );
};

export default CounterArray;
