import Head from 'next/head'
import styles from './home.module.scss'
import { SelectComponent } from 'ui/select/select.module';
import { api, Endpoint } from '~/src/configurtion';
import { useEffect, useState } from 'react';
import { MovieGroup } from '~/src/components/movie/movie';
import { MovieGroupComponent } from '~/src/components/movie/group/group.module';
import React from 'react';

export default function Home(): JSX.Element {
  const groups = ['POPULAR', 'UPCOMING', 'TOP_RATING', 'TRENDING'];
  const [movieGroup, setMovieGroup] = useState<MovieGroup[]>([]);
  useEffect(() => {
    const list = groups.map((group) => getList(group));
    Promise.all(list).then(value => setMovieGroup(value));
  }, []);
  return (
    <div className={styles.host}>
      <Head>
        <title>TTKOM Web Case</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<Link href="/movie/list"><a>this page!</a></Link>*/}
      <section className={`${styles.discover}`}>
        <div className="container">
          <h1>Welcome.</h1>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
          <SelectComponent className={styles.search} placeholder="Search for a movie, tv show, person..."></SelectComponent>
        </div>
      </section>
      <section>
        {movieGroup &&
          movieGroup.map((group, key) =>
            <React.Fragment key={key}>
              <MovieGroupComponent list={group}></MovieGroupComponent>
            </React.Fragment>,
          )
        }
      </section>
    </div>
  )
}

const getList = async (title) => {
  const endpointPath = Endpoint[title];
  const response = await fetch(`https://api.themoviedb.org/3${endpointPath}?api_key=${api.key}&language=${api.language}&page=1`);
  const data = await response.json();
  return {
    title,
    items: data.results,
  };
}
