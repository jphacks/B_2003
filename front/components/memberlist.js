import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import Showmember from '../components/showmember'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../node_modules/react-bootstrap/Button';

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
        return (<div className="text-center">
            <p><h1>Member list</h1></p>
            <p>　</p>
            <p><div><h4>閲覧したいグループ名とそのパスワードを入力してください</h4></div></p>
            <p><form id="information" onSubmit={this.handlesubmit}>
                <p>グループ名:　<input type="text" name="name" placeholder="Name" required></input></p>
                <p>グループパスワード:　<input type="text" name="password" placeholder="Password" required></input></p>
                <Button type="submit" variant = "info">メンバーを閲覧</Button>
            </form></p>
            <p>　</p>
            <div id = "showmember"/>
            <p>　</p>
            <div>
                <Link href = "/">
                    <a>Go home</a>
                </Link>
            </div>

        </div>)
    }
}

export default Memberlist;