import React from 'react';
import './Counter.css'

function Counter({numClics}) {
    return (
        <div className='counter-box'>
            <p>
                {numClics}
            </p>
        </div>
    )
}

export default Counter;