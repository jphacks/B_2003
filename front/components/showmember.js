import React, { Component } from 'react';
import Link from 'next/link'

class Showmember extends Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(props){
        //const members = new Array('shunya','kotaro','naoya','kohei','uec');
        
    }
    
    render(){
        /*
        const members = this.props.memberlist;
        const timeline = document.getElementById("member");
        console.log("jsjs");
        timeline.innerHTML = "";
        for(var i=0;i<members.length;i++){
            const sentence = document.createElement("p");
            const name = document.createTextNode(members[i]);
            sentence.appendChild(name);
            timeline.appendChild(sentence);
        }
        */

        return (
        <div>
            <h1>活動メンバー</h1>
            <div id = "member">{this.props.memberlist}</div>
        </div>)
    }
}

export default Showmember;