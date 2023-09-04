import {
    ReactElement,
    ReactNode,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react'
import { TodoProps } from './ToDo'

interface List extends Array<ReactElement<TodoProps>> {}

type ListContextType = {
    list: List
    setList: Dispatch<SetStateAction<List>>
}
const initialValue: ListContextType = {
    list: [],
    setList: () => {},
}

export const ListContext = createContext<ListContextType>(initialValue)

export const ListContextProvider = ({ children }: { children: ReactNode }) => {
    const [list, setList] = useState<List>([])

    return (
        <ListContext.Provider value={{ list, setList }}>
            {children}
        </ListContext.Provider>
    )
}
