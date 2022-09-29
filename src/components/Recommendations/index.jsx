import { APIkey } from '../../config/key'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'
import { Card, CardContent } from '../Card/styles'
import { CardContainer, Section, Title } from '../../pages/Home/styles'

export function Recommendations({ type, id }) {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${
        type ? type : 'erro'
      }/${id}/recommendations?api_key=${APIkey}&language=pt-BR`
    )
      .then(response => response.json())
      .then(data => setRecommendations(data.results))
  })

  return (
    <>
      <Section>
        <Title>Recomendações</Title>
        <CardContainer style={{ gap: '1rem' }}>
          {recommendations
            ? recommendations.map(item => {
                return (
                  <Link to={`/detail/${type ? type : ''}/${item.id}`} target="_blank">
                    <Card key={item.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        alt={item.name}
                      />

                      <CardContent>
                        <h2>{item.title}</h2>
                        <h2>{item.name}</h2>

                        <article>
                          {item.media_type ? item.media_type : ''}
                          <span>
                            <FaStar />
                            {item.vote_average.toFixed(1)}
                          </span>
                        </article>
                        <p>{item.overview.slice(0, 100) + '...'}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })
            : ''}
        </CardContainer>
      </Section>
    </>
  )
}
