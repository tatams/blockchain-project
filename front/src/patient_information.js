import { useState } from "react";


export default function Patient() {
    const [PatientName, setPatientName] = useState();
    const [PatientLastname, setPatientLastname] = useState();
    const [WrongInformation, setWrongInformation] = useState(true);

  const inputName = (event) => {
    setWrongInformation(true);
    const input = event.target.value;
    const array = input.split(" ");
    if(array.length==2 && array[1]!==""){
        setPatientName(array[0]);
        setPatientLastname(array[1]);
        setWrongInformation(false);
    }
    else if(array.length>2){
        setWrongInformation(true);
    }
  };
  const serch_click = () => {
    if(WrongInformation){
        alert("Wrong Information")
    }
    else{
        alert("PatientName : "+PatientName+"\nPatientLastname : "+PatientLastname);
    }
  };
  return (
    <div className="patient">
      <div className="patient-top">
        <div>รูปจ้า</div>
        <div>
            <table className="patient-table">
                <tr>
                    <th>รหัสผู้ป่วย</th>
                    <td></td>
                </tr>
                <tr>
                    <th>คำนำหน้าชื่อ</th>
                    <td></td>
                </tr>
                <tr>
                    <th>ชื่อ</th>
                    <td></td>
                </tr>
                <tr>
                    <th>นามสกุล</th>
                    <td></td>
                </tr>
                <tr>
                    <th>เพศ</th>
                    <td></td>
                </tr>
                <tr>
                    <th>อายุ</th>
                    <td> ปี</td>
                </tr>
                <tr>
                    <th>พบแพทย์ครั้งล่าสุด</th>
                    <td></td>
                </tr>
            </table>
        </div>
      </div>
      <div className="patient-bottom">
            <nav className="patient-nav">
                <li><a href="/patient/Profile">ส่วนตัว</a></li>
                <li><a href="/patient/HomeAddress">ที่อยู่</a></li>
                <li><a href="/patient/MedicalInformation">ข้อมูลทางการแพทย์</a></li>
                <li><a href="/patient/ListDocter">รายการพบแพทย์</a></li>
                <li><a href="/patient/Note">บันทึกผู้ป่วย</a></li>
            </nav>
      </div>
    </div>
  );
}