import React from "react";
import { AuthButton } from ".";
import { AuthWrapper } from ".";
import { AuthContent } from ".";
import { InputWithLabel } from ".";
import { RightAlignedLink } from ".";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [userId, setUserId] = useState("");
  const [password,setPassword]=useState("");

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };
  const onChangePassword=(e)=>{
    setPassword(e.target.value);
  };

  const onClickLogin=()=>{
    localStorage.setItem("userId",JSON.stringify(userId));
    localStorage.setItem("logged-in", "True");
  }
  {/* 
  const onClickLogin = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://3.218.116.118:5000/api/auth",
        data: {
          user_id: userId,
          password: password,
        },
      });
      if (result.data.success) {
        // id, pw 모두 일치 userId = userId1, msg = undefined
        console.log("======================", "로그인 성공");
        const token=result.data;//토큰을 저장...
        localStorage.setItem("jwtToken",token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("logged-in", "True");
        window.location.replace("/");
      } else {
        console.log(result.data.message)
      }
    } catch {
      console.log("error");

    }
  };
*/}

  return (
    <AuthWrapper>
      <AuthContent title="로그인">
        <InputWithLabel
          label="아이디"
          onChange={onChangeId}
          name="email"
          placeholder="아이디"
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChangePassword}
        />
        <AuthButton onClick={onClickLogin}>로그인</AuthButton>
      </AuthContent>
      <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
    </AuthWrapper>
  );
};
export default Login;
