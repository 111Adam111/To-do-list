import { createContext, ReactNode } from 'react'

export type ListContextType = {
    list: ReactNode[],
    setList:(data:ReactNode[]) => void
}

export const initialValue: ListContextType = {
    list: [],
    setList: (data) => {}
}

export const ListContext = createContext<ListContextType>(initialValue)
