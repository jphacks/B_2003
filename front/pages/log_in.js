import Link from 'next/link'

export default () =><div>
    <h1>Log in</h1>
    <div>カメラに顔を映して、ログインボタンを押してください</div>
    <input type="submit" value="ログイン"　onSubmit="confirmation_screen.js"></input>
    <div>
        <Link href = "/add_member">
            <a>Add member</a>
        </Link>
    </div>
    <div>
        <Link href = "/confirmation_screen">
            <a>Go confirmation screen</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>Go home</a>
        </Link>
    </div>
</div>