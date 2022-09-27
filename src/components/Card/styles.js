import styled, { keyframes } from "styled-components"


export const Card = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform .3s;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.8rem;
  cursor: pointer;
  width: 200px;
  height:300px; 
  border: 1px solid #444;
  border-radius: 10px;

  &:hover{
    transform: scale(1.1);
    z-index: 15;
  }

  img {
    height: 18.750rem;
  }

`

export const CardContent = styled.div`
  position: absolute;
  padding: 0 1rem 1rem 1rem;
  bottom: 0;
  
  height: 18.125rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1)); 
  opacity: 0;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }

  h2 {
    font-weight: 900;
    font-size: 1.3rem;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #fef501;

    font-size: .95rem;
    font-weight: 800;
    margin-bottom: 0.4rem;

    span { 
      display: inline-flex;
      align-items: center;
      gap: .2rem;
    } 
  }

  p {
    font-style: italic;
    font-size: .75rem;
    margin-bottom: 0.25rem;
  }
`

export const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 6px solid #444;
  border-radius: 50%;
  border-top-color: var(--logo-color);
  
  height: 3rem;
  width: 3rem;
  animation: ${loading} 1s infinite;
`
