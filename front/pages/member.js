import Link from 'next/link'

export default () =><div>
    <h1>Group</h1>
    <div><h1>"サービス名"へようこそ</h1>未登録の方は新規登録、活動中のメンバーを閲覧したい方はメンバーリストを押してください</div>
    <div>
        <Link href = "/add_member">
            <a>新規登録</a>
        </Link>
    </div>
    <div>
        <Link href = "/member_list">
            <a>メンバーリスト</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>Go home</a>
        </Link>
    </div>
</div>