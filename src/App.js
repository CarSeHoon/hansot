import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import Header from "./inc/Header";
import Main from "./inc/Main";
import Menu from "./inc/Menu";
import TotalMenu from "./inc/TotalMenu";
import CareMenu from "./inc/CareMenu";
import MayoMenu from "./inc/MayoMenu";
import PastaMenu from "./inc/PastaMenu";
import { useState, useEffect } from "react";
import Axios from 'axios'
import PremiumMenu from "./inc/PremiumMenu";

function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category_id, setCate] = useState('')
  const [img_url, setImg] = useState('')


  const submitMenu = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: name, 
      price: price, 
      category_id: category_id, 
      img_url: img_url}).then(() => {
      alert("succesful insert");
    });
  };

  return (
    <div className="App">
      <input type="text" name="name" onChange={(e)=> {
        setName(e.target.value)
      }}/>
      <input type="text" name="price" onChange={(e)=> {
        setPrice(e.target.value)
      }}/>
      <input type="text" name="category_id" onChange={(e)=> {
        setCate(e.target.value)
      }}/>
      <input type="text" name="img_url" onChange={(e)=> {
        setImg(e.target.value)
      }}/>
      <button onClick={submitMenu}>Submit</button>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/totalMenu" element={<TotalMenu />}></Route>
          <Route path="/careMenu" element={<CareMenu />}></Route>
          <Route path="/mayoMenu" element={<MayoMenu />}></Route>
          <Route path="/pastaMenu" element={<PastaMenu />}></Route>
          <Route path="/premiumMenu" element={<PremiumMenu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
