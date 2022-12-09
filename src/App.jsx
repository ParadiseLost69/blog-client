import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "./features/darkModeSlice";
import "./App.css";
import Blog from "./sections/Blog";
import { CgDarkMode } from "react-icons/cg";

function App() {
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  function toggleDarkMode() {
    dispatch(changeMode());
  }

  //change Head Title
  useEffect(() => {
    document.title = "Home";
  }, []);

  //fetch data
  useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <main className={`App ${darkMode}`}>
      {/* <button className="dark-mode--button button" onClick={toggleDarkMode}>
        Click to change Dark mode
      </button> */}
      <div className="dark-mode__container">
        <p className="dark-mode__title">{darkMode}Mode</p>
        <CgDarkMode className="dark-mode__button " onClick={toggleDarkMode} />
      </div>
      <div className="title__container">
        <h1 className="title__primary">
          teddy Loukas <span className="period">.</span>
        </h1>
        <h2 className="title__secondary">
          a Blog dedicated to learning about technology
        </h2>
      </div>
      <Blog></Blog>
    </main>
  );
}

export default App;
