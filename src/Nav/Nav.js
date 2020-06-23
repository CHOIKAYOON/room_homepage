import React, { Component } from 'react';
import '../Nav/Nav.css';

class Nav extends Component {

  render() {
    const data = {
      img: {
        url: "//s.zigbang.com/v1/web/common/new/h_logo_new.png",
        url2: "//s.zigbang.com/v1/web/main/btn_agent_register_new.png"
      },
  
      navData_sample: [
        {
          title: '아파트',
          sub_title: '(매매/전월세/신축분양)',
          list: [
            '매매/전월세',
            '신축분양',
            '인구흐름',
            '우리집 내놓기'
          ]
        },
        {
          title: '빌라',
          sub_title: '(매매/전월세)',
          list: [
            '매매/전월세',
            '신축분양',
            '인구흐름',
            '우리집 내놓기'
          ]
        },
        {
          title: '원룸',
          sub_title: '(전월세)',
          list: [
            '매매/전월세',
            '신축분양',
            '인구흐름',
            '우리집 내놓기'
          ]
        },
        {
          title: '오피스텔',
          sub_title: '(전월세)',
          list: [
            '매매/전월세',
            '신축분양',
            '인구흐름',
            '우리집 내놓기'
          ]
        },
        {
          title: '창업사무실',
          sub_title: '(임대/매매)',
          list: [
            '매매/전월세',
            '신축분양',
            '인구흐름',
            '우리집 내놓기'
          ]
        },
      ]
    };
    const renderItems = (item, idx) => {
      return (
        <div className="Nav_item" key={`renderItems_${idx}`} >
          <a href="/#" >
            {item.title}
            <br />
            <span>{item.sub_title}</span>
          </a>
          <div className="depth2_bx" >
            {item.list.map((sub_item, index) => (
              <React.Fragment key={`items_${index}`}>
                <a href="/#">{sub_item}</a><br />
              </React.Fragment>)
            )}
          </div>
        </div>
      )
    }

    return (
      <div className="Nav_Column">
        <div className="Nav_Column_logo">
          <img src={data.img.url} alt="직방" />
        </div>
        <div className="Nav_Column_Item">
          {data.navData_sample.map((item, index) => renderItems(item, index))}
        </div>
        <div className="Nav_top_item">
          <a href="/#">로그인 및 회원가입</a>
          <img src={data.img.url2} alt="중개사무소 가입 및 광고문의" />
        </div>
      </div>
    )
  }
}

export default Nav;
