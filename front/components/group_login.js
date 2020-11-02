import React, { Component } from 'react';
import Link from 'next/link'

class Grouplogin extends Component {

    constructor(props) {
        super(props);
        this.sendinfo = this.sendinfo.bind(this);
    }

    sendinfo(e){
        e.preventDefault();
        const method = "POST";
        const body = JSON.stringify({password: group_info.password.value,email_address: group_info.email_address.value,});
        fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/signin_place/signin_place',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.result == 0){
                window.alert("メールアドレスまたはパスワードが間違っています。")
            }else{
                window.alert("ようこそ!"+responseJson.name+"さん。")
                console.log(responseJson.name)
                console.log(responseJson.facilityID)
                console.log(responseJson.passwordtoken)
            }
            //location.href = "/member_list";
        })
      .catch((error) =>{
        window.alert("エラーが起きました。もう一度入力してください。")
        //location.href = "/group_log_in"
        //console.error('error');
      });
    }

    render(){
        return (<div>
        <h1>Group Log in</h1>
        <div>ログインに必要な情報を入力してください</div>
        <form id = "group_info" onSubmit={this.sendinfo}>
            <p>メールアドレス:<input type="email" name="email_address" required></input></p>
            <p>パスワード:<input type="text" name="password" required></input></p>
            <button type="submit">ログイン</button>
        </form>
        <div>
            <Link href = "/member_list">
                <a>メンバーリスト</a>
            </Link>
        </div>
        <div>
            <Link href = "/group_registration">
                <a>新規登録</a>
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

export default Grouplogin;