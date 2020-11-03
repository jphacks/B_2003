import React, { Component } from 'react';
import Link from 'next/link'
import Button from '../node_modules/react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Groupregistration extends Component {

    constructor(props) {
        super(props);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlesubmit(e){
        e.preventDefault();
        const method = "POST";
        const body = JSON.stringify({name: information.name.value,email_address: information.email_address.value,password: information.password.value,limit: information.limit.value,});
        //console.log(body);
        fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/register_place/register_place',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
        //console.log(responseJson);
            if(responseJson.result == 2){
                window.alert("あなたのトークンは"+responseJson.password_token+"です。必ずメモをとってください。")
            }else{
                window.alert("あなたの団体は登録済みです。ログインしてください。")
            }
            location.href = "/group_log_in";
        })
      .catch((error) =>{
        window.alert("登録時にエラーが起きました。もう一度入力してください。")
        location.href = "/group_registration"
        //console.error('error');
      });
    }

    render(){
        return(<div className='text-center'>
            <h1>Group registration</h1>
            <div><h1>"サービス名"へようこそ</h1>登録情報を入力してください</div>
            <form id="information" onSubmit={this.handlesubmit}>
                <p>団体名:　<input type="text" name="name" required></input></p>
                <p>メールアドレス:　<input type="email" name="email_address" required></input></p>
                <p>パスワード:　<input type="text" name="password" minLength="5" required></input></p>
                <p>同時に活動できる人数:　<input type="number" name="limit" min="1" required></input></p>
                <Button variant='info' type="submit">新規登録</Button>
            </form>
            <div>
                <Link href = "/group_log_in">
                    <a>ログイン</a>
                </Link>
            </div>
            <div>
                <Link href = "/">
                    <a>Go home</a>
                </Link>
            </div>
        </div>)
    }
}