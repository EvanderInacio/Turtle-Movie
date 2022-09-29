import { APIkey } from '../../config/key'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PersonContent } from '../../pages/Persons/Persons'

export function Cast({ id, type }) {
  const [person, setPerson] = useState([])

  useEffect(() => {
    getCast()
  }, [])

  const getCast = () => {
    fetch(
      `https://api.themoviedb.org/3/${
        type ? type : 'erro'
      }/${id}/credits?api_key=${APIkey}&language=pt-BR`
    )
      .then(res => res.json())
      .then(data => setPerson(data.cast))
  }

  return (
    <>
      {person
        ? person.map(cast => {
            return (
              <Link to={`/person/${cast.id}`} target="_blank">
                <PersonContent>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    alt={cast.name}
                  />
                  <div className="name">
                    <h2>{cast.name}</h2>
                    <p>{cast.character}</p>
                  </div>
                </PersonContent>
              </Link>
            )
          })
        : ''}
    </>
  )
}
