import React, { Component }  from 'react';
import '../Position/Position.css'

class Position extends Component {
    render(){
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

        const nav_content = (item, index) =>{
            return(
                <div className="Position_Column_title" key={`nav_content_${index}`}>
                     <p>{item.title}</p>
                     <a href="/#">
                        {item.list.map((text, idx) => <pre key={`text_${idx}`}>{text}</pre>)}
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
                {data.nav_data.map((item, index) => nav_content(item, index))}
            </div>
        )
    }
}

export default Position;