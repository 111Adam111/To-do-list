import { useContext } from 'react'
import { ListContext } from './Context'
import { FunctionComponent } from 'react'



const List: FunctionComponent = () => {
    const { list } = useContext(ListContext)
    return <div className="list">{list}</div>
}

export default List
