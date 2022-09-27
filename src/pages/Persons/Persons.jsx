import { APIkey } from '../../config/key'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Title } from '../Home/styles'

export function Persons() {
  const [person, setPerson] = useState()

  useEffect(() => {
    People()
  }, [])

  const People = () => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${APIkey}&language=en-US`
    )
      .then(response => response.json())
      .then(data => setPerson(data.results))
  }

  return (
    <Container>
      <Title>
          <span>Pessoas</span> 
        </Title>
      <ContainerPerson>
        
        {person &&
          person.map(person => {
            return (
              <Link
                key={person.id}
                to={`/person/${person.id}`}
              >
                <PersonContent>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      person ? person.profile_path : ''
                    }`}
                    alt={person.name}
                  />
                  <div className="name">
                    <h2>{person.name}</h2>
                  </div>
                </PersonContent>
              </Link>
            )
          })}
      </ContainerPerson>
    </Container>
  )
}


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerPerson = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 468px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const PersonContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    border: none;
    width: 10rem;
    height: auto;
    border-radius: 1rem;

    @media (min-width: 994px) {
      width: 16rem;
    }
  }

  .name {
    position: absolute;
    bottom: 0;

    padding: 0 1rem 1rem 1rem;

    width: 100%;
    height: 100%;

    background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(8, 10, 10, 10));
    opacity: 0;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    h2 {
      position: absolute;
      bottom: 4rem;
      font-weight: 900;
      font-size: 1.5rem;
    }
  }
`
