import { useState } from "react";
import Swal from "sweetalert2";

export default function Serch() {
    const [PatientName, setPatientName] = useState();
    const [PatientLastname, setPatientLastname] = useState();
    const [WrongInformation, setWrongInformation] = useState(true);

  const inputName = (event) => {
    setWrongInformation(true);
    const input = event.target.value;
    const array = input.split(" ");
    if(array.length==1){
      setPatientName(array[0]);
      setPatientLastname('');
      setWrongInformation(false);
    }
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
        Swal.fire({
          icon: 'error',
          title: 'รูปแบบผิด',
          text: 'กรุณาใส่ ชื่อ นามสกุล ของผู้ป่วยให้ถูกต้อง',
        })
    }
    else{
        alert("PatientName : "+PatientName+"\nPatientLastname : "+PatientLastname);
    }
  };

  const infor_click = () =>{
    Swal.fire({
      title: 'รหัสผ่าน',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      cancelButtonText: 'ยกเลิก',
      cancelButtonColor: '#DC3545',
      showCancelButton: true,
      confirmButtonText: 'ตกลง',
      confirmButtonColor: '#29A63C',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `รหัสไม่ถูกต้อง`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'รหัสผ่านถูกต้อง',
          'กดตกลงเพื่อเข้าดูข้อมูลคนไข้',
          'success'
        ).then(
          (result) =>{
            if(result.isConfirmed){
              window.location.href = '/patient'
            }
          }
        )
      }
    })
  }

  return (
    <div className="serch">
      <div className="topsection-serch">
        <input
          type="text"
          placeholder="ค้นหาด้วยชื่อผู้ป่วย"
          id="serch_name"
          onChange={inputName}
          size="40"
        ></input>
        <button onClick={serch_click} id="serch-button">
          ค้นหา
        </button>
      </div>
      <div className="bottomsection-serch">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th width="20%">รหัสผู้ป่วย</th>
              <th width="30%">ชื่อ</th>
              <th width="30%">นามสกุล</th>
              <th width="20%"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>415151</td>
              <td>dasdcasc</td>
              <td>dcdscsd</td>
              <td><button className="moreinfo-button" onClick={infor_click}>ดูข้อมูล</button></td>
            </tr>
            <tr>
              <td>415151</td>
              <td>dasdcasc</td>
              <td>dcdscsd</td>
              <td><button className="moreinfo-button" onClick={infor_click}>ดูข้อมูล</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
