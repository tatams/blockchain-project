import { useState } from "react";
import NavBar from "./Navbar";
import web3 from "./utils/web3";
import record from "./utils/record";

export default function Patient() {
  const [PatientName, setPatientName] = useState();
  const [PatientLastname, setPatientLastname] = useState();
  const [WrongInformation, setWrongInformation] = useState(true);

  const getInitialProps = async(props)=> {
    // const addr = props.query.address;
    const FristN = PatientName;
    const LastN = PatientLastname;
    const accounts = await web3.eth.getAccounts();
    var records ;

    try {
        records = await record.methods.searchPatientDemographic(FristN,LastN).call({from: accounts[0]});
        
        return {
            nameTitle : records[0],
            firstname : records[1],
            lastname : records[2],
            gender : records[3],
            idCardNo : records[4],
            dob : records[5],
            ethnicity : records[6],
            nation : records[7],
            religion : records[8],
            work : records[9],
            homeNo : records[10],
            subDist : records[11],
            dist : records[12],
            province : records[13],
            zip: records[14],
            congenitalDisease: records[15],
            allergy: records[16],
            blood: records[17]
        };
    }
    catch (err) {
        alert("You don't have permission to view this account");
    }
}

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
                {/* {this.props.nameTitle} */}
              </tr>
              <tr>
                <th>ชื่อ</th>
                <td></td>
                {/* {this.props.firstname} */}
              </tr>
              <tr>
                <th>นามสกุล</th>
                <td></td>
                {/* {this.props.lastname} */}
              </tr>
              <tr>
                <th>เพศ</th>
                <td></td>
                {/* {this.props.gender} */}
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
                {/* {this.props.dob} */}
              </tr>
              <tr>
                <th>สัญชาติ</th>
                <td></td>
                {/* {this.props.nation} */}
              </tr>
              <tr>
                <th>ศาสนา</th>
                <td></td>
                {/* {this.props.religion} */}
              </tr>
              <tr>
                <th>อาชีพ</th>
                <td></td>
                {/* {this.props.work} */}
              </tr>
            </table>
          </div>
          <div className="patient-table-intab">
            <table>
              <tr>
                <th>เลขบัตรประชาชน</th>
                <td></td>
                {/* {this.props.idCardNo} */}
              </tr>
              <tr>
                <th>เชื้อชาติ</th>
                <td></td>
                {/* {this.props.ethnicity} */}
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
                <th>ข้อมูลที่อยู่</th>
                <td></td>
                {/* {this.props.homeNo} */}
              </tr>
              <tr>
                <th>ตำบล/แขวง</th>
                <td></td>
                {/* {this.props.subDist} */}
              </tr>
              <tr>
                <th>อำเภอ/เขต</th>
                <td></td>
                {/* {this.props.dist} */}
              </tr>
              <tr>
                <th>จังหวัด</th>
                <td></td>
                {/* {this.props.province} */}
              </tr>
              <tr>
                <th>รหัสไปรษณีย์</th>
                <td></td>
                {/* {this.props.zip} */}
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
                {/* {this.props.congenitalDisease} */}
              </tr>
              <tr>
                <th>อาการแพ้</th>
                <td></td>
                {/* {this.props.allergy} */}
              </tr>
              <tr>
                <th>หมู่เลือด</th>
                <td></td>
                {/* {this.props.blood} */}
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
