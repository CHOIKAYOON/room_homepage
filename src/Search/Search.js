import React, { Component }  from 'react';
import '../Search/Search.css';


class Search extends Component  {
    render(){
        return(
            <div className ="Search_Column">
               <div className="Search_item">
                    <p>
                        <a href="" className="Search_Main_Name">
                            아파트
                        </a>
                        (매매/전월세/신축분양)
                    </p>
                    <p>
                        <a href="">
                            빌라,투룸+
                        </a>
                        (매매/전월세)
                    </p>
                    <p>
                        <a href="">
                            월세
                        </a>
                        (전월세)
                    </p>
                    <p>
                        <a href="">
                            오피스텔/도시형생활주택
                        </a>
                        (전월세)
                    </p>
               </div>
               <div className="Search_Box">
               <img alt="" draggable="false" src="//s.zigbang.com/v2/web/search/ic-search2x.png" class="rn-1p0dtai rn-1pi2tsx rn-1d2f490 rn-1272l3b rn-u8s1d rn-zchlnj rn-ipm5af rn-13qz1uu rn-1wyyakw" />                 
                   <input type="text" ></input>
                   <button type="sudmit">찾아보기</button>
               </div>
            </div>
        )
    }

}

export default Search;