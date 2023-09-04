import { useContext, FunctionComponent } from 'react'
import { ListContext } from './Context'


const List: FunctionComponent = () => {
    const { list } = useContext(ListContext)
    return <div className="list">{list}</div>
}

export default List
