import styled from 'styled-components'

export const Image = styled.div`
 width: 100vw;
 height: 560px;
 position: relative; 
 opacity: 0.9;

 @media (max-width: 994px) {
  width: 100vw;
  height: auto;
 }
`

export const Content = styled.div`
  position: absolute;
  padding: 5rem;
  bottom: 0;
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
  opacity: 0.9;
  transition: opacity .3s;

  &:hover {
    opacity: 1;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
    text-align: left;
  }
  article {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #fef501;

    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 1rem;  

    span {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }
 
  p {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    display: flex;
    text-align: left;
    width: 50%;
  }

  @media(max-width: 468px) {
    padding: 2.2rem;
    opacity: 0.8;

    h1 {
      font-size: 1.5rem;
    }
    p {
      display: none;
     }

    span {
      font-size: 1rem;
    }
  }

  @media (min-width: 469px) {
     padding: 2rem;
    
     h1 {
      font-size: 2rem;
     }

     p {
      display: none;
     }
    }

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;

    h1 {
      font-size: 3rem;
    }

    p {
      display: block;
     }
  }

`
