import { useState } from "react";
import NavBar from "./Navbar";
// import web3 from "../../blockchain/ethereum/web3";
// // import record from "../../blockchain/ethereum/record";
// import instance from "../../blockchain/ethereum/record";
import web3 from "./utils/web3";
import record from "./utils/record";


export default function Register() {

  const [Form,setForm] = useState({
    nameTitle : "",
    firstname : "",
    lastname : "",
    gender : "",
    idCardNo : "",
    dob : "",
    ethnicity : "",
    nation : "",
    religion : "",
    work : "",
    homeNo : "",
    subDist : "",
    dist : "",
    province : "",
    zip: "",
    congenitalDisease: "",
    allergy: "",
    blood: "",
    addr : "0xf6e528354c270659f78B5B8b049fD485c44DFe3D",
  });
  const handleinput = (event) =>{
    setForm({
      ...Form,
      [event.target.name] : event.target.value
    });
  }
  const handlesubmit = async(event) =>{
    event.preventDefault();
    console.log(Form);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    // Form.addr = accounts[0];
    console.log(Form);
    // await record.methods.setDetails(
    //   Form
    //   // nameTitle, firstname, lastname, gender, idCardNo, dob, ethnicity, nation, religion, work, homeNo, subDist, dist, province, zip, congenitalDisease, allergy, blood
    // ).send({ from: accounts[0] });
    const gasPriceInWei = web3.utils.toWei("10", "gwei");
    // record.methods.patientList(0).call({ from: accounts[0] }).then(
    //   (a) =>{
    //     console.log("a : "+a)
    //   }
    // ).catch((error) =>{
    //   console.log("err :" +error);
    // })
    
    await record.methods.setDetails(Form).send({
    from: accounts[0],
    gasPrice: gasPriceInWei,
    gasLimit: 3000000
})  ;
  }

  // const [nameTitle,setnameTitle] = useState();
  // const [firstname,setfirstname] = useState();
  // const [lastname,setlastname] = useState();
  // const [gender,setgender] = useState();
  // const [idCardNo,setidCardNo] = useState();
  // const [dob,setdob] = useState();
  // const [ethnicity,setethnicity] = useState();
  // const [nation,setnation] = useState();
  // const [religion,setreligion] = useState();
  // const [work,setwork] = useState();
  // const [homeNo,sethomeNo] = useState();
  // const [subDist,setsubDist] = useState();
  // const [dist,setdist] = useState();
  // const [province,setprovince] = useState();
  // const [zip,setzip] = useState();
  // const [congenitalDisease,setcongenitalDisease] = useState();
  // const [allergy,setallergy] = useState();
  // const [blood,setblood] = useState();
  // const [boardingHos,setboardingHos] = useState();
  // const [personalDoc,setpersonalDoc] = useState();
  // const [addr,setaddr] = useState();
  // const [date,setdate] = useState();
  
  // const inputnameTitle = (event) => {
  //   console.log(event.target.value);
  //   setnameTitle(event.target.value);
  // };
  // const inputfirstname = (event) => {
  //   console.log(event.target.value);
  //   setfirstname(event.target.value);
  // };
  // const inputlastname = (event) => {
  //   console.log(event.target.value);
  //   setlastname(event.target.value);
  // };
  // const inputgender = (event) => {
  //   console.log(event.target.value);
  //   setgender(event.target.value);
  // };
  // const inputidCardNo = (event) => {
  //   console.log(event.target.value);
  //   setidCardNo(event.target.value);
  // };
  // const inputdob = (event) => {
  //   console.log(event.target.value);
  //   setdob(event.target.value);
  // };
  // const inputethnicity = (event) => {
  //   console.log(event.target.value);
  //   setethnicity(event.target.value);
  // };
  // const inputnation = (event) => {
  //   console.log(event.target.value);
  //   setnation(event.target.value);
  // };
  // const inputreligion = (event) => {
  //   console.log(event.target.value);
  //   setreligion(event.target.value);
  // };
  // const inputwork = (event) => {
  //   console.log(event.target.value);
  //   setwork(event.target.value);
  // };
  // const inputhomeNo = (event) => {
  //   console.log(event.target.value);
  //   sethomeNo(event.target.value);
  // };
  // const inputsubDist = (event) => {
  //   console.log(event.target.value);
  //   setsubDist(event.target.value);
  // };
  // const inputdist = (event) => {
  //   console.log(event.target.value);
  //   setdist(event.target.value);
  // };
  // const inputprovince = (event) => {
  //   console.log(event.target.value);
  //   setprovince(event.target.value);
  // };
  // const inputzip = (event) => {
  //   console.log(event.target.value);
  //   setzip(event.target.value);
  // };
  // const inputcongenitalDisease = (event) => {
  //   console.log(event.target.value);
  //   setcongenitalDisease(event.target.value);
  // };
  // const inputallergy = (event) => {
  //   console.log(event.target.value);
  //   setallergy(event.target.value);
  // };
  // const inputblood = (event) => {
  //   console.log(event.target.value);
  //   setblood(event.target.value);
  // };
  // const inputboardingHos = (event) => {
  //   console.log(event.target.value);
  //   setboardingHos(event.target.value);
  // };
  // const inputpersonalDoc = (event) => {
  //   console.log(event.target.value);
  //   setpersonalDoc(event.target.value);
  // };
  // const inputaddr = (event) => {
  //   console.log(event.target.value);
  //   setaddr(event.target.value);
  // };
  // const inputdate = (event) => {
  //   console.log(event.target.value);
  //   setdate(event.target.value);
  // };

//   onSubmit = async event => {
//     event.preventDefault();

//     const { id, nameTitle, firstname, lastname, gender, idCardNo, dob, ethnicity, nation, religion, work, homeNo, subDist, dist, province, zip, congenitalDisease, allergy, blood } = this.state;
//     try {
//         const accounts = await web3.eth.getAccounts();

//         await instance.methods.setDetails(
//           id, nameTitle, firstname, lastname, gender, idCardNo, dob, ethnicity, nation, religion, work, homeNo, subDist, dist, province, zip, congenitalDisease, allergy, blood
//         ).send({ from: accounts[0] });

//         alert("Account created successfully!");
//     }
//     catch (err) {
//         alert("Account already exists");
//     }

//     this.setState({ id : '', nameTitle : '', firstname : '', lastname : '', gender : '', idCardNo : '', dob : '', ethnicity : '', nation : '', religion : '', work : '', homeNo : '', subDist : '', dist : '', province : '', zip : '', congenitalDisease : '', allergy : '', blood : ''});
// }

// const submit = async (event) =>{
//   event.preventDefault()
//   const accounts = await web3.eth.getAccounts();
//   console.log("this.state",event)
//   console.log("this.state",event.target.value)
//   console.log("this.state",event.target)
  // await record.methods.setDetails(
    // {
    //   nameTitle:""
    // }
  //   // nameTitle, firstname, lastname, gender, idCardNo, dob, ethnicity, nation, religion, work, homeNo, subDist, dist, province, zip, congenitalDisease, allergy, blood
  // ).send({ from: accounts[0] });
  // console.log("Account created successfully!");
  // setnameTitle('')
  // setfirstname('')
  // setlastname('')
  // setgender('')
  // setidCardNo('')
  // setdob('')
  // setethnicity('')
  // setnation('')
  // setreligion('')
  // setwork('')
  // sethomeNo('')
  // setsubDist('')
  // setdist('')
  // setprovince('')
  // setzip('')
  // setcongenitalDisease('')
  // setallergy('')
  // setblood('')
  // setboardingHos('')
  // setpersonalDoc('')
  // setaddr('')
  // setdate('')
// }
  
  return (
    <div>
      <NavBar/>
      <div className="patient">
        <h1>ลงทะเบียนผู้ป่วยใหม่</h1>
        <div className="register-head">ข้อมูลผู้ป่วย</div>
        <form onSubmit={handlesubmit}>
        {/* onSubmit={this.onSubmit} */}
          <div className="register">
            <div>
              <h3>ส่วนตัว</h3>
              <hr className="style1"></hr>
              คำนำหน้าชื่อ{" "}
              <select name="nameTitle" id="artical" className="register_space" value={Form.nameTitle} onChange={handleinput} required>
                <option value="" disableed selected>
                  กรุณาเลือก
                </option>
                <option value="Mr">นาย</option>
                <option value="Mrs">นาง</option>
                <option value="Miss">นางสาว</option>
              </select>
              เพศ{" "}
              <select name="gender" id="gender" value={Form.gender} onChange={handleinput} required>
                <option value="" disableed selected>
                  กรุณาเลือก
                </option>
                <option value="female">หญิง</option>
                <option value="male">ชาย</option>
              </select>
              <br></br>
              ชื่อ <br></br>
              <input type="text" name="firstname" id="firstname" value={Form.firstname} onChange={handleinput} required></input>
              <br></br>
              นามสกุล <br></br>
              <input type="text" name="lastname" id="lastname" value={Form.lastname} onChange={handleinput} required></input>
              <br></br>
              วันเดือนปีเกิด <br></br>
              <input type="date" name="dob" id="dob" value={Form.dob} onChange={handleinput} required></input>
              <br></br>
              เลขบัตรประชาชน <br></br>
              <input type="text" name="idCardNo" id="idCardNo" value={Form.idCardNo} onChange={handleinput} required></input>
              <br></br>
              เชื้อชาติ <br></br>
              <input type="text" name="ethnicity" id="ethnicity" value={Form.ethnicity}  onChange={handleinput} required></input>
              <br></br>
              สัญชาติ <br></br>
              <input type="text" name="nation" id="nation" value={Form.nation}  onChange={handleinput} required></input>
              <br></br>
              ศาสนา <br></br>
              <input type="text" name="religion" id="religion" value={Form.religion}  onChange={handleinput} required></input>
              <br></br>
              อาชีพ <br></br>
              <input type="text" name="work" id="work" value={Form.work} onChange={handleinput} required></input>
              <br></br>
            </div>
            <div>
              <h3>ที่อยู่</h3>
              <hr className="style1"></hr>
              ข้อมูลที่อยู่<br></br>
              <textarea name="homeNo" id="homedetail" value={Form.homeNo} onChange={handleinput} required></textarea>
              <br></br>
              ตำบล/แขวง <br></br>
              <input type="text" name="subDist" id="sub_district" value={Form.subDist} onChange={handleinput} required></input>
              <br></br>
              อำเภอ/เขต <br></br>
              <input type="text" name="dist" id="district" value={Form.dist} onChange={handleinput} required></input>
              <br></br>
              จังหวัด <br></br>
              <input type="text" name="province" id="province" value={Form.province} onChange={handleinput} required></input>
              <br></br>
              รหัสไปรษณีย์ <br></br>
              <input type="text" name="zip" id="zip" value={Form.zip} onChange={handleinput} required></input>
              <br></br>
              <br></br>
              <h3>ข้อมูลทางการแพทย์</h3>
              <hr className="style1"></hr>
              โรคประจำตัว <br></br>
              <input type="text" name="congenitalDisease" id="CongenitalDisease" value={Form.congenitalDisease} onChange={handleinput} required></input>
              <br></br>
              อาการแพ้ <br></br>
              <input type="text" name="allergy" id="Allergy" value={Form.allergy} onChange={handleinput} required></input>
              <br></br>
              หมู่เลือด <br></br>
              <input type="text" name="blood" id="BloodGroup" value={Form.blood} onChange={handleinput} required></input>
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
              {/* <input type="submit" value="บันทึกข้อมูล" onClick={submit}></input> */}
              <input type="submit" value="บันทึกข้อมูล"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
