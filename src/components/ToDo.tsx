import React, { useState, useContext, useRef } from 'react'
import {
    CiCircleRemove,
    CiCircleCheck,
    CiCircleMore,
    CiEdit,
} from 'react-icons/ci'
import { ListContext } from './Context'

const ToDo = ({ content, id }) => {
    const inputRef = useRef(null)
    const { list, setList } = useContext(ListContext)
    const [todo, setTodo] = useState({
        text: content,
        isEdited: false,
        showIcons: false,
        color: 0,
        colors: ['#fff', '#000', '#ff0000', '#3300ff', '#18ff00'],
    })

    // Edit To-do
    const handleEdit = (event) => {
        setTodo({
            ...todo,
            isEdited: !todo.isEdited,
        })
        event.stopPropagation()
        setTimeout(() => {
            inputRef.current.focus()
        }, 100)
    }

    // Edit-aproval button
    const handleAccept = (event) => {
        setTodo({
            ...todo,
            text: inputRef.current.value,
            isEdited: !todo.isEdited,
            showIcons: !todo.showIcons,
        })
        event.stopPropagation()
    }

    // Remove button
    const handleRemove = (id) => {
        setList(list.filter((item) => item.props.id !== id))
    }

    // Show options
    const toggleIconBox = (event) => {
        setTodo({
            ...todo,
            showIcons: !todo.showIcons,
        })
        event.stopPropagation()
        todo.isEdited && handleAccept(event)
    }

    // Change color
    const handleClick = () => {
        setTodo({
            ...todo,
            color: todo.color >= 4 ? 0 : todo.color + 1,
        })
    }

    // Prevents color change when clicking input field
    const inputClick = (event) => event.stopPropagation()

    return (
        <div
            className="toDo"
            onClick={handleClick}
            style={{ borderLeft: ' 3px solid ' + todo.colors[todo.color] }}
        >
            <div className="content">
                {todo.isEdited ? (
                    <input
                        defaultValue={todo.text}
                        ref={inputRef}
                        onClick={inputClick}
                    />
                ) : (
                    <p>{todo.text}</p>
                )}
            </div>
            <div className="icon-box">
                {todo.showIcons && (
                    <div className="icon-container optional">
                        {todo.isEdited ? (
                            <CiCircleCheck
                                className="icon"
                                onClick={handleAccept}
                            />
                        ) : (
                            <CiEdit className="icon" onClick={handleEdit} />
                        )}
                        <CiCircleRemove
                            className="icon"
                            onClick={() => handleRemove(id)}
                        />
                    </div>
                )}
                <div className="icon-container">
                    <CiCircleMore className="icon" onClick={toggleIconBox} />
                </div>
            </div>
        </div>
    )
}

export default ToDo
