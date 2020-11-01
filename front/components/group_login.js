import React, { Component } from 'react';
import Link from 'next/link'

export default class Grouplogin extends Component {

    constructor(props) {
        super(props);
        this.sendinfo = this.sendinfo.bind(this);
    }

    sendinfo(){

    }

    render(){
        return (<div>
        <h1>Group Log in</h1>
        <div>ログインに必要な情報を入力してください</div>
        <form>
            <p>メールアドレス:<input type="email" name="email" required></input></p>
            <p>パスワード:<input type="text" name="password" required></input></p>
            <input type="submit" value="ログイン"></input>
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