import { APIkey } from '../../config/key'
import moment from 'moment/moment'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Cards } from '../../components/Card'

import {
  ContainerPerson,
  Description,
  Info,
  Bio,
  PersonMovies,
  PersonDetail
} from './styles'

export function Person() {
  const [person, setPerson] = useState()
  const { id, type } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${APIkey}&language=pt-BR&append_to_response=combined_credits`
    )
      .then(response => response.json())
      .then(data => setPerson(data))
  }, [])

  return (
    <ContainerPerson>
      <Description>
        <img
          src={`https://image.tmdb.org/t/p/original${
            person ? person.profile_path : ''
          }`}
          alt="Pessoa"
        />

        <Info>
          <h3>Informações Pessoais</h3>

          <article>
            <h4>Conhecido(a) por</h4>
            <p>{person ? person.known_for_department : ''}</p>
          </article>

          <article>
            <h4>Gênero</h4>
            <p>
              {person ? (person.gender == 1 ? 'Feminino' : 'Masculino') : ''}
            </p>
          </article>

          {person
            ? person.birthday &&
              person.birthday != null && (
                <article>
                  <h4>Nascimento</h4>
                  <p>
                    {moment(person ? person.birthday : '').format('DD/MM/YYYY')}{' '}
                    {person && person.deathday == null && (
                      <span>
                        ({`${moment().diff(person.birthday, 'years')} de idade`}
                        )
                      </span>
                    )}
                  </p>
                </article>
              )
            : ''}

          {person
            ? person.deathday &&
              person.deathday != null && (
                <article>
                  <h4>Falecimento</h4>
                  <p>
                    {moment(person ? person.deathday : '').format('DD/MM/YYYY')}{' '}
                    ({`${moment().diff(person.birthday, 'years')} de idade`})
                  </p>
                </article>
              )
            : ''}

          {person
            ? person.also_known_as.length > 0 && (
                <article>
                  <h4>Também conhecido(a) como</h4>
                  <p>
                    {person.also_known_as.map((item, index) => {
                      return <p key={index}>{item}</p>
                    })}
                  </p>
                </article>
              )
            : ''}
        </Info>
      </Description>

      <Bio>
        <h2 className="title">{person ? person.name : ''}</h2>
        <p className="description">{person ? person.biography : ''}</p>

        <PersonDetail>
          <h3>Conhecido(a) por</h3>
          <PersonMovies>
            <div className="cards">
              {person
                ? person.combined_credits.cast.length > 0 &&
                  person.combined_credits.cast.map(movie => {
                    return (
                      <Link
                        key={movie.id}
                        to={`/detail/${movie.media_type}/${movie.id}`}
                      >
                        <Cards movie={movie} />
                      </Link>
                    )
                  })
                : ''}
            </div>
          </PersonMovies>
        </PersonDetail>
      </Bio>
    </ContainerPerson>
  )
}
