import { useState } from "react"

export default function NavBar() {
    return(
        <div>
            <nav className="navbar">
            <a href="/serch" className="navbar_home">โรงพยาบาล</a>
        <ul>
        <a href="/register" className="navbar_register">ลงทะเบียนผู้ป่วยใหม่</a>
            <li>
            <a href="" className="navbar_home"><div className="navbar_account">นางสมฤดี รักสะอาด</div></a>
            </li>
            <li>
            <a href="/" className="navbar_logout">ออกจากระบบ</a>
            </li>
        </ul>
    </nav>
        </div>
        
    )
    
}