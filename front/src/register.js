import NavBar from "./Navbar";

export default function Register() {
  return (
    <div>
      <NavBar/>
      <div className="patient">
        <h1>ลงทะเบียนผู้ป่วยใหม่</h1>
        <div className="register-head">ข้อมูลผู้ป่วย</div>
        <form>
          <div className="register">
            <div>
              <h3>ส่วนตัว</h3>
              <hr className="style1"></hr>
              คำนำหน้าชื่อ{" "}
              <select name="artical" className="register_space" required>
                <option value="" disableed selected>
                  กรุณาเลือก
                </option>
                <option value="Mr">นาย</option>
                <option value="Mrs">นาง</option>
                <option value="Miss">นางสาว</option>
              </select>
              เพศ{" "}
              <select name="gender" required>
                <option value="" disableed selected>
                  กรุณาเลือก
                </option>
                <option value="female">หญิง</option>
                <option value="male">ชาย</option>
              </select>
              <br></br>
              ชื่อ <br></br>
              <input type="text" name="firstname" required></input>
              <br></br>
              นามสกุล <br></br>
              <input type="text" name="lastname" required></input>
              <br></br>
              วันเดือนปีเกิด <br></br>
              <input type="date" name="dob" required></input>
              <br></br>
              เลขบัตรประชาชน <br></br>
              <input type="text" name="idCardNo" required></input>
              <br></br>
              เชื้อชาติ <br></br>
              <input type="text" name="ethnicity" required></input>
              <br></br>
              สัญชาติ <br></br>
              <input type="text" name="nation" required></input>
              <br></br>
              ศาสนา <br></br>
              <input type="text" name="religion" required></input>
              <br></br>
              อาชีพ <br></br>
              <input type="text" name="work" required></input>
              <br></br>
            </div>
            <div>
              <h3>ที่อยู่</h3>
              <hr className="style1"></hr>
              ข้อมูลที่อยู่<br></br>
              <textarea name="homedetail" required></textarea>
              <br></br>
              ตำบล/แขวง <br></br>
              <input type="text" name="sub_district" required></input>
              <br></br>
              อำเภอ/เขต <br></br>
              <input type="text" name="district" required></input>
              <br></br>
              จังหวัด <br></br>
              <input type="text" name="province" required></input>
              <br></br>
              รหัสไปรษณีย์ <br></br>
              <input type="text" name="zip" required></input>
              <br></br>
              <br></br>
              <h3>ข้อมูลทางการแพทย์</h3>
              <hr className="style1"></hr>
              โรคประจำตัว <br></br>
              <input type="text" name="CongenitalDisease" required></input>
              <br></br>
              อาการแพ้ <br></br>
              <input type="text" name="Allergy" required></input>
              <br></br>
              หมู่เลือด <br></br>
              <input type="text" name="BloodGroup" required></input>
              <br></br>
            </div>
          </div>
          <div className="button-section">
            <div className="back-button">
              <a href="/serch">
                <input type="button" value="ย้อนกลับ"></input>
              </a>
            </div>
            <div className="save-button">
              <input type="submit" value="บันทึกข้อมูล"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
