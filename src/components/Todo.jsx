import React, { useState } from "react"
import InputArea from "./InputArea"
import TodoItem from "./TodoItem"

function Todo() {

    // const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    // function handleChange(event) {
    //     const newValue = event.target.value
    //     setInputText(newValue)
    // }
    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText]
        })
        
    }

    return (
        <div className="listcontainer">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea 
                onAdd={addItem}
            />
            <div>
                <ul>
                    {items.map(eachItem => (
                        <TodoItem text={eachItem} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo