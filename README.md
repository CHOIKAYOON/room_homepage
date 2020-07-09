React로 구현했으며, css를 제대로 사용하고 이해하기 위해 만든 직방 웹 어플리케이션입니다. 
--

![직방](https://user-images.githubusercontent.com/31337244/85659470-8ac7a480-b6ef-11ea-824e-8816df3e3f52.JPG)
![직방2](https://user-images.githubusercontent.com/31337244/85659477-8d29fe80-b6ef-11ea-9aa4-49c28ca4cc81.JPG)

-----
### Components 구조
* Footer.js - 하단 Components
* Main.js - Main img Components
* Maps.js - 구글스토어 및 맵 스토어 
* Nav.js - 메뉴 및 상단 Components
* Position.js - 기사 및 공지사항 Components
* Search.js - 메인 화면 안의 검색 Components
* App.js 
* css파일 

    
### Components Data 관리 - 객체 선언.
직방에 대한 data는 외부 API를 호출이 아니라 객체에 값을 일일히 담아 개발을 진행했습니다. 
(모든 컴포넌트들도 똑같이 개발 진행했으므로 몇개의 파일만 설명 진행하겠습니다.)
ex) Nav.js / Position.js
ex) Nav.css / Position.css


#### Nav.js
```
import React, { Component } from 'react';
import '../Nav/Nav.css';

class Nav extends Component {

  render() {
  //data라는 객체에 img, nevData_sampe 값 선언.
  //img 관련되 url 
  //navData_sample에는 직방 페이지에서 보여줄 값들을 배열에 넣었다. 
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
            '빌라. 투룸 찾기',
            '찜한 매몰',
            '빌라내놓기'
          ]
        },
        {
          title: '원룸',
          sub_title: '(전월세)',
          list: [
            '방 찾기',
            '찜한 매몰',
            '방 내놓기'
          ]
        },
        {
          title: '오피스텔',
          sub_title: '(전월세)',
          list: [
            '오피스텔 찾기',
            '찜한 매몰',
            '오피스텔 내놓기'
          ]
        },
        {
          title: '창업사무실',
          sub_title: '(임대/매매)',
          list: [
            '상가 . 점포',
            '사무실',
            '공유 오피스',
            '찜한 매몰'
          ]
        },
      ]
    };
    
    //반복되는 코드 값을 함수로 하나 선언해서 그 안에서 map으로 값 호출
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
        //반복되는 navData_sample 설계를 map으로 돌려 함수호출  
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

```
-----

#### Position.js
```
import React, { Component }  from 'react';
import '../Position/Position.css'

class Position extends Component {
    render(){
    //data라는 변수에 객체를 만들었다. 그 안에는 보여줄 데이터 값들을 배열로 담았다. 
    //nav_data에는 직방 홈페이지 밑 공지사항 및 뉴스를 값을 선언했다. 
        const data ={        
            title : '소개할게요',
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpLZrphcOyr0CB5YNN89i2TU_XyyUBR5B7gEwpiNeFV49xrtXy&usqp=CAU",        
            nav_data : [                
                {
                    title : '뉴스',
                    list : [
                        '디렉토리 매거진 6호 출간',
                        '버리기에 시작하기',
                        '뜨는 동네&번화가에서 별 탈 없이 사는 법',
                        '성수동 원룸, 공짜로 살아본 이야기',
                        '허위매몰 잡는 직방 허위매몰연구소'
                    ]
                },
                {
                    title : '공지사항',
                    list : [
                        '[공지] 직방 개인정보처리방침',
                        '[공지] 직방 개인정보처리방침',
                        '[공지] 직방 개인정보처리방침',
                        '[공지] 직방 개인정보처리방침',
                        '[공지] 직방 개인정보처리방침'
                    ]
                }
            ]
        }

      //반복되는 부분의 코드를 변수(nav_content)에 넣어 map을 통해 값 호출
        const nav_content = (item, index) =>{
            return(
                <div className="Position_Column_title" key={`nav_content_${index}`}>
                     <p>{item.title}</p>
                     <a href="/#">
                        {item.list.map((text, idx) => <pre key={`text_${idx}`}>{text}                       </pre>)}
                    </a><br />
               </div>
            )
        }
        
        return(
            <div className ="Position_Column">  
               <div className="Position_Column_title">
                     <p>{data.title}</p>
                    <img src= {data.img} alt=""/>
               </div>
               //nav_data를 map를 통해 객체의 값을 넣을 것이다.
               //똑같은 부분의 코드가 많아서 map을 통해 위에 있는 nav_content 변수 호출 
                {data.nav_data.map((item, index) => nav_content(item, index))}
            </div>
        )
    }
}

export default Position;
```
---

### Nav.css
```
.Nav_Column{
     height: 51px;
    }

.Nav_Column_logo img{
    width: 62px;
     height: 30px; 
     margin: 8px;
    }

.Nav_Column_logo{
    float: left;
}

.Nav_Column_Item{
    float: left;
}

.Nav_item{
    float: left; 
    margin: 10px; 
    font-size: 12px;
}

.Nav_top_item img{
    width: 100px; 
    float: right;
}

.Nav_top_item{
    float: right;
}

.Nav_top_item a{
    text-decoration: none;
    color: black;
    font-size: 12px;
    margin: 19px;
    display: inline-block;
} 

.Nav_item a{
    text-decoration: none; 
    color: black;
}

.Nav_item a:hover {
    color: orange;
}

.Nav_item:hover .depth2_bx {
    display: block;
  }

.Nav_item span{
    font-size: 1px; 
    color: gray;
}

.depth2_bx{
    width: 100px;
    z-index: 101;
    position: absolute;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px 0px;
    box-sizing: border-box;
    padding: 8px 0px;
    display: none;
}

.depth2_bx a {
    display: inline-block;
    margin: 7px;
    font-size: 8px;
}
```
----

### Position.css
```
.Position_Column{ width: 100%;
    padding: 27px 0px;
    background: white;
    overflow: hidden;
    margin: auto;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    }
.Position_Column_title{
    width: 200px;
    height: 160px; 
    float: left;
    margin: 0 14px 0;
}

.Position_Column_title img{
    width: 200px;
    height: 120px;
}

.Position_Column_title p{
    font-size: 12px;
    font-weight: 700;
    border-bottom: 1px solid gray;
}

.Position_Column_title pre{
    font-size: 8px;
}

.Position_Column_title a{
    text-decoration: none;
    color: black;
}
```

