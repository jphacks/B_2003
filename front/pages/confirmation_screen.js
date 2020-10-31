import Link from 'next/link'

export default () =><div>
    <h1>Confirmation Screen</h1>
    <div>Welcome</div>
    <div>
        <Link href = "/log_in">
            <a>Log in</a>
        </Link>
    </div>
    <div>
        <Link href = "/member_list">
            <a>Member list</a>
        </Link>
    </div>
</div>