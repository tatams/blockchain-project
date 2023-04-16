import { useState } from "react";
import NavBar from "./Navbar";

export default function Patient() {
  const [PatientName, setPatientName] = useState();
  const [PatientLastname, setPatientLastname] = useState();
  const [WrongInformation, setWrongInformation] = useState(true);
  
  const inputName = (event) => {
    setWrongInformation(true);
    const input = event.target.value;
    const array = input.split(" ");
    if (array.length == 2 && array[1] !== "") {
      setPatientName(array[0]);
      setPatientLastname(array[1]);
      setWrongInformation(false);
    } else if (array.length > 2) {
      setWrongInformation(true);
    }
  };
  const serch_click = () => {
    if (WrongInformation) {
      alert("Wrong Information");
    } else {
      alert(
        "PatientName : " +
          PatientName +
          "\nPatientLastname : " +
          PatientLastname
      );
    }
  };

  return (
    <div>
      <NavBar/>
    <div className="patient">
      <div className="patient-top">
        <div>รูปมั้ง</div>
        <div>
          <div className="patient-table">
            <table>
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
      </div>
      <div className="patient-bottom">

        <div className="patient-tab">
        <input type="radio" name="tabs" id="tab1" checked/>
        <label for="tab1">ส่วนตัว</label>
        <div class="tab">
          <h2>ส่วนตัว</h2>
          <div className="intab">
            <div className="patient-table-intab">
            <table>
              <tr>
                <th>วันเกิด</th>
                <td></td>
              </tr>
              <tr>
                <th>สัญชาติ</th>
                <td></td>
              </tr>
              <tr>
                <th>ศาสนา</th>
                <td></td>
              </tr>
              <tr>
                <th>อาชีพ</th>
                <td></td>
              </tr>
            </table>
          </div>
          <div className="patient-table-intab">
            <table>
              <tr>
                <th>เลขบัตรประชาชน</th>
                <td></td>
              </tr>
              <tr>
                <th>เชื้อชาติ</th>
                <td></td>
              </tr>
            </table>
          </div>
          </div>
        </div>

        <input type="radio" name="tabs" id="tab2" checked/>
        <label for="tab2">ที่อยู่</label>
        <div class="tab">
          <h2>ที่อยู่</h2>
          <div className="intab">
            <div className="patient-table-intab">
            <table>
              <tr>
                <th>บ้านเลขที่</th>
                <td></td>
              </tr>
              <tr>
                <th>หมู่</th>
                <td></td>
              </tr>
              <tr>
                <th>ตำบล/แขวง</th>
                <td></td>
              </tr>
              <tr>
                <th>จังหวัด</th>
                <td></td>
              </tr>
              <tr>
                <th>รหัสไปรษณีย์</th>
                <td></td>
              </tr>
            </table>
          </div>
          </div>
        </div>

        <input type="radio" name="tabs" id="tab3" checked/>
        <label for="tab3">ข้อมูลทางการแพทย์</label>
        <div class="tab">
          <h2>ข้อมูลทางการแพทย์</h2>
          <div className="intab">
            <div className="patient-table-intab">
            <table>
              <tr>
                <th>โรคประจำตัว</th>
                <td></td>
              </tr>
              <tr>
                <th>อาการแพ้</th>
                <td></td>
              </tr>
              <tr>
                <th>หมู่เลือด</th>
                <td></td>
              </tr>
              <tr>
                <th>โรงพยาบาลประจำ</th>
                <td></td>
              </tr>
              <tr>
                <th>แพทย์ประจำตัว</th>
                <td></td>
              </tr>
            </table>
          </div>
          </div>
        </div>

        <input type="radio" name="tabs" id="tab4" checked/>
        <label for="tab4">รายการพบแพทย์</label>
        <div class="tab">
          <h2>รายการพบแพทย์</h2>
          <div className="intab-docter">
            <div className="patient-doctertable-intab">
              <table>
          <thead>
            <tr className="doctertable-head">
              <th width="20%">แพทย์ผู้รักษา</th>
              <th width="60%">ประวัติการรักษา</th>
              <th width="20%">วันที่</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>415151</td>
              <td>dasdcasc</td>
              <td>dcdscsd</td>
            </tr>
            <tr>
              <td>415151</td>
              <td>dasdcasc</td>
              <td>dcdscsd</td>
            </tr>
            <tr>
              <td>415151</td>
              <td>dasdcasc</td>
              <td>dcdscsd</td>
            </tr>
            <tr>
              <td>415151</td>
              <td>dasdcasc</td>
              <td>dcdscsd</td>
            </tr>
            <tr>
              <td>415151</td>
              <td>dasdcasc</td>
              <td>dcdscsd</td>
            </tr>
          </tbody>
        </table>
            </div>
          
          </div>
        </div>
        </div>
      </div>
      <br></br>
      <div className="back-button">
              <a href="/serch">
                <input type="button" value="ย้อนกลับ"></input>
              </a>
            </div>
    </div>
    </div>
  );
}
