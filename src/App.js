import { useEffect, useState } from "react";
// import logo from './logo.png';
import './App.scss';
import View from "./view";
import AddPost from './addPost';
import NavigationBar from './navigation';
import { Routes, Route } from "react-router-dom";


function App() {

  const [listItems, setListItems] = useState([]);

  const updateListItems = (AddPost) => {

    console.log(AddPost)

    localStorage.setItem("list", JSON.stringify([...listItems, AddPost]))

    setListItems([...listItems, AddPost]);
  };

  useEffect(() => {
    const listContents = localStorage.getItem("list")
    setListItems(JSON.parse(listContents) || [])
  }, [])



  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route
          path="/Test1"
          element={<div> test1 </div>}
        />
        <Route exact path="/" element={<View addPost={listItems} updateListItems={(post) => updateListItems(post)}/>} />
        
      </Routes>

    </div>
  )
};

export default App;


