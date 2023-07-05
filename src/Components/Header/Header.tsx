import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <h1 className={s.title}>Казанский театр<br /> юного зрителя</h1>
            </div>
        </div>
    );
}
 
export default Header;