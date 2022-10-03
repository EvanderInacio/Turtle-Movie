import styled from "styled-components"

export const FooterContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 gap: 1rem;

 
 width: 100%;
 height: 6rem;
 background: #02040C;
 margin-top: 5rem;
 font-size: 1.1rem;


 @media(min-width: 768px) {
  font-size: 1.4rem;
 }

 p {
   @media(min-width: 768px) {
    font-size: 2rem;
  }
 }

 a{
  color:  #2662d9;
    &:hover{
      color: #00f7df;
    }
 }

`