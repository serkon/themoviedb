import style from './list.module.scss';
import { MovieGroup } from '~/components/movie/movie';
import MoviePosterComponent from '~/components/movie/poster/poster.module';

export const MovieListComponent = ({ list }: { [key: string]: MovieGroup }): JSX.Element => {
  return (
    <div className={style.host}>
      <h2 className={style.title}>{list.title}</h2>
      <div className={style.card}>
        {list.items.map((item, index) => (
          <MoviePosterComponent poster={item} key={index} />
        ))}
      </div>
    </div>
  )
}
