import s from './NewsCard.module.scss'

const NewsCard = ({item}) => {
    return (
        <div className={s.block}>
            <img className={s.picture} src={item.src} alt="" />
                <div className={s.info}>
                <h2 className={s.data}>{item.data}</h2>
                <p className={s.time}>{item.time}</p>
                </div>
            <p className={s.desc}>{item.desc}</p>
        </div>
    );
}
 
export default NewsCard;