import Input from './components/Input'
import List from './components/List'
import './scss/styles.css'
import { ListContextProvider } from './components/Context'

// Hosting
import { initializeApp } from 'firebase/app'
import { FunctionComponent } from 'react'

const firebaseConfig = {
    apiKey: 'AIzaSyCSMPerlDp426hlWmw9h51BtNzlN38pqdg',
    authDomain: 'to-do-list-6b07f.firebaseapp.com',
    projectId: 'to-do-list-6b07f',
    storageBucket: 'to-do-list-6b07f.appspot.com',
    messagingSenderId: '294566424651',
    appId: '1:294566424651:web:fad5fef50a6b8b76139dce',
    measurementId: 'G-T8KD0CSYL7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const App: FunctionComponent = () => {
    return (
        <div className="App-box">
            <div className="App">
                <ListContextProvider>
                    <Input />
                    <List />
                </ListContextProvider>
            </div>
        </div>
    )
}

export default App
