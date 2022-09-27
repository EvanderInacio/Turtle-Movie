import { APIkey } from '../../config/key'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment"
import "moment/locale/pt-br"
moment.locale("pt-br")

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Image, Content } from './styles'
import { FaStar, FaRegCalendarAlt } from 'react-icons/fa'

export function Slider() {
  const [popularMovies, setPopularMovies] = useState([])

  function formatDate(trending) {
    let data = ''
    if(trending.release_date !== undefined) {
      data = moment(trending.release_date).format('DD/MM/YYYY')
    } else if (trending.first_air_date !== undefined) {
      data = moment(trending.first_air_date).format('DD/MM/YYYY')
    }
    return data
  }
  
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${APIkey}&language=pt-BR`
    )
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      interval={5000}
    >
      {popularMovies.map(trending => {
        return (
          <Link key={trending.id} to={`detail/${trending.media_type}/${trending.id}`}>
            <Image>
              <img 
                src={`https://image.tmdb.org/t/p/original${
                  trending && trending.backdrop_path
                }`}
              />
            </Image>
            <Content>
              <h1>{trending ? trending.name : ''}</h1>
              <h1>{trending ? trending.title : ''}</h1>
              <div>
                <article>
                   <span>
                    <FaRegCalendarAlt /> {trending ? formatDate(trending) : ''}
                   </span>
                  <span>
                    <FaStar />
                    {trending ? trending.vote_average.toFixed(1) : ''}
                  </span>
                </article>

                <p>{trending ? trending.overview : ''}</p>
              </div>
            </Content>
          </Link>
        )
      })}
    </Carousel>
  )
}
