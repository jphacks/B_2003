import Link from 'next/link'

export default () =><div>
    <h1>Group Log in</h1>
    <div>ログインに必要な情報を入力してください</div>
    <form onSubmit='/log_in'>
        <p>メールアドレス:<input type="email" name="email" required></input></p>
        <p>パスワード:<input type="text" name="password" required></input></p>
        <input type="submit" value="ログイン"></input>
    </form>
    <div>
        <Link href = "/group_registration">
            <a>新規登録</a>
        </Link>
    </div>
    <div>
        <Link href = "/log_in">
            <a>顔認証</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>Go home</a>
        </Link>
    </div>
</div>