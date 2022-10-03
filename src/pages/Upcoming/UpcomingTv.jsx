import axios from 'axios'
import { APIkey } from '../../config/key'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cards } from '../../components/Card'
import { Section, CardContainer } from '../Home/styles'
import { CustomPagination } from '../../components/Pagination'
import { Title } from '../Movies/styles'

export function UpcomingTv() {
  const [series, setSeries] = useState([])
  const [numOfPages, setNumOfPages] = useState()
  const [page, setPage] = useState(1)

  const movies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIkey}&language=pt-BR&page=${page}`
    )
    setSeries(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0, 0)
    movies()
  }, [page])

  return (
    <>
      <Section>
      <Title style={{ color: '#9C27B0'}}>
      <h2>
        Próximos episódios
      </h2>
      </Title>
        
        <CardContainer>
          {series.length > 0 &&
            series.map(movie => {
              return (
                <Link to={`/detail/tv/${movie.id}`}>
                  <Cards key={movie.id} movie={movie} />
                </Link>
              )
            })}
        </CardContainer>

        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </Section>
    </>
  )
}
