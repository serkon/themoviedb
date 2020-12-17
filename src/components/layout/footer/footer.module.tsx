import styles from './footer.module.scss';

const menus: string[] = ['Movies', 'TV Shows', 'Peoples', 'More'];

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.host}>
      <div className={styles.container + ' container'}>
        <div>
          <img className={styles.logo} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDb)" width="130" height="94" />
        </div>

        <div>
          <h3>The Basics</h3>
          <ul>
            <li><a href="/about">About TMDb</a></li>
            <li><a href="/about/staying-in-touch">Contact Us</a></li>
            <li><a href="/talk">Support Forums</a></li>
            <li><a href="/documentation/api">API</a></li>
            <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener">System Status</a></li>
          </ul>
        </div>

        <div>
          <h3>Get Involved</h3>
          <ul>
            <li><a href="/bible"><span className="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
            <li><a href="/apps">3rd Party Applications</a></li>
            <li><a href="/movie/new">Add New Movie</a></li>
            <li><a href="/tv/new">Add New TV Show</a></li>
          </ul>
        </div>

        <div>
          <h3>Community</h3>
          <ul>
            <li><a href="/documentation/community/guidelines">Guidelines</a></li>
            <li><a href="/discuss">Discussions</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
            <li><a href="/documentation/api/terms-of-use">API Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
