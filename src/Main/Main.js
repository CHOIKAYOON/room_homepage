import React, { Component }  from 'react';
import Search from '../Search/Search';
import '../Main/Main.css';

class Main extends Component  {
    render(){
        return(
            <div className ="Main_Column">
                <div className="Main_Column_img">
                  <img src="data:image/png;base64,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" />
                </div>
                <Search />            
            </div>
        )
    }

}

export default Main;