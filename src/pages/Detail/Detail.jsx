import { APIkey } from '../../config/key'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')

import { BsPeopleFill, BsFillStarFill } from 'react-icons/bs'
import {
  ContainerDescription,
  ContentDescription,
  ContentDetail,
  ContainerVideo,
  Video
} from './styles'


export function Detail() {
  const [detail, setDetail] = useState()
  const { id, type } = useParams()

  function formatDate(detail) {
    let data = ''
    if (detail.release_date !== undefined) {
      data = moment(detail.release_date).format('DD/MM/YYYY')
    } else if (detail.first_air_date !== undefined) {
      data = moment(detail.first_air_date).format('DD/MM/YYYY')
    }
    return data
  }

  useEffect(() => {
    getData()
  }, [type])

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/${
        type ? type : 'Erro'
      }/${id}?api_key=${APIkey}&language=pt-BR&append_to_response=videos`
    )
      .then(res => res.json())
      .then(data => setDetail(data))
  }

  return (
    <>
      <ContainerDescription>
        <div className="banner">
          <img
            src={`https://image.tmdb.org/t/p/original${
              detail ? detail.backdrop_path : ''
            }`}
          />
        </div>
        <ContentDetail>
          <div className='poster'>
            <img
              src={`https://image.tmdb.org/t/p/original${
                detail ? detail.poster_path : ''
              }`}
            />
          </div>

          <ContentDescription>
            <div>
              <h2>{detail ? detail.title : ''}</h2>
              <h2>{detail ? detail.name : ''}</h2>

              <div className="tagline">
                <b>{detail ? detail.tagline : ''}</b>
              </div>

              <article>
                <span>
                  <BsFillStarFill /> {detail ? detail.vote_average : ''}
                </span>
                <span>
                  <BsPeopleFill /> {detail ? detail.vote_count : ''}
                </span>
              </article>

              <div className="status">
                <div className="data">
                  <p>
                    Status:{' '}
                    <span>
                      {detail?.status === 'Released'
                        ? 'Completo'
                        : 'Em laçamento'}
                    </span>
                  </p>
                  <p>
                    Lançamento:{' '}
                    <span>{detail ? formatDate(detail) : 'Não informado'}</span>
                  </p>
                </div>
                <p>
                  Duração:{' '}
                  <span>
                    {detail?.runtime
                      ? detail?.runtime + ' min'
                      : 'Não informado'}
                  </span>
                </p>
                <p>
                  Produção:{' '}
                  <span>
                    {detail &&
                      detail.production_companies &&
                      detail.production_companies.map(company => {
                        return (
                          <>
                            {company.logo_path && (
                              <span>{company.name + '.  '}</span>
                            )}
                          </>
                        )
                      })}
                  </span>
                </p>
              </div>

              <div className="genres">
                {detail && detail.genres
                  ? detail.genres.map(genre => (
                      <>
                        <span id={genre.id}>{genre.name}</span>
                      </>
                    ))
                  : ''}
              </div>
            </div>

            <div className="description">
              <h3>Sinopse</h3>
              <p>{detail ? detail.overview : ''}</p>
            </div>
          </ContentDescription>
        </ContentDetail>
      </ContainerDescription>

      <ContainerVideo>
        <div className='imageVideo'>
        <img
          src={`https://image.tmdb.org/t/p/original${
            detail ? detail.backdrop_path : ''
          }`}
        />
        </div>

        <Video>
          <h2>Trailer</h2>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${detail?.videos.results[0]?.key}`}
            width="100%"
            height="100%"
            pip
            config={{ file: { forceHLS: true } }}
          ></ReactPlayer>
        </Video>
      </ContainerVideo>
    </>
  )
}
