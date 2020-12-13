import style from "./poster.module.scss";
import { MoviePoster } from "~/components/movie/movie";

const MoviePosterComponent = ({ poster }: { poster: MoviePoster }) => {
    return (
        <div className={style.movie}>
            <div className={style.title}>{poster.original_title}</div>
            <img className={style.path} src={"//image.tmdb.org/t/p/w220_and_h330_face/" + poster.poster_path} />
        </div>
    )
}

export default MoviePosterComponent;