import React, { Component } from 'react';
import '../Maps/Maps.css';

class Maps extends Component  {
  render(){
    return(
        <div className="Maps_Column">
            <div className="Maps_Colunm_img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXIqKMIh-tFv_gmq1Jx3vhJBefEie-GtbAVdxxU1TxsV_ZoD_N&usqp=CAU" />
            </div>
            <div className="Maps_title">
                <p>직방앱을 다운받으세요!</p>
                <a href="https://apps.apple.com/kr/app/jigbang-jiggeorae-joheun-bang/id503098735">
                    <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGx03G8WXhWIf6wmCox01Pwbo1LLBwzqkvwUmpaVZBfHhzSMDa&usqp=CAU"/>
                </a><br></br>
                <a href="https://play.google.com/store/apps/details?id=com.chbreeze.jikbang4a">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxO9WllBymMIRbKriCo4SOL3wmA_C4Du-eJSWVN6AOMIPfhwgr&usqp=CAU"/>                </a>
            </div>
        </div>
    )
  }
}

export default Maps
