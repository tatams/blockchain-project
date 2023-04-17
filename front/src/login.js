import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import NavBar_login from "./Navbar-login";
export default function Login() {
  const login_status = false;
  const [Name, setName] = useState('');
  const [Pass, setPass] = useState('');
  // const form = document.getElementById("myForm");
  // form.addEventListener("submit", function(event) {
  //   event.preventDefault(); // prevent form from submitting normally
  //   submitForm();
  // });

  // var httpRequest;

  // const send = () => {
  //   httpRequest = new XMLHttpRequest();
  //   var username = document.getElementById("user").value;
  //   var password = document.getElementById("pwd").value;
  //   var value = "user=" + username + "&pwd=" + password;
  //   var url = "login-check.php";
  //   httpRequest.open("POST",url, true);
  //   httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  //   console.log(value);
  //   httpRequest.send(value);
  // };

  // function submitForm() {
  //   const xhr = new XMLHttpRequest(); // create XHR object
  //   const form = document.getElementById("myForm"); // get form element

  //   xhr.open("POST", "login-check.php", true); // set XHR object settings
  //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  //   xhr.onreadystatechange = function () {
  //     // handle response from server
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       console.log(xhr.responseText);
  //     }
  //   };

  //   xhr.send(new FormData(form)); // send form data to PHP script
  // }

  const inputName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputPass = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
  };

  const send = () =>{
    axios.post("http://localhost:5000/login-check",{ user: Name, pwd: Pass})
    .then( res =>{
      if(res.data.success){
        console.log("success");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'เข้าสู่ระบบ',
          showConfirmButton: false,
          timer: 1000
        }
       
        ).then(
          (result) =>{
              window.location.href = '/serch'
              
          }
        )
      }else{
        console.log("unsuccess");
        Swal.fire({
          icon: 'error',
          title: 'ไม่สามารถเข้าระบบได้',
          text: 'กรุณาใส่ชื่อผู้ใช้และรหัสผ่านให้ถูกต้อง',
        })
      }
    })
  }

  return (
    <div>
      <NavBar_login/>
      <div className="login">
        <h1>Login</h1>
        <div className="login-des">ระบบข้อมูลคนไข้</div>
        {/* <form > */}
        <input
          type="text"
          name="username"
          id="user"
          placeholder="ชื่อผู้ใช้"
          required
          onChange={inputName}
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          id="pwd"
          placeholder="รหัสผ่าน"
          onChange={inputPass}
          required
        ></input>
        <br></br>
        <div className="login-button">
          <button type="submit" onClick={send}>
            {/* <a href="/"> */}
            เข้าสู่ระบบ
            {/* </a> */}
          </button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
