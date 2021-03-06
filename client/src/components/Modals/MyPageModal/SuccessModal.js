import React from "react";
import styled from "styled-components";
import { ModalBackdrop } from "../LoginModal/LoginStyled";

const ModalView = styled.div`
  width: 30rem;
  height: 10rem;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  font-size: 20px;

  .close-X {
    position: absolute;
    top: 0;
    right: 3px;
    cursor: pointer;
  }

  .closeBtn {
    width: 7rem;
    height: 2.5rem;
    border: none;
    background-color: #f6d9d5;
    cursor: pointer;
    border-radius: 6px;
    font-family: 'NanumSquare', arial;
    box-shadow: 2px 2px 2px 1px rgb(180 180 180);
  }
  .closeBtn:active {
    color: white;
  }

  @media (max-width: 650px){
    width: 70vw;
  }
`

export default function SuccessModal({changeTarget, setSuccessModal, curSuccessModal}) {
  let target = changeTarget
  function ModalHandler() {
    setSuccessModal(!curSuccessModal)
  }
  
  if(target === 'nickname') target = '닉네임이'
  else if(target === 'passwordCheck') target = '비밀번호가'
  else if(target === 'img') target = '프로필 사진이'

  return (
    <ModalBackdrop onClick={ModalHandler}>
      <ModalView onClick={(e) => e.stopPropagation()}>
        <span className="close-X" onClick={ModalHandler}>&#x2716;</span>
        <span className="success-comment">{target} 성공적으로 <br/>변경되었습니다.</span>
        <button type="button" className="closeBtn" onClick={ModalHandler}>확인</button>
      </ModalView>
    </ModalBackdrop>
  )
}