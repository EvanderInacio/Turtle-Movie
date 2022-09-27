import styled from "styled-components"

export const Section = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

export const CardContainer = styled.div`
 @media (max-width: 467px) {
  display: grid;
  justify-content: center;
  align-items: center;
 }

 @media(min-width: 468px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
 }

 @media(min-width: 768px){
  display: grid;
  grid-template-columns: repeat(3, 1fr);
 }

 @media(min-width: 994px){
  display: grid;
  grid-template-columns: repeat(4, 1fr);
 }

 @media(min-width: 1200px){
  display: grid;
  grid-template-columns: repeat(5, 1fr);
 }
`


export const Title = styled.h2`
  margin-top: 5.5rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  font-size: 2rem;
  font-weight: 900;

  @media(max-width: 768px) {
    font-size: 1.5rem;
  }
  
  span {
    color: var(--logo-color);
  }
`
