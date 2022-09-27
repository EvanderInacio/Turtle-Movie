import styled from 'styled-components'

export const Nav = styled.header`
  position: fixed;
  top: 0;
  z-index: 30;
  width: 100vw;
  background: var(--background);

  @media (max-width: 994px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const NavContent = styled.div`
  height: 3.5rem;

  @media (min-width: 994px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const Logo = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  @media (max-width: 994px) {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    z-index: 10;
  }

  img {
    width: 2rem;
  }

  span {
    color: var(--logo-color);
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: -0.7rem;
    right: 1rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 10;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7rem;

  @media (max-width: 994px) {
    height: 100vh;
    width: 100vw;
    background: var(--background);
    display: ${({ click }) => (click ? 'block' : 'none')};
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    @media (max-width: 994px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 10rem;
    }

    a {
      display: flex;
      gap: 3px;

      font-weight: bold;
      color: var(--text-primary);
      height: 1rem;
      cursor: pointer;

      span {
        color: var(--text-primary);
        font-size: 1rem;
        line-height: 1.08;
        white-space: nowrap;
        position: relative;

        &:before {
          content: '';
          height: 2px;
          width: auto;
          background-color: var(--text-primary);
          border-radius: 0px 0px 4px 4px;

          position: absolute;
          bottom: -6px;
          left: 0px;
          right: 0px;
          opacity: 0;

          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
        }
      }

      &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
  }
`
