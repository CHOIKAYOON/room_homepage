import React, { Component } from 'react';
import '../Nav/Nav.css';

class Nav extends Component  {
  render(){
    return(
      <div className ="Nav_Column">
          <div className= "Nav_Column_logo">
              <img src="//s.zigbang.com/v1/web/common/new/h_logo_new.png" alt="직방"/>
          </div>
          <div className="Nav_Column_Item">
              <div className="Nav_item">
              <a  href="">아파트<br></br>
                <span>(매매/전월세/신축분양)</span>
              </a>
              </div>
              <div className="Nav_item">
              <a  href="">빌라, 투룸<br></br>
                <span>(매매/전월세)</span>
              </a>
              </div>
              <div className="Nav_item">
              <a  href="">원룸<br></br>
                <span>(전/월세)</span>
              </a>
              </div>
              <div className="Nav_item">
              <a  href="">오피스텔/도시형생활주택<br></br>
                <span>(전/월세)</span>
              </a>
              </div>
              <div className="Nav_item">
              <a  href="">창업사무실<br></br>
                <span>(임대/매매)</span>
              </a>
              </div>
          </div>
          <div className="Nav_top_btn">
                       
                <a  href="">로그인 및 회원가입</a>
          </div>
            <div className="Nav_top_item">     
              <img src="//s.zigbang.com/v1/web/main/btn_agent_register_new.png" alt="중개사무소 가입 및 광고문의" />
            </div>
          </div>
    )
  }
}

export default Nav;
