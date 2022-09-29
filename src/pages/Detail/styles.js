import styled from "styled-components"

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 994px) {
    margin-bottom: 4rem;
  }


  .banner{
    width: 100%;

    img {
      width: 100%;
      height: 18rem;
      object-fit: cover;
      object-position: 0 30%;

      @media(min-width: 469px) {
        height: 21rem;
      }

      @media(min-width: 768px) {
        height: 25rem;
      }

      @media(min-width: 994px) {
        height: 31rem;
      }

    }
  }
`

export const ContentDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 230px;
  
  @media(min-width: 994px) {
    padding-left: 2rem;
  }

  @media(max-width: 994px) {
    display: flex;
    flex-direction: column;
    width: 75%;
  }
  
  .poster{
    img{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;

    @media(max-width: 468px) {
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 10rem;
  }

  @media(min-width: 469px) {
    margin: 2rem 0;
    width: 12.5rem;
  }

  @media(min-width: 768px) {
    margin-right: 1rem;
    width: 13rem;
  }

  @media(min-width: 994px) {
    margin-right: 1rem;
    width: 15rem;
  }

  @media(min-width: 1200px) {
    width: 18rem;
  }
}

  } 
`

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  
  @media(min-width: 994px) {
    position: relative;
    top: 230px;
  }

  h2{
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: .6rem;
    max-width: 30rem;
  
    @media (min-width: 469px) {
      font-size: 2rem;
      margin-bottom: .6rem;
    }

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media(min-width: 994px) {
      font-size: 3rem;
      margin-bottom: .4rem;
    }
  }

  .tagline{
    margin-bottom: .7rem;

    @media(max-width: 468px) {
      font-size: 1rem;
      margin-bottom: .9rem;

    }
  }

  article {
    display: flex;
    gap: 2rem;
    color: #fef501;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 900;

    span{
      display: flex;
      align-items: center;
      gap: .2rem;
      
    }

    @media(min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .status{
    display: flex;
    flex-direction: column;
    gap: .3rem;
    margin-bottom: 2rem;
    font-size: 1rem;

    @media(min-width: 768px) {
      font-size: 1.1rem;
    }
    
    .data {
      display: flex;
      flex-direction: column;
      
    }
    
    span {
      font-weight: 600;
      color: #00f7df;
    }
  }

  .genres {
   display: flex;
   gap: .8rem;
    margin: 1.25rem 0;
    font-weight: 700;


    span {
      padding: .6rem .4rem;
      border: 2px solid var(--logo-color);
      border-radius: 10px;
      text-align: center;
    }

    @media(max-width: 468px) {
      flex-direction: column;
      margin-right: 0;
      gap: .8rem;
    }
  }

  .description {
    max-width: 30rem;

    @media(max-width: 994px){
      max-width: 20rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      font-weight: 600;
    }
  }

`

export const CastContent = styled.div`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .cast {
    display: grid;
    height: 30rem;
    overflow-y: scroll;
    padding: 1rem;
    gap: 1rem;
   
    @media(min-width: 468px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1200px) {
      height: 45rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }

`

export const ContainerVideo = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;

.imageVideo{
  img {
    z-index: -1;
      width: 100%;
      opacity: 0.4;
      object-fit: cover;
    }
  }
  
`

export const Video = styled.div`
z-index: 10;
position: absolute;

h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #00f7df;
}

@media(min-width: 468px){
  width: 25rem;
  height: 13rem;
 }

 @media(min-width: 768px){
  width: 35rem;
  height: 20rem;
 }

 @media(min-width: 994px){
  width: 40rem;
  height: 30rem;
 }

 @media(min-width: 1200px){
  width: 51rem;
  height: 30rem;
 }

`