import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import List from './Components/List';
import { useState } from 'react';

function App() {
  const [listItem, setListItem] = useState([]);
  const changeList = (list)  => {
    setListItem(list)
  };
  return (
    <div className="App">
      <SearchBar setListItem={changeList} />
      <List listItem={listItem} />
    </div>
  );
}

export default App;
