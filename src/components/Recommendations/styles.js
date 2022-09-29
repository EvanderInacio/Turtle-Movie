import styled from "styled-components"

export const CardContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 
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