import { NavLink} from 'react-router-dom'
import s from './PremiereCard.module.scss'

const PremiereCard = ({item}: any) => {
    return (
        <NavLink to='/afisha' className={s.block}>
            <div className={s.data}>
                <p className={s.time}>{item.time}</p>
                <p className={s.age}>{item.age}</p>
            </div>
            <img src={item.src} alt="" />
            <h2 className={s.title}>{item.title}</h2>
        </NavLink>
    );
}
 
export default PremiereCard;