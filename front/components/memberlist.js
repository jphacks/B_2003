import React, { Component } from 'react';
import Link from 'next/link'
import Showmember from '../components/showmember'

class Memberlist extends Component {

    constructor(props){
        super(props);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlesubmit(e){
        e.preventDefault();
        const method = "POST";
        const body = JSON.stringify({group_name:information.name.value,password_token:information.password.value,});
        console.log(body);

    /*    
        fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/get_number/get_number',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
        //console.log(responseJson);
            if(responseJson.result == 1){
                //メンバーリスト更新
                //location.href = "/show_member";
            }else{
                window.alert("グループ名またはグループパスワードが間違っています。もう一度入力してください。")
            }
        })
      .catch((error) =>{
        window.alert("閲覧時にエラーが起きました。もう一度入力してください。")
        location.href = "/member_list"
        //console.error('error');
      });
    */
    }

    render(){
        const members = new Array('shunya','kotaro','naoya','kohei');
        return (<div>
            <h1>Member list</h1>
            <div>閲覧したいグループ名とそのパスワードを入力してください</div>
            <form id="information" onSubmit={this.handlesubmit}>
                <p>グループ名:<input type="text" name="name" required></input></p>
                <p>グループパスワード:<input type="text" name="password" required></input></p>
                <button type="submit">メンバーを閲覧</button>
            </form>
            <Showmember memberlist = {members}/>
            <div>
                <Link href = "/">
                    <a>Go home</a>
                </Link>
            </div>

        </div>)
    }
}

export default Memberlist;