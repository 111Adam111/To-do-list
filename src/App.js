import Input from './components/Input';
import List from './components/List';
import './scss/styles.css';
import { useState } from 'react';
import { ListContext } from './components/Context';


// Hosting
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSMPerlDp426hlWmw9h51BtNzlN38pqdg",
  authDomain: "to-do-list-6b07f.firebaseapp.com",
  projectId: "to-do-list-6b07f",
  storageBucket: "to-do-list-6b07f.appspot.com",
  messagingSenderId: "294566424651",
  appId: "1:294566424651:web:fad5fef50a6b8b76139dce",
  measurementId: "G-T8KD0CSYL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {

const [list, setList] = useState([])


  return (
    <div className='App-box'>
    <div className="App">
      <ListContext.Provider value={{list, setList}}>
      <Input />
      <List />
      </ListContext.Provider>
    </div>
    </div>
  );
}

export default App;
