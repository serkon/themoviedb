export const api = {
  url: 'https://api.themoviedb.org/3',
  key: '4ab35f9d83d89a515f620bb383cf9068',
  access: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWIzNWY5ZDgzZDg5YTUxNWY2MjBiYjM4M2NmOTA2OCIsInN1YiI6IjVmZDQ5MWEwMDkxZTYyMDA0MDU4NjE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3FtTQGhlGzEQJioqx7cR-elNaUnrFnxK2atiFG4n3s',
  token: '2f76fe2ba96185d7aad7e6b48369afcbd5b9f38e',
  session_id: '',
  user: 'serkon',
  password: 'ttkom',
  region: 'TR',
  language: 'tr-TR',
  image: {
    path: '//image.tmdb.org/t/p/',
    size: 'w500',
  },
  query: 'https://api.themoviedb.org/3/search/movie?api_key=4ab35f9d83d89a515f620bb383cf9068&query=murder&language=tr-TR&region=TR',
}

export class Endpoint {

  static FREE = 'Free to Watch';
  static TRENDING = '/trending/movie/day';
  static UPCOMING = '/movie/upcoming';
  static TOP_RATING = '/movie/top_rated';
  static LATEST = '/movie/latest';
  static POPULAR = '/movie/popular';
  static NOW_PLAYING = 'movie/now_playing';
  static SIMILAR: '/movie/{movie_id}/similar';
  static DETAIL: '/movie/{movie_id}';
  static RECOMANDATIONS: '/movie/{movie_id}/recommendations';

}
