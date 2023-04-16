import { useState } from "react";
import NavBar from "./Navbar";
import record from '../ethereum/record';
import web3 from "./ethereum/web3";

export default function Register() {
  const [nameTitle,setnameTitle] = useState();
  const [firstname,setfirstname] = useState();
  const [lastname,setlastname] = useState();
  const [gender,setgender] = useState();
  const [idCardNo,setidCardNo] = useState();
  const [dob,setdob] = useState();
  const [ethnicity,setethnicity] = useState();
  const [nation,setnation] = useState();
  const [religion,setreligion] = useState();
  const [work,setwork] = useState();
  const [homeNo,sethomeNo] = useState();
  const [subDist,setsubDist] = useState();
  const [dist,setdist] = useState();
  const [province,setprovince] = useState();
  const [zip,setzip] = useState();
  const [congenitalDisease,setcongenitalDisease] = useState();
  const [allergy,setallergy] = useState();
  const [blood,setblood] = useState();
  const [boardingHos,setboardingHos] = useState();
  const [personalDoc,setpersonalDoc] = useState();
  const [addr,setaddr] = useState();
  const [date,setdate] = useState();
  
  const inputnameTitle = (event) => {
    console.log(event.target.value);
    setnameTitle(event.target.value);
  };
  const inputfirstname = (event) => {
    console.log(event.target.value);
    setfirstname(event.target.value);
  };
  const inputlastname = (event) => {
    console.log(event.target.value);
    setlastname(event.target.value);
  };
  const inputgender = (event) => {
    console.log(event.target.value);
    setgender(event.target.value);
  };
  const inputidCardNo = (event) => {
    console.log(event.target.value);
    setidCardNo(event.target.value);
  };
  const inputdob = (event) => {
    console.log(event.target.value);
    setdob(event.target.value);
  };
  const inputethnicity = (event) => {
    console.log(event.target.value);
    setethnicity(event.target.value);
  };
  const inputnation = (event) => {
    console.log(event.target.value);
    setnation(event.target.value);
  };
  const inputreligion = (event) => {
    console.log(event.target.value);
    setreligion(event.target.value);
  };
  const inputwork = (event) => {
    console.log(event.target.value);
    setwork(event.target.value);
  };
  const inputhomeNo = (event) => {
    console.log(event.target.value);
    sethomeNo(event.target.value);
  };
  const inputsubDist = (event) => {
    console.log(event.target.value);
    setsubDist(event.target.value);
  };
  const inputdist = (event) => {
    console.log(event.target.value);
    setdist(event.target.value);
  };
  const inputprovince = (event) => {
    console.log(event.target.value);
    setprovince(event.target.value);
  };
  const inputzip = (event) => {
    console.log(event.target.value);
    setzip(event.target.value);
  };
  const inputcongenitalDisease = (event) => {
    console.log(event.target.value);
    setcongenitalDisease(event.target.value);
  };
  const inputallergy = (event) => {
    console.log(event.target.value);
    setallergy(event.target.value);
  };
  const inputblood = (event) => {
    console.log(event.target.value);
    setblood(event.target.value);
  };
  const inputboardingHos = (event) => {
    console.log(event.target.value);
    setboardingHos(event.target.value);
  };
  const inputpersonalDoc = (event) => {
    console.log(event.target.value);
    setpersonalDoc(event.target.value);
  };
  const inputaddr = (event) => {
    console.log(event.target.value);
    setaddr(event.target.value);
  };
  const inputdate = (event) => {
    console.log(event.target.value);
    setdate(event.target.value);
  };

  onSubmit = async event => {
    event.preventDefault();

    const { id, nameTitle, firstname, lastname, gender, idCardNo, dob, ethnicity, nation, religion, work, homeNo, subDist, dist, province, zip, congenitalDisease, allergy, blood } = this.state;
    try {
        const accounts = await web3.eth.getAccounts();

        await record.methods.setDetails(
          id, nameTitle, firstname, lastname, gender, idCardNo, dob, ethnicity, nation, religion, work, homeNo, subDist, dist, province, zip, congenitalDisease, allergy, blood
        ).send({ from: accounts[0] });

        alert("Account created successfully!");
    }
    catch (err) {
        alert("Account already exists");
    }

    this.setState({ id : '', nameTitle : '', firstname : '', lastname : '', gender : '', idCardNo : '', dob : '', ethnicity : '', nation : '', religion : '', work : '', homeNo : '', subDist : '', dist : '', province : '', zip : '', congenitalDisease : '', allergy : '', blood : ''});
}
  
  return (
    <div>
      <NavBar/>
      <div className="patient">
        <h1>ลงทะเบียนผู้ป่วยใหม่</h1>
        <div className="register-head">ข้อมูลผู้ป่วย</div>
        <form onSubmit={this.onSubmit}>
          <div className="register">
            <div>
              <h3>ส่วนตัว</h3>
              <hr className="style1"></hr>
              คำนำหน้าชื่อ{" "}
              <select name="artical" className="register_space" value={nameTitle} onChange={inputnameTitle} required>
                <option value="" disableed selected>
                  กรุณาเลือก
                </option>
                <option value="Mr">นาย</option>
                <option value="Mrs">นาง</option>
                <option value="Miss">นางสาว</option>
              </select>
              เพศ{" "}
              <select name="gender" value={gender} onChange={inputgender} required>
                <option value="" disableed selected>
                  กรุณาเลือก
                </option>
                <option value="female">หญิง</option>
                <option value="male">ชาย</option>
              </select>
              <br></br>
              ชื่อ <br></br>
              <input type="text" name="firstname" value={firstname} onChange={inputfirstname} required></input>
              <br></br>
              นามสกุล <br></br>
              <input type="text" name="lastname" value={lastname} onChange={inputlastname} required></input>
              <br></br>
              วันเดือนปีเกิด <br></br>
              <input type="date" name="dob" value={dob} onChange={inputdob} required></input>
              <br></br>
              เลขบัตรประชาชน <br></br>
              <input type="text" name="idCardNo" value={idCardNo} onChange={inputidCardNo} required></input>
              <br></br>
              เชื้อชาติ <br></br>
              <input type="text" name="ethnicity" value={ethnicity} onChange={inputethnicity} required></input>
              <br></br>
              สัญชาติ <br></br>
              <input type="text" name="nation" value={nation} onChange={inputnation} required></input>
              <br></br>
              ศาสนา <br></br>
              <input type="text" name="religion" value={religion} onChange={inputreligion} required></input>
              <br></br>
              อาชีพ <br></br>
              <input type="text" name="work" value={work} onChange={inputwork} required></input>
              <br></br>
            </div>
            <div>
              <h3>ที่อยู่</h3>
              <hr className="style1"></hr>
              ข้อมูลที่อยู่<br></br>
              <textarea name="homedetail" value={homeNo} onChange={inputhomeNo} required></textarea>
              <br></br>
              ตำบล/แขวง <br></br>
              <input type="text" name="sub_district" value={subDist} onChange={inputsubDist} required></input>
              <br></br>
              อำเภอ/เขต <br></br>
              <input type="text" name="district" value={dist} onChange={inputdist} required></input>
              <br></br>
              จังหวัด <br></br>
              <input type="text" name="province" value={province} onChange={inputprovince} required></input>
              <br></br>
              รหัสไปรษณีย์ <br></br>
              <input type="text" name="zip" value={zip} onChange={inputzip} required></input>
              <br></br>
              <br></br>
              <h3>ข้อมูลทางการแพทย์</h3>
              <hr className="style1"></hr>
              โรคประจำตัว <br></br>
              <input type="text" name="CongenitalDisease" value={congenitalDisease} onChange={inputcongenitalDisease} required></input>
              <br></br>
              อาการแพ้ <br></br>
              <input type="text" name="Allergy" value={allergy} onChange={inputallergy} required></input>
              <br></br>
              หมู่เลือด <br></br>
              <input type="text" name="BloodGroup" value={blood} onChange={inputblood} required></input>
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
