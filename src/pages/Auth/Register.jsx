import React from "react";
import { useState } from "react";
import { AuthButton } from ".";
import { AuthWrapper } from ".";
import { AuthContent } from ".";
import { InputWithLabel } from ".";
import axios from "axios";
import { IdCheckModal } from "./components/IdCheckModal";
const Register = () => {
  const [showmodal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwError, setpwError] = useState(0);
  const [pwReError, setpwReError] = useState(0);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassWord = (e) => {
    const { value } = e.target;

    const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;
    if (
      !patternSpecial.test(value) ||
      !patternEng.test(value) ||
      !patternNum.test(value)||value.length<6
    ) {
      setpwError(1);
    } else {
      setpwError(0);
    }
    setPassword(value);
  };
  const onChangeRePassWord = (e) => {
    const { value } = e.target;
    if (value !== password) {
      setpwReError(1);
    } else {
      setpwReError(0);
    }
    setRePassword(value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
    
  };
  const onClickLogin=async()=>{
  try{
    const result=await axios({
      method:"POST",
      url:`http://3.218.116.118:5000/api/user`,
      header:{
        'Content-Type' : 'application/x-www-form-urlencoded; '
 
      },
      data:{
        user_id: id,
        password: password,
        nickname: nickname,
 },
    });
    if(result.data.success){
      alert(result.message);
    }
  }
  catch{
    console.log("error");
  }
}
  

  return (
    <AuthWrapper>
      <AuthContent title="회원가입">
        <InputWithLabel
          label="아이디"
          name="username"
          placeholder="아이디"
          type="text"
          value={id}
          onChange={onChangeId}
          disabled
        />
        <button onClick={()=>setShowModal(true)}>아이디 체크</button>
        <IdCheckModal setId={setId} show={showmodal} onHide={()=>setShowModal(false)}/>
        <InputWithLabel
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePassWord}
        />
        {pwError === 1 && <p style={{ color: "red" }}> 비밀번호 조건 확인</p>}
        <InputWithLabel
          label="비밀번호 확인"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          value={rePassword}
          onChange={onChangeRePassWord}
        />
        {pwReError === 1 && <p style={{ color: "red" }}> 비밀번호 불일치</p>}

        <InputWithLabel
          label="닉네임"
          name="nickname"
          placeholder="닉네임"
          type="nickname"
          onChange={onChangeNickname}
        />
        
        <AuthButton onClick={onClickLogin}>로그인</AuthButton>
      </AuthContent>
    </AuthWrapper>
  );
};
export default Register;
