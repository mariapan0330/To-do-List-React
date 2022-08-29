import React, { useState } from 'react';
import CheckBox from './CheckBox.js'

function App() {
    // with useState, the first item in the array is the current state
    // and the second item is the method that will update that state 
    const [items, setItem] = useState([])
    const [checkBox, setCheckBox] = useState('dark')
    let currentCheckBoxes = [];
    function handleSubmit(e){
        e.preventDefault()
        currentCheckBoxes.push('dark') // adding a new dark button
        console.log(currentCheckBoxes);
        const item = e.target.todoItem.value
        let newItem = [...items, item]
        setItem(newItem)
        e.target.todoItem.value = ''
    }

    function handleCheckBoxClick(){
        // let newColor = [...checkBox, 'success']
        setCheckBox('success')
        console.log('Button was clicked');
    }

    return (
        <>
                {/* <p className="mt-3">&#x2022; {item}</p> */}
            <table className="table mt-3">
                <thead className='table-success'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">TO DO</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, idx) => 
                        <tr>
                            <th scope="row">
                                {currentCheckBoxes.map((cb, i) =>
                                    <CheckBox color={cb} idx={idx+1} handleCheckBoxClick={handleCheckBoxClick}/>
                                )}
                            </th>
                            <td>{item}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <form className='d-flex' onSubmit={handleSubmit}>
                <input className='col form-control mt-3 mb-2' type='text' placeholder='Add something to this list...' name='todoItem'/>
                <input className='btn btn-dark col-3 me-2 mt-3 mb-2 ms-2 px-3 py-2' type='submit' value='Add'/>
            </form>
        </>  
    );
}

export default App;
