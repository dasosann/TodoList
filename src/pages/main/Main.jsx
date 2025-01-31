import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
const Main = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={process.env.PUBLIC_URL + "/images/main/penguin.png"} />
      </S.ImageWrapper>
      <S.ButtonWrapper>
        <Link to={"/sign-in"}>
          <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>로그인</BasicButton>
        </Link>
        <Link to={"/sign-up"}>
          <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton>
        </Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Main;