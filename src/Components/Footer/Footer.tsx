import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.section}>
            <div className={s.wrapp}>
                <div className={s.information}>
                    <p>Правила поведения</p>
                    <p>Панорама зала</p>
                    <p>История театра</p>
                    <p>Коллектив театра</p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;