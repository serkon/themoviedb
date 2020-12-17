import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Movie } from '~/src/components/movie/movie';
import { api } from '~/src/configurtion';
import styles from './detail.module.scss';

const timeConvert = (n) => {
  const num = n;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + 'h ' + rminutes + 'm';
}

export default function Detail({ param, data }: { param: { id: number }, data: Movie }): JSX.Element {
  const router = useRouter();
  return router.isFallback ? <div>Loading...</div> :
    <>
      {/* {param.id} {console.log(data)} */}
      <section className={`${styles.host} host`}>
        <div className={styles.bg}>
          <div className={`${styles.container} container`}>
            <div style={{ backgroundImage: `url(${api.image.path}w300_and_h450_bestv2${data.poster_path})` }} className={styles.poster}></div>
            <div className={styles.description}>
              <h2 className={styles.title}>{data.original_title}</h2>
              <div className={styles.facts}>
                <span className={styles.release_date}>{data.release_date}</span>
                <span className={styles.genres}>{data.genres.map(item => item.name).join(', ')}</span>
                <span className={styles.runtime}>{timeConvert(data.runtime)}</span>
              </div>
              <div className={styles.actions}>
                <div className={styles.chartContainer}>
                  <div className={styles.score}>{data.vote_average * 10}<sup className={styles.sub}>%</sup></div>
                  <div className={styles.userScore}>User Score</div>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.title}>Overview</h3>
                <div className={styles.overview}>{data.overview}</div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
        .host {
          background-image: url('${api.image.path}w1920_and_h800_multi_faces/${data.backdrop_path}');
        }
      `}</style>
      </section>
    </>
}
/*
// This function gets called at build time
export async function getStaticPaths(context) {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: '1' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

export async function getStaticProps(context) {
  console.log('++', context, '++');
  return await {
    props: {
      param: { id: context.params.id },
    },
  }
}
 */

export async function getServerSideProps(context) {
  console.log(`${api.url}/movie/${context.params.id}?api_key=${api.key}&language=${api.language}&page=1`);
  const response = await fetch(`${api.url}/movie/${context.params.id}?api_key=${api.key}&language=${api.language}&page=1`);
  const data: Movie = await response.json();

  return await {
    props: {
      param: { id: context.params.id },
      data,
    },
  }
}

