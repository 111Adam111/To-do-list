import { useContext, useRef, KeyboardEventHandler, FunctionComponent } from 'react'
import { ListContext } from './Context'
import ToDo from './ToDo'
import { v4 as uuidv4 } from 'uuid'

const Input: FunctionComponent = () => {
    let { list, setList } = useContext(ListContext)
    const inputRef = useRef<HTMLInputElement | null>(null)

    // Add To do
    const addTodo = (): void => {
        const input = inputRef.current
        const key: string = uuidv4()
        if (input && input.value) {
            setList([
                ...list,
                <ToDo content={input.value} key={key} id={key} />,
            ])
            input.value = ''
            input.focus()
        }
    }

    // Enter Add
    const enter: KeyboardEventHandler = (event) =>
        event.key === 'Enter' && addTodo()

    return (
        <div className="input-box" onKeyDown={enter}>
            <input type="text" ref={inputRef} />
            <div className="btn" onClick={addTodo}>
                <p>Add</p>
            </div>
        </div>
    )
}

export default Input
