import style from "./Home.module.css";
import {useNavigate} from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className={style.home_content}>
            <div>
                <h1 className={style.test}>Rick And Morty</h1>
            </div>
            <div className={style.page_content}>
                <div className={style.d_card} onClick={() => navigate(`/location`)}>
                    <div className={style.content}>
                        <h2 className={style.heading}>Location</h2>
                        <p className={style.data_content}>View all locations in the series.</p>
                    </div>
                </div>
                <div className={style.d_card} onClick={() => navigate(`/character`)}>
                    <div className={style.content}>
                        <h2 className={style.heading}>Character</h2>
                        <p className={style.data_content}>View all characters from the series.</p>
                    </div>
                </div>
                <div className={style.d_card}>
                    <div className={style.content}>
                        <h2 className={style.heading}>Episode</h2>
                        <p className={style.data_content}>View all episodes of the series.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
