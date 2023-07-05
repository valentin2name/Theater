import s from './WrappMenu.module.scss'
import { NavLink } from 'react-router-dom';
import logo from './../../assets/logoTheater.png'

const WrappMenu = () => {

    const activeLink =  s.active;
    const normalLink = s.link;

    return (
        <div className={s.wrapp}>
            <img src={logo} alt="" />
            <ul className={s.menu}>
                <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Главная</NavLink>
                <NavLink to='/afisha' className={({isActive}) => isActive ? activeLink : normalLink}>Афиша</NavLink>
                <NavLink to='/news' className={({isActive}) => isActive ? activeLink : normalLink}>Новости</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? activeLink : normalLink}>О театре</NavLink>
            </ul>
            <div className={s.nav}>NAV</div>
        </div>
    );
}
 
export default WrappMenu;