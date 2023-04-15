export default function Login() {
  const login_status = false;
  return (
    <div>
        
      <div className="login">
        <h1>Login</h1>
        <div className="login-des">ระบบข้อมูลคนไข้</div>
        <form>
          <input type="text" name="username" placeholder="ชื่อผู้ใช้" required></input>
          <br></br>
          <input type="password" name="password" placeholder="รหัสผ่าน" required></input>
          <br></br>
          <div className="login-button">
            <input type="submit" value="เข้าสู่ระบบ"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

// export const login_status = false;
