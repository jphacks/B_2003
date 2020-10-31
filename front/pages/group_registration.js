import Link from 'next/link'

//import './group.css'


export default () =><div>
    <h1>Group registration</h1>
    <div><h1>"サービス名"へようこそ</h1>登録情報を入力してください</div>
    <form>
        <p>団体名:<input type="text" name="name" required></input></p>
        <p>メールアドレス:<input type="email" name="mailadress" required></input></p>
        <p>パスワード:<input type="text" name="password" minLength="5" required></input></p>
        <p>同時に活動できる人数:<input type="number" name="limit" required></input></p>
        <input type="submit" value="新規登録" onClick></input>
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
</div>