export default function Register(){
    return(
        <div>
        <h1>ลงทะเบียนผู้ป่วยใหม่</h1>
        <div className="patient">
            เลขบัตรประชาชน <input type="text"></input><br></br>
            ชื่อ <input type="text"></input>  นามสกุล <input type="text"></input><br></br>
            วันเดือนปีเกิด <input type="date"></input>  ศาสนา <input type="text"></input>
            เพศ <select>
                <option>กรุณาเลือก</option>
                <option>หญิง</option>
                <option>ชาย</option>
                <option>อื่นๆ</option>
                </select>
            อาชีพ <input type="text"></input><br></br>
        หมู่เลือด <input type="text"></input><br></br>
        อาการเบื้องต้น<br></br><textarea></textarea><br></br>
        บ้านเลขที่ <input type="text"></input> หมู่ <input type="text"></input> <br></br>
        ตำบล <input type="text"></input> อำเภอ <input type="text"></input> จังหวัด <input type="text"></input> รหัสไปรษณีย์ <input type="text"></input> <br></br>
        โทรศัพท์ <input type="text"></input><br></br>
        <input type="submit" value="ตกลง"></input>
        </div>
        </div>
        
    )
}