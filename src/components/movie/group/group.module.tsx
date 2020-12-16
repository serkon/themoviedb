import styles from './group.module.scss';
import { MovieGroup, MovieGroupTitle } from '~/src/components/movie/movie';
import { MoviePosterComponent } from '~/src/components/movie/poster/poster.module';

export const MovieGroupComponent = ({ list }: { list: MovieGroup }): JSX.Element => {
  const title = MovieGroupTitle[list.title];
  return (
    <div className={`${styles.host} ${(title && (title === MovieGroupTitle.TRENDING)) ? 'trending' : ''} container`}>
      <h2 className={styles.title}>{MovieGroupTitle[list.title]}</h2>
      <div className={styles.card}>
        {
          list.items && list.items.map((item, index) => (
            <MoviePosterComponent poster={item} key={index} className={styles.poster} />
          ))
        }
      </div>
    </div>
  )
}
