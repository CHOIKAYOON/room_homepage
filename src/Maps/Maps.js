import React, { Component } from 'react';
import '../Maps/Maps.css';

class Maps extends Component {
    render() {
        const data = {
            img: {
                url_1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXIqKMIh-tFv_gmq1Jx3vhJBefEie-GtbAVdxxU1TxsV_ZoD_N&usqp=CAU',
                url_2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGx03G8WXhWIf6wmCox01Pwbo1LLBwzqkvwUmpaVZBfHhzSMDa&usqp=CAU',
                url_3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxO9WllBymMIRbKriCo4SOL3wmA_C4Du-eJSWVN6AOMIPfhwgr&usqp=CAU'
            },

            url: {
                url_sam_1: 'https://apps.apple.com/kr/app/jigbang-jiggeorae-joheun-bang/id503098735',
                url_sam_2: 'https://play.google.com/store/apps/details?id=com.chbreeze.jikbang4a'
            }
        }
        return (
            <div className="Maps_Column">
                <div className="Maps_Colunm_img">
                    <img src={data.img.url_1} alt="" />
                </div>
                <div className="Maps_title">
                    <p>직방앱을 다운받으세요!</p>
                    <a href={data.url.url_sam_1}>
                        <img src={data.img.url_2} alt="" />
                    </a><br></br>
                    <a href={data.url.url_sam_2}>
                        <img src={data.img.url_3} alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Maps
