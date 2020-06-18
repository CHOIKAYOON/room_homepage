import React, { Component }  from 'react';
import '../Position/Position.css'

class Position extends Component {
    render(){
        return(
            <div className ="Position_Column">  
               <div className="Position_Column_title">
               <p>소개할게요</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpLZrphcOyr0CB5YNN89i2TU_XyyUBR5B7gEwpiNeFV49xrtXy&usqp=CAU"/>
               </div>
               <div className="Position_Column_title">
                    <p>뉴스</p>
               <a href="">
                    <pre>'디렉토리 매거진 6호 출간'</pre>
               </a>
               <a href="">
                    <pre>'버리기에 시작하기'</pre>
               </a>
               <a href="">
                     <pre>'뜨는 동네&번화가에서 별 탈 없이 사는 법</pre> 
               </a>
               <a href="">
                    <pre>성수동 원룸, 공짜로 살아본 이야기</pre>
               </a>
               <a href="">
                     <pre>허위매몰 잡는 직방 '허위매몰연구소'</pre>
               </a>
               </div>
               <div className="Position_Column_title">
                    <p>공지사항</p>
                    <a href="">
                         <pre>[공지] 직방 개인정보처리방침</pre>
                    </a>
                    <a href="">
                        <pre>[공지] 직방 개인정보처리방침</pre>
                    </a>
                    <a href="">
                        <pre>[공지] 직방 개인정보처리방침</pre>
                    </a>
                    <a href="">
                        <pre>[공지] 직방 개인정보처리방침</pre>
                    </a>
                    <a href="">
                        <pre>[공지] 직방 개인정보처리방침</pre>
                    </a>
                    <a href="">
                        <pre>[공지] 직방 개인정보처리방침</pre>
                    </a>
                    
               </div>
            </div>
        )
    }
}

export default Position;