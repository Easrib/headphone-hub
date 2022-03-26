import React from 'react';

const Question = () => {
    return (
        <div className='mt-2 container bg-light'>
            <h1>Question and Answer</h1>
            <div className="text-start p-4">
                <h2>What is the difference between State and Props</h2>
                <p ><ul>
                    <li>State is internal and props are external</li>
                    <li>State is can be modified but props can not be modified</li>
                    <li>At props data is passed from one component to another while at state data can be processed on the same component.</li>
                    <li>State can be used with state only where props can be used with state and functional component</li>
                    <li>props can be accessed by child component but state can’t.</li>
                </ul></p>
                <h2>How useState work?</h2>
                <p>useState is a hook which empowers the function component. It contains two inner function. One is state and another is setState. state consists the initial value where setState change the initial value. We can declare one or more state variables in function components using useState hooks. This hooks declare a state, access and read the state and update the state.</p>
            </div>
        </div>
    );
};

export default Question;