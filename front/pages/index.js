import Link from 'next/link'

export default () =><div>
    <h1>Home</h1>
    <div>Welcome</div>
    <div>
        <Link href = "/group">
            <a>Groups</a>
        </Link>
    </div>
    <div>
        <Link href = "/member">
            <a>Members</a>
        </Link>
    </div>
</div>