import s from './Afisha.module.scss'
import { NavLink } from 'react-router-dom';
import bg from './../../assets/afishaBg.png'

const Afisha = () => {
    return (
        <div className={s.afisha}>
            <div>
            <img className={s.phon} src={bg} alt="" />
            </div>

            <div className={s.for__you}>
                <div className={s.complex}>
                    <div className={s.films}>
                        <h1>Иваново детство</h1>
                        <p>драма в одном действии</p>
                    </div>

                    <div className={s.dop}>
                        <div className={s.info}>
                            <h4>Длительность</h4>
                            <h2>1 ч. 40 мин.</h2>
                        </div>

                        <div className={s.info}>
                            <h4>Ограничение</h4>
                            <h2>14+</h2>
                        </div>
                    </div>
                </div>

                <div className={s.rap}>
                <NavLink to='/ticket' className={s.more}>Купить билет</NavLink>
                </div>
            </div>

            <div className={s.about}>
                <h1 className={s.title}>О спектакле</h1>
                <p className={s.desc}>Премьера состоялась 15 апреля 2021 года. <br />По киносценариям фильмов "Иваново детство" и "Зеркало". <br />Иван — это ребёнок, снедаемый страстью взрослого. Он потерял детство на войне и погиб, потому что жил как взрослый. Картина должна строиться на характере мальчика, но должны быть эпизоды, где выясняются его детские черты. В рассказе найдена точная деталь — игра в войну — что может быть страшнее! Здесь все очень глубоко, страшно и правдиво, здесь нет места приключенческой романтике…<br />Иван видит сны. Ему снится та жизнь, которой он лишён, обыкновенное детство. В снах должно быть обыкновенное счастливое детство. В жизни — та страшная нелепость, которая происходит, когда ребёнок вынужден воевать.</p>
            </div>
        </div>
    );
}
 
export default Afisha;