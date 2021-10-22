import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BorderedButton = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
`;
const LoginButton = () => {
  return <BorderedButton to="auth/login">로그인/회원가입</BorderedButton>;
};
export default LoginButton;
