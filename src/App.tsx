import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BulletinItem from "./Components/Bulletins/Item/BulletinItem";
import BulletinList from "./Components/Bulletins/List/BulletinList";
import Header from "./Components/Bulletins/Header/BulletinHeader";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BulletinList />
    </div>
  );
};

export default App;

{
  /* <h1 className="ui dividing centered header"></h1> */
}
