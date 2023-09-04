import {
    useState,
    useContext,
    useRef,
    MouseEventHandler,
    ReactElement,
    FunctionComponent
} from 'react'
import {
    CiCircleRemove,
    CiCircleCheck,
    CiCircleMore,
    CiEdit,
} from 'react-icons/ci'
import { ListContext } from './Context'

export type TodoProps = {
    content: string
    id: string
}

interface TodoTypes {
    text: string
    isEdited: boolean
    showIcons: boolean
    color: number
    colors: string[]
}

export const ToDo = ({ content, id }: TodoProps): ReactElement => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    let { list, setList } = useContext(ListContext)
    const [todo, setTodo] = useState<TodoTypes>({
        text: content,
        isEdited: false,
        showIcons: false,
        color: 0,
        colors: ['#fff', '#000', '#ff0000', '#3300ff', '#18ff00'],
    })

    // Edit To-do
    const handleEdit: MouseEventHandler<SVGElement> = (event): void => {
        setTodo({
            ...todo,
            isEdited: !todo.isEdited,
        })
        event.stopPropagation()
        setTimeout(() => {
            inputRef?.current?.focus()
        }, 100)
    }

    // Edit-aproval button
    const handleAccept: MouseEventHandler<SVGElement> = (event): void => {
        setTodo({
            ...todo,
            text: inputRef?.current?.value as string,
            isEdited: !todo.isEdited,
            showIcons: !todo.showIcons,
        })
        event.stopPropagation()
    }

    // Remove button
    const handleRemove = (id: string): void => {
        setList(
            list.filter((item: ReactElement): boolean => item.props.id !== id)
        )
    }

    // Show options
    const toggleIconBox: MouseEventHandler<SVGElement> = (event): void => {
        setTodo({
            ...todo,
            showIcons: !todo.showIcons,
        })
        event.stopPropagation()
        todo.isEdited && handleAccept(event)
    }

    // Change color
    const colorChange = () => {
        setTodo({
            ...todo,
            color: todo.color >= 4 ? 0 : todo.color + 1,
        })
    }

    // Prevents color change when clicking input field
    const inputClick: MouseEventHandler<HTMLDivElement> = (event) =>
        event.stopPropagation()

    return (
        <div
            className="toDo"
            onClick={colorChange}
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
