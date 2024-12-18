import React from 'react';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import { useForm } from 'react-hook-form';

const Update = () => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const { register, handleSubmit, getValues, 
          formState: { isSubmitting, isSubmitted, errors } 
        } = useForm({ mode : "onChange" });

  return (
    <S.Form onSubmit={handleSubmit( async (data) => {
      console.log(data)

      const { email , password } = data;
      // 회원가입 데이터 요청하기
      // fetch() 이용, localhost:8000
      await fetch("http://localhost:8000/users/userEdit", {
        method : "PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email : email,
          password : password
        })
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })

    })}>

      <S.Label>
        <S.Title>이름</S.Title>
        <S.Input
           type="text" placeholder="이름을 입력하세요" autoComplete='off'
          {...register("name")}
        />
      </S.Label>
      <S.Label>
        <S.Title>나이</S.Title>
        <S.Input
           type="text" placeholder="나이를 입력하세요" autoComplete='off'
          {...register("age")}
        />
      </S.Label>
      <S.Label>
        <S.Title>전화번호</S.Title>
        <S.Input
           type="text" placeholder="전화번호를 입력하세요" autoComplete='off'
          {...register("phone")}
        />
      </S.Label>
      
      <BasicButton size={"full"} shape={"small"}  variant={"black"} color={"white"} 
        disabled={isSubmitting}
      >
        회원정보수정
      </BasicButton>
    </S.Form> 
  );
};

export default Update;