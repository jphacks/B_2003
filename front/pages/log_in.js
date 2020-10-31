import Link from 'next/link'

export default () =><div>
    <h1>Log in</h1>
    <div>Welcome</div>
    <div>
        <Link href = "/add_member">
            <a>Add member</a>
        </Link>
    </div>
    <div>
        <Link href = "/group_registration">
            <a>Group registration</a>
        </Link>
    </div>
    <div>
        <Link href = "/member_list">
            <a>Member list</a>
        </Link>
    </div>
    <div>
        <Link href = "/confirmation_screen">
            <a>Go confirmation screen</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>go home</a>
        </Link>
    </div>
</div>