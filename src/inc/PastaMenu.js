import  axios  from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Picture from "./Picture";



function PastaMenu(props) {

  const [menuList, setMenuList] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api4/get').then((response)=> {
      setMenuList(response.data)
    })
  }, [])

  return (<>
  <div id="container" className="sub_page">
    <div className="content menu">
      <section className="menu_all">
        <div className="menu_all_wrap tab_st-01">
          <div className="title">
            <h2 className="h2_tit h2_02">한솥메뉴</h2>
          </div>
          <div className="hansot_menu">
            <Routes>
              <Route path="/" element={<Picture />}></Route>
            </Routes>
            <div className='menu_list_wrap'>
              <div id='menu_cont'>
                <div className="list_wrap" id="catelist_12">
                  <p className='dp'>전체보기</p>
                  <h3 className='h3_tit fz_01'> 전체보기</h3>
                  <ul className='menu_cont'>

                    {menuList.map((val)=> {
                      return <li className='item' id='menuList_331'>
                      <div className='item-spacer'>
                          <div className='item-img'><img src={val.img_url}></img></div>
                          <div className='item-text'>
                              <h4 className='h fz_03'>{val.name}</h4>
                              <div className='item-price'>
                                  <span className='blind'>가격 : </span>
                                  <strong>{val.price}</strong>원 
                              </div>
                          </div>
                      </div> 
                  </li>
                    })}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  </>);
}

export default PastaMenu;