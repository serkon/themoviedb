import React from 'react';
import { useContext, useEffect, useState } from 'react';

import Head from 'next/head'
import styles from './home.module.scss'
import { SelectComponent } from 'ui/select/select.module';
import { api, Endpoint } from 'src/configurtion';
import { MovieGroup } from 'src/components/movie/movie';
import { MovieGroupComponent } from 'src/components/movie/group/group.module';
import { AppContext } from 'src/providers/app.context';

export default function Home(): JSX.Element {
  const groups = ['POPULAR', 'UPCOMING', 'TOP_RATING', 'TRENDING'];
  const [movieGroup, setMovieGroup] = useState<MovieGroup[]>([]);
  const { store, setStore }: { [key: string]: any } = useContext(AppContext);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const list = groups.map((group) => getList(group));
      Promise.all(list).then(value => setMovieGroup(value));
    }

    return function cleanup() {
      mounted = false
    }
  }, []);

  const addKeyword = (val) => {
    const index = store.search.findIndex(item => item == val);
    (index > -1) && store.search.splice(index, 1);
    const merge = [val, ...store.search];
    setStore({ ...store, search: merge });
  }

  return (
    <AppContext.Consumer>
      {
        (data) => <>
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
                <SelectComponent
                  className={styles.search}
                  placeholder="Search for a movie, tv show, person..."
                  max={4}
                  button={true}
                  onSelect={
                    (text) => {
                      addKeyword(text);
                    }
                  }
                  options={store.search}
                />
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
        </>
      }
    </AppContext.Consumer>
  )
}

const getList = async (title) => {
  const endpointPath = Endpoint[title];
  const response = await fetch(`${api.url}${endpointPath}?api_key=${api.key}&language=${api.language}&page=1`);
  const data = await response.json();
  return {
    title,
    items: data.results,
  };
}

