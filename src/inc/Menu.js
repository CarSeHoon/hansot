import { Route, Routes } from "react-router-dom";
import Picture from "./Picture";

function Menu(props) {
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
          </div>
        </div>
      </section>
    </div>
  </div>
  </>);
}

export default Menu;