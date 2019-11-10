import React from "react";
import ReactDOM from "react-dom";

class Join extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
                닉네임 : <input type="text" value=""></input>
                <p>회원가입하시겠습니까?</p>
                <button>ok</button>

            </div>
        )
    }

}

export default Join