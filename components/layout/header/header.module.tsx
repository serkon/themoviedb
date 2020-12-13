import { cssClasses } from "~/utils/css-classes";
import style from "./header.module.scss";

const menus = ["Movies", "TV Shows", "Peoples", "More"];

export const Header = () => {
    return (
        <header className={style.host}>
            <div className={cssClasses(style.container, "container")}>
                <div className={style.logo}>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" width="154" height="20" />
                </div>
                <nav className={style.menu}>
                    {menus.map((item, index) => <li key={index}>{item}</li>)}
                </nav>
                <div className={style.user}>SK</div>
            </div>
        </header>
    );
}
