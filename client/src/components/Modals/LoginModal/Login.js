import React, { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ModalBackdrop,
  LoginModalBackdrop,
  LoginModalView,
  ModalLogo,
  ModalHead,
  ModalInput,
  Oauth
} from "./LoginStyled"
import {useDispatch, useSelector} from 'react-redux'
import { loginModal, signupModal } from '../../../redux/actions';
import axios from "axios";

export default function Login () {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const loginState = useSelector(state => state.loginReducer);
  const signupState = useSelector(state => state.signupReducer);
  const authState = useSelector(state => state.changeAuthState)

  function onChange (e) {
    const {name, value} = e.target

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function postLogin () {
    const {email, password} = inputs

    axios({
      method: 'POST',
      url: 'https://localhost:8443/auth/login',
      headers: {
        accept: 'application/json'
      },
      data: {email, password}
    }) // 회원가입 하고 여기부터 다신
  }

  function ModalHandler (e) {
    if(e.target.textContent === '회원가입하기!') {
      dispatch(loginModal(loginState))
      dispatch(signupModal(signupState))
      return;
    }
    dispatch(signupModal(loginState))
  }
  


  return (
    <ModalBackdrop onClick={ModalHandler}>
      <LoginModalView onClick={(e) => e.stopPropagation()}>

        <ModalLogo>
          <div><img src="/NADRI.png" /></div>
        </ModalLogo>

        <ModalHead>
          <span onClick={ModalHandler}>&#x2716;</span>
          <h1>로그인</h1>
          <p>회원이 아니신가요? &#xa0;<span onClick={(e) => ModalHandler(e)}>회원가입하기!</span></p>
        </ModalHead>

        <ModalInput>
          <form>
            <label htmlFor="email">이메일</label>
            <input type={"text"} name="email" onChange={onChange}></input>
            <label htmlFor="password">비밀번호</label>
            <input type={"password"} name="password" onChange={onChange}></input>
          </form>
        </ModalInput>

        <Oauth>
          <div>로그인</div>
          <div><img src="google.png" />구글 로그인</div>
          <div><img src="kakao.png" />카카오톡 로그인</div>
        </Oauth>
      </LoginModalView>
    </ModalBackdrop>
  )
}