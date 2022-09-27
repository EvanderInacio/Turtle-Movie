import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --background: #040714;
  --text-primary: #f9f9f9;
  --logo-color: #2662d9;
}


body {
  background: var(--background);
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

::-webkit-scrollbar{
  width: 0.5rem;
  background-color: #011432;
}

::-webkit-scrollbar-thumb{
  border-radius: 0.5rem;
  background-color: #2662d9;
}

`

export default GlobalStyle