import React from "react";

import { AuthButton } from ".";
import { AuthWrapper } from ".";
import { AuthContent } from ".";
import { InputWithLabel } from ".";
import { RightAlignedLink } from ".";
const Login = () => {
  return (
    <AuthWrapper>
      <AuthContent title="로그인">
        <InputWithLabel label="아이디" name="email" placeholder="아이디" />
        <InputWithLabel
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
        />
        <AuthButton>로그인</AuthButton>
      </AuthContent>
      <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
    </AuthWrapper>
  );
};
export default Login;
