import Link from 'next/link';
import Head from 'next/head';
import styles from "./list.module.scss";
import { MovieCategory, MovieGroup } from '~/components/movie/movie';
import MovieListComponent from '~/components/movie/list/list.module';
import { cssClasses } from '~/utils/css-classes';

export default function List({ data }) {
    return (
        <div className={cssClasses(styles.host, "container")}>
            <Head>
                <title>Movie List</title>
            </Head>
            <h1>Movie List</h1>
            <Link href="/posts/first"><a>movie detail!</a></Link>
            <ul>
                <li>
                    <MovieListComponent list={data} />
                </li>
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            data: await getMovieList()
        }
    }
}

export async function getMovieList(category: MovieCategory = MovieCategory.POPULAR): Promise<MovieGroup> {
    const response = {
        "page": 1,
        "results": [
            {
                "adult": false,
                "backdrop_path": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
                "genre_ids": [
                    28,
                    14,
                    878
                ],
                "id": 590706,
                "original_language": "en",
                "original_title": "Jiu Jitsu",
                "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
                "popularity": 2420.373,
                "poster_path": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
                "release_date": "2020-11-20",
                "title": "Jiu Jitsu",
                "video": false,
                "vote_average": 5.9,
                "vote_count": 138
            },
            {
                "adult": false,
                "backdrop_path": "/ckfwfLkl0CkafTasoRw5FILhZAS.jpg",
                "genre_ids": [
                    28,
                    35,
                    14
                ],
                "id": 602211,
                "original_language": "en",
                "original_title": "Fatman",
                "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
                "popularity": 1850.496,
                "poster_path": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
                "release_date": "2020-11-13",
                "title": "Fatman",
                "video": false,
                "vote_average": 6,
                "vote_count": 141
            },
            {
                "adult": false,
                "backdrop_path": "/vam9VHLZl8tqNwkp1zjEAxIOrkk.jpg",
                "genre_ids": [
                    10751,
                    14,
                    10770
                ],
                "id": 671583,
                "original_language": "en",
                "original_title": "Upside-Down Magic",
                "overview": "Nory and her best friend Reina enter the Sage Academy for Magical Studies, where Nory’s unconventional powers land her in a class for those with wonky, or “upside-down,” magic. Undaunted, Nory sets out to prove that that upside-down magic can be just as powerful as right-side-up.",
                "popularity": 1560.395,
                "poster_path": "/h9vTJ78h0SASYUxg4jV0AQ00oF2.jpg",
                "release_date": "2020-07-31",
                "title": "Upside-Down Magic",
                "video": false,
                "vote_average": 7.7,
                "vote_count": 77
            },
            {
                "adult": false,
                "backdrop_path": "/fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg",
                "genre_ids": [
                    28,
                    35
                ],
                "id": 682377,
                "original_language": "en",
                "original_title": "Chick Fight",
                "overview": "When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.",
                "popularity": 1352.797,
                "poster_path": "/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg",
                "release_date": "2020-11-13",
                "title": "Chick Fight",
                "video": false,
                "vote_average": 6.1,
                "vote_count": 56
            },
            {
                "adult": false,
                "backdrop_path": "/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg",
                "genre_ids": [
                    37
                ],
                "id": 729648,
                "original_language": "en",
                "original_title": "The Dalton Gang",
                "overview": "When their brother Frank is killed by an outlaw, brothers Bob Dalton, Emmett Dalton and Gray Dalton join their local sheriff's department. When they are cheated by the law, they turn to crime, robbing trains and anything else they can steal from over the course of two years in the early 1890's. Trying to out do Jesse James, they attempt to rob two banks at once in October of 1892, and things get ugly",
                "popularity": 1279.857,
                "poster_path": "/6OeGqp18oZucUGziMIRNhLouZ75.jpg",
                "release_date": "2020-11-02",
                "title": "The Dalton Gang",
                "video": false,
                "vote_average": 4.6,
                "vote_count": 29
            },
            {
                "adult": false,
                "backdrop_path": "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
                "genre_ids": [
                    28,
                    53
                ],
                "id": 724989,
                "original_language": "en",
                "original_title": "Hard Kill",
                "overview": "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
                "popularity": 1220.522,
                "poster_path": "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
                "release_date": "2020-10-23",
                "title": "Hard Kill",
                "video": false,
                "vote_average": 5,
                "vote_count": 234
            },
            {
                "adult": false,
                "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
                "genre_ids": [
                    28,
                    53,
                    878
                ],
                "id": 577922,
                "original_language": "en",
                "original_title": "Tenet",
                "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
                "popularity": 1061.725,
                "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
                "release_date": "2020-08-22",
                "title": "Tenet",
                "video": false,
                "vote_average": 7.4,
                "vote_count": 2822
            },
            {
                "adult": false,
                "backdrop_path": "/mZgbq4Zpxz7ozWXl4asj6vNdlIi.jpg",
                "genre_ids": [
                    35,
                    10751,
                    14
                ],
                "id": 454433,
                "original_language": "en",
                "original_title": "Magic Camp",
                "overview": "Andy, at the urging of his former mentor and Magic Camp owner Roy Preston, returns to the camp of his youth hoping to reignite his career. Instead, he finds inspiration in his ragtag bunch of rookie magicians.",
                "popularity": 1005.603,
                "poster_path": "/awcPLFFYjufRXd2oAAP6ZIXF9vM.jpg",
                "release_date": "2020-08-14",
                "title": "Magic Camp",
                "video": false,
                "vote_average": 7.1,
                "vote_count": 106
            },
            {
                "adult": false,
                "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
                "genre_ids": [
                    53,
                    28,
                    18,
                    80
                ],
                "id": 671039,
                "original_language": "fr",
                "original_title": "Bronx",
                "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
                "popularity": 955.533,
                "poster_path": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
                "release_date": "2020-10-30",
                "title": "Rogue City",
                "video": false,
                "vote_average": 5.9,
                "vote_count": 287
            },
            {
                "adult": false,
                "backdrop_path": "/lIE7kfdLBRd0KENNtOaIqPPWNqh.jpg",
                "genre_ids": [
                    27,
                    18,
                    14
                ],
                "id": 590995,
                "original_language": "en",
                "original_title": "The Craft: Legacy",
                "overview": "An eclectic foursome of aspiring teenage witches get more than they bargained for as they lean into their newfound powers.",
                "popularity": 842.932,
                "poster_path": "/lhMIra0pqWNuD6CIXoTmGwZ0EBS.jpg",
                "release_date": "2020-10-28",
                "title": "The Craft: Legacy",
                "video": false,
                "vote_average": 6.3,
                "vote_count": 152
            },
            {
                "adult": false,
                "backdrop_path": "/m7QpUAeI2xTCJyAVl9J9z5dBTSb.jpg",
                "genre_ids": [
                    878,
                    27,
                    28
                ],
                "id": 722603,
                "original_language": "en",
                "original_title": "Battlefield 2025",
                "overview": "Weekend campers, an escaped convict, young lovers and a police officer experience a night of terror when a hostile visitor from another world descends on a small Arizona town.",
                "popularity": 815.374,
                "poster_path": "/w6e0XZreiyW4mGlLRHEG8ipff7b.jpg",
                "release_date": "2020-07-07",
                "title": "Battlefield 2025",
                "video": false,
                "vote_average": 5.8,
                "vote_count": 84
            },
            {
                "adult": false,
                "backdrop_path": "/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg",
                "genre_ids": [
                    28,
                    53,
                    12,
                    18
                ],
                "id": 741067,
                "original_language": "en",
                "original_title": "Welcome to Sudden Death",
                "overview": "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
                "popularity": 769.665,
                "poster_path": "/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
                "release_date": "2020-09-29",
                "title": "Welcome to Sudden Death",
                "video": false,
                "vote_average": 6.3,
                "vote_count": 187
            },
            {
                "adult": false,
                "backdrop_path": "/pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                "genre_ids": [
                    28
                ],
                "id": 694919,
                "original_language": "en",
                "original_title": "Money Plane",
                "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
                "popularity": 744.783,
                "poster_path": "/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                "release_date": "2020-09-29",
                "title": "Money Plane",
                "video": false,
                "vote_average": 5.9,
                "vote_count": 203
            },
            {
                "adult": false,
                "backdrop_path": "/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg",
                "genre_ids": [
                    28,
                    53
                ],
                "id": 524047,
                "original_language": "en",
                "original_title": "Greenland",
                "overview": "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
                "popularity": 733.703,
                "poster_path": "/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg",
                "release_date": "2020-07-29",
                "title": "Greenland",
                "video": false,
                "vote_average": 7.2,
                "vote_count": 913
            },
            {
                "adult": false,
                "backdrop_path": "/cq4h43quHugpsSoy5VCtJeihu64.jpg",
                "genre_ids": [
                    10751,
                    14,
                    12
                ],
                "id": 654028,
                "original_language": "en",
                "original_title": "The Christmas Chronicles: Part Two",
                "overview": "Kate Pierce is reluctantly spending Christmas with her mom’s new boyfriend and his son Jack. But when the North Pole and Christmas are threatened to be destroyed, Kate and Jack are unexpectedly pulled into a new adventure with Santa Claus.",
                "popularity": 713.843,
                "poster_path": "/6sG0kbEvAi3RRLcGGU5h8l3qAPa.jpg",
                "release_date": "2020-11-18",
                "title": "The Christmas Chronicles: Part Two",
                "video": false,
                "vote_average": 7,
                "vote_count": 253
            },
            {
                "adult": false,
                "backdrop_path": "/eo6pahstCYRUm0Lk4MORmfCs2SH.jpg",
                "genre_ids": [
                    16
                ],
                "id": 752455,
                "original_language": "en",
                "original_title": "Angela's Christmas Wish",
                "overview": "A determined Angela makes a wish to reunite her family in time for Christmas, then launches a plan to find her way from Ireland to Australia.",
                "popularity": 710.825,
                "poster_path": "/eu747ko823mktL3ygo7ohdZznP7.jpg",
                "release_date": "2020-12-01",
                "title": "Angela's Christmas Wish",
                "video": false,
                "vote_average": 7.6,
                "vote_count": 24
            },
            {
                "adult": false,
                "backdrop_path": "/d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg",
                "genre_ids": [
                    28,
                    27,
                    53
                ],
                "id": 581392,
                "original_language": "ko",
                "original_title": "반도",
                "overview": "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
                "popularity": 668.562,
                "poster_path": "/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
                "release_date": "2020-07-15",
                "title": "Peninsula",
                "video": false,
                "vote_average": 6.9,
                "vote_count": 888
            },
            {
                "adult": false,
                "backdrop_path": "/2ltadt0HtHS8qD3xREVds3PDxkP.jpg",
                "genre_ids": [
                    10751,
                    14,
                    35
                ],
                "id": 662546,
                "original_language": "en",
                "original_title": "Godmothered",
                "overview": "A young and unskilled fairy godmother that ventures out on her own to prove her worth by tracking down a young girl whose request for help was ignored. What she discovers is that the girl has now become a grown woman in need of something very different than a \"prince charming.\"",
                "popularity": 645.981,
                "poster_path": "/yXlf0iwxdVmIZgRSZMIMsT1ekuE.jpg",
                "release_date": "2020-12-04",
                "title": "Godmothered",
                "video": false,
                "vote_average": 7.4,
                "vote_count": 139
            },
            {
                "adult": false,
                "backdrop_path": "/eShw0LB5CkoEfYtpUcXPD85oz5Q.jpg",
                "genre_ids": [
                    27,
                    53,
                    35,
                    14
                ],
                "id": 551804,
                "original_language": "en",
                "original_title": "Freaky",
                "overview": "A mystical, ancient dagger causes a notorious serial killer to magically switch bodies with a 17-year-old girl.",
                "popularity": 635.96,
                "poster_path": "/8xC6QSyxrpm0D5A6iyHNemEWBVe.jpg",
                "release_date": "2020-11-12",
                "title": "Freaky",
                "video": false,
                "vote_average": 7.3,
                "vote_count": 129
            },
            {
                "adult": false,
                "backdrop_path": "/qAKvUu2FSaDlnqznY4VOp5PmjIF.jpg",
                "genre_ids": [
                    28,
                    12,
                    18,
                    14
                ],
                "id": 337401,
                "original_language": "en",
                "original_title": "Mulan",
                "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
                "popularity": 629.451,
                "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
                "release_date": "2020-09-04",
                "title": "Mulan",
                "video": false,
                "vote_average": 7.2,
                "vote_count": 3360
            }
        ],
        "total_pages": 500,
        "total_results": 10000
    }
    return (
        { title: category, items: response.results }
    );
}
