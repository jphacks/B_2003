import React, { Component } from 'react';
import Link from 'next/link'

class Showmember extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const members = new Array('shunya','kotaro','naoya','kohei','uec');
        const timeline = document.getElementById("member");
        timeline.innerHTML = "";
        for(var i=0;i<members.length;i++){
            const sentence = document.createElement("h5");
            const name = document.createTextNode(members[i]);
            sentence.appendChild(name);
            timeline.appendChild(sentence);
        }
    }
    render(){
        return (
        <div>
            <h1>活動メンバー</h1>
            <div id = "member"></div>
        </div>)
    }
}

export default Showmember;