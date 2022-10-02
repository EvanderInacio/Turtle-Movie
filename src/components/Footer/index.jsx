import { FooterContainer } from './styles'

import { FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <footer style={{position: 'relative', marginTop: '15rem'}}>
      <FooterContainer>
      <h5>
        &copy; 2022 {' '}
        <a href="https://www.evanderinacio.com/" target="_blank">
         Evander Inácio
        </a>
      </h5>
      <p>
        <a href="https://github.com/EvanderInacio/Turtle-Movie" target="_blank">
          <FaGithub />
        </a>
      </p>
    </FooterContainer>
    </footer>
  )
}
