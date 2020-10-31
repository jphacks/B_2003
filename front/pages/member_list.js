import Link from 'next/link'

export default () =><div>
    <h1>Member list</h1>
    <div>閲覧したいグループ名とそのパスワードを入力してください</div>
    <label>
        <p>グループ名:<input type="text" name="group_name" required></input></p>
        <p>パスワード:<input type="text" name="password" required></input></p>
    </label>
    <input type="submit" value="メンバーを閲覧"></input>
    <div>
        <Link href = "/">
            <a>Go home</a>
        </Link>
    </div>
</div>