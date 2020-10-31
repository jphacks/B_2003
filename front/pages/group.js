import Link from 'next/link'

export default () =><div>
    <h1>Group</h1>
    <div><h1>"サービス名"へようこそ</h1>新しくまだアカウントを持っていない団体は新規登録。すでに登録済みの団体はログインを押してください。</div>
    <div>
        <Link href = "/group_log_in">
            <a>ログイン</a>
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
</div>