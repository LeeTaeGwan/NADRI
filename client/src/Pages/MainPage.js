import Header from "../components/Header"
import { Routes, Route, useNavigate, Navigate, BrowserRouter, Link } from 'react-router-dom';
import styled from "styled-components";
import Footer from "../components/Footer";
const MainContainer = styled.div`
  
`

export default function Main () {

  return (
    <MainContainer>
      <Footer />
    </MainContainer>
  )
} 