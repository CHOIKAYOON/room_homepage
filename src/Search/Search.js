import React, { Component } from 'react';
import '../Search/Search.css';


class Search extends Component {
    render() {
        const data = {
            img: {
                url: "//s.zigbang.com/v2/web/search/ic-search2x.png"
            },
            nav_Data: [
                {
                    title: [
                        '아파트',
                        '빌라,투룸+',
                        '월세',
                        '오피스텔/도시형생활주택'
                    ],
                    list: [
                        '(전월세)'
                    ]
                }
            ]
        };

        const navData = (item, index) => {
            return (
                <div className="Search_item" key={`tex_${index}`}>
                    <span>
                        {item.title.map((sample, idx) =>
                            <a href="/#" className="Search_Main_Name" key={`text3_${idx}`}>
                                {sample}
                                {item.list.map((text, ide) =>
                                    <p key={`text4_${ide}`}>{text}</p>)}
                            </a>
                        )}
                    </span>
                </div>
            )
        }

        return (
            <div className="Search_Column">
                {data.nav_Data.map((item, index) => (navData(item, index)))}
                <div className="Search_Box">
                    <img alt="" draggable="false" src={data.img.url} />
                    <input type="text" placeholder="원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요"  ></input>
                    <button type="sudmit">찾아보기</button>
                </div>
            </div>
        )
    }
}

export default Search;