export default function NavBar() {
    return(
        <nav className="navbar">
            <a href="/" className="navbar_home">โรงพยาบาล</a>
        
        <ul>
        <a href="/register" className="navbar_register">ลงทะเบียนผู้ป่วยใหม่</a>
            <li>
                <div className="navbar_account">ชื่อพยาบาล</div>
            </li>
            <li>
                <div className="navbar_logout">ออกจากระบบ</div>
            </li>
        </ul>
    </nav>
    )
    
}