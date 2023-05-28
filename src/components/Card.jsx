import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

const Card = ({ result }) => {
  return (
    <div className='cursor-pointer group sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt='movie poster'
          placeholder='blur'
          blurDataURL='/spinner.svg'
          style={{ maxWidth: '100%', height: 'auto' }}
          className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity object-cover duration-200 rounded'
        />
        <div className='p-2'>
          <p className='line-clamp-2'>{result.overview}</p>
          <h2 className='truncate text-lg font-bold dark:text-amber-100'>
            {result.title || result.name}
          </h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date} <FiThumbsUp className='h-5 mr-1 ml-3' />{' '}
            {result.vote_count}
          </p>
        </div>
      </Link>
      <hr className='mb-3 sm:hidden opacity-20'/>
    </div>
  )
}
export default Card
