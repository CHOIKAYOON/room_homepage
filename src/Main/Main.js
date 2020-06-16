import React, { Component }  from 'react';
import Search from '../Search/Search';
import '../Main/Main.css';

class Main extends Component  {
    render(){
        return(
            <div className ="Main_Column">
                나는 메인
                <Search />
            </div>
        )
    }

}

export default Main;