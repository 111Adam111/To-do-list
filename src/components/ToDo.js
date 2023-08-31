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
    const [text, setText] = useState(content)
    const [isEdited, setIsEdited] = useState(false)
    const { list, setList } = useContext(ListContext)
    const [showIcons, setShowIcons] = useState(false)
    const [color, setColor] = useState(0)
    const [colors, setColors] = useState([
        '#fff',
        '#000',
        '#ff0000',
        '#3300ff',
        '#18ff00',
    ])

    // Edit To-do
    const handleEdit = (event) => {
        setIsEdited(!isEdited)
        event.stopPropagation()
        setTimeout(() => {
            inputRef.current.focus()
        }, 100)
    }

    // Edit-aproval button
    const handleAccept = (event) => {
        setText(inputRef.current.value)
        setIsEdited(!isEdited)
        setShowIcons(!showIcons)
        event.stopPropagation()
    }
    // Remove button
    const handleRemove = (id) => {
        setList(list.filter((item) => item.props.id !== id))
    }
    // Show options
    const toggleIconBox = (event) => {
        setShowIcons(!showIcons)
        event.stopPropagation()
        isEdited && handleAccept(event)
    }

    // Change color
    const handleClick = () => {
        setColor(color >= 4 ? 0 : color + 1)
    }

    // Prevents color change when clicking input field
    const inputClick = (event) => event.stopPropagation()

    return (
        <div
            className="toDo"
            onClick={handleClick}
            style={{ borderLeft: ' 3px solid ' + colors[color] }}
        >
            <div className="content">
                {isEdited ? (
                    <input
                        defaultValue={text}
                        ref={inputRef}
                        onClick={inputClick}
                    />
                ) : (
                    <p>{text}</p>
                )}
            </div>
            <div className="icon-box">
                {showIcons && (
                    <div className="icon-container optional">
                        {isEdited ? (
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
