import styled from "styled-components"

export const Banner = styled.div`
 width: 100%;
 height: 11rem;
 display: flex;
 justify-content: center;
 align-items: center;



 @media (min-width: 994px) {
    margin-bottom: 1.5rem;
    height: 18rem;
  }
 
 h3{
   position: absolute;
   top: 5rem;
   z-index: 5;
   font-size: 3rem;
  font-weight: 900;
  color: var(--logo-color);

  @media (min-width: 994px) {
    top: 8rem;
  }

 }

  img{
  position: relative;
  width: 100%;
  height: 100%;
  filter: brightness(70%);
  opacity: 0.5;
  display: none;
 
  @media (min-width: 994px) {
    display: block;
  } 
  
}

`