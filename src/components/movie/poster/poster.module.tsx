import Link from 'next/link';
import styles from './poster.module.scss';
import { MoviePoster } from '~/src/components/movie/movie';
import { api } from '~/src/configurtion';

export const MoviePosterComponent = ({ poster, className }: { poster: MoviePoster, className: string }): JSX.Element => {
  return (
    <div className={`${styles.host} ${className}`}>
      <img className={styles.path} src={`${api.image.path}${api.image.size}${poster.poster_path}`} />
      <div className={styles.raiting}><span className={styles.percent}>{poster.vote_average * 10}<sup className={styles.sub}>%</sup></span></div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <Link href="movie/detail">
            <a className={styles.link} title={poster.original_title}>{poster.original_title}</a>
          </Link>
        </h2>
        <div className={styles.date}>{poster.release_date}</div>
      </div>
    </div>
  )
}
