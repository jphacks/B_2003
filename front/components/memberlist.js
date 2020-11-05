import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import Showmember from '../components/showmember'

class Memberlist extends Component {

    constructor(props){
        super(props);
        this.handlesubmit = this.handlesubmit.bind(this);
        this.state = {
            members : {},
        };
    }

    handlesubmit(e){
        e.preventDefault();
        const method = "POST";
        const body = JSON.stringify({name:information.name.value,password_token:information.password.value,});
        const dom = document.getElementById('showmember')
        console.log(body);
    
        fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/get_number/get_number',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.result == 1){
                //メンバーリスト更新
                this.state.members = responseJson.name
                console.log(responseJson.name)
                console.log(this.state.members)

                ReactDOM.render(<Showmember memberlist = {this.state.members}/>, dom)
                
            }else{
                window.alert("グループ名またはグループパスワードが間違っています。もう一度入力してください。")
            }
        })
      .catch((error) =>{
        window.alert("閲覧時にエラーが起きました。もう一度入力してください。")
        location.href = "/member_list"
        //console.error('error');
      });
    }

    render(){
        return (<div>
            <h1>Member list</h1>
            <div>閲覧したいグループ名とそのパスワードを入力してください</div>
            <form id="information" onSubmit={this.handlesubmit}>
                <p>グループ名:<input type="text" name="name" required></input></p>
                <p>グループパスワード:<input type="text" name="password" required></input></p>
                <button type="submit">メンバーを閲覧</button>
            </form>
            <div id = "showmember"/>
            <div>
                <Link href = "/">
                    <a>Go home</a>
                </Link>
            </div>

        </div>)
    }
}

export default Memberlist;