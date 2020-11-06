import Button from '../node_modules/react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Login from './login';

class Grouplogin extends Component {

    constructor(props) {
        super(props);
        this.sendinfo = this.sendinfo.bind(this);
    }

    sendinfo(e){
        e.preventDefault();
        const method = "POST";
        const body = JSON.stringify({password: group_info.password.value,email_address: group_info.email_address.value,});
        fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/signin_place/signin_place',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.result == 0){
                window.alert("メールアドレスまたはパスワードが間違っています。")
            }else{
                window.alert("ようこそ!"+responseJson.name+"さん。")
                console.log(responseJson.name)
                console.log(responseJson.facilityID)
                console.log(responseJson.password_token)

                const afterdom = document.getElementById('loginarea')

                ReactDOM.render(<Login name={responseJson.name} facilityID={responseJson.facilityID} password_token={responseJson.password_token}/>, afterdom)
            }
            //location.href = "/log_in";
        })
      .catch((error) =>{
        window.alert("エラーが起きました。もう一度入力してください。")
        //location.href = "/group_log_in"
        //console.error('error');
      });
    }

    render(){
        return (<div>
        <div id = 'loginarea'>
        <p><h1>Group Log in</h1></p>
        <p>　</p>
        <p><div><h4>ログインに必要な情報を入力してください</h4></div></p>

        <p><form id = "group_info" onSubmit={this.sendinfo}>
            <p>メールアドレス:　<input type="email" name="email_address" placeholder="Email" required></input></p>
            <p>パスワード:　<input type="text" name="password" placeholder="Password" required></input></p>
            <Button variant="info" type="submit">ログイン</Button>
        </form></p>
        </div>
        <p><div>
            <Link href = "/group_registration">
                <a>新規登録</a>
            </Link>
        </div>
        <div>
            <Link href = "/">
                <a>Go home</a>
            </Link>
        </div></p>
    </div>)
    }
}

export default Grouplogin;