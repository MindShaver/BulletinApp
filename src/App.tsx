import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BulletinItem from "./Components/Bulletins/Item/BulletinItem";
import BulletinList from "./Components/Bulletins/List/BulletinList";

// public int App() {}

const App: React.FC = () => {
  return (
    <div className="App">
      <BulletinList />
    </div>
  );
};

export default App;

{
  /* <h1 className="ui dividing centered header"></h1> */
}
