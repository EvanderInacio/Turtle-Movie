import styled from "styled-components"

export const FooterContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 gap: .7rem;
 width: 100%;
 height: 6rem;
 background: #02040C;
 margin-top: 5rem;

 font-size: 1.1rem;
 font-weight: 700;

 @media(min-width: 768px) {
  font-size: 1.4rem;
 }

 a{
  color: #00f7df;

    &:hover{
      color:  #2662d9;
    }
 }

`