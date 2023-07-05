import s from './AboutUs.module.scss'

const AboutUs = () => {
    return (
        <div className={s.wrapp}>
            <div className={s.for__you}>
                <div className={s.info}>
                    <h4>Дата основания</h4>
                    <h1>1932 год</h1>
                </div>

                <div className={s.info}>
                    <h4>2020-2021 год</h4>
                    <h1>34 спекталя</h1>
                </div>

                <div className={s.info}>
                    <h4>Абсолютно для всех</h4>
                    <h1>0+</h1>
                </div>
            </div>

            <div>
                <p className={s.more}>Узнать подробнее</p>
            </div>
        </div>
    );
}
 
export default AboutUs;