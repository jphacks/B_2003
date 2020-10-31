import Link from 'next/link'

export default () =><div>
    <h1>Member list</h1>
    <div>Welcome</div>
    <div>
        <Link href = "/log_in">
            <a>Log in</a>
        </Link>
    </div>
    <div>
        <Link href = "/group_registration">
            <a>Group registration</a>
        </Link>
    </div>
    <div>
        <Link href = "/add_member">
            <a>Add member</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>go home</a>
        </Link>
    </div>
</div>