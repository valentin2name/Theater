import PremiereCard from '../PremiereCard/PremiereCard';
import s from './Premiere.module.scss'
import PremiereList from './PremiereList';



const Premiere = () => {

   

    return (
        <div className={s.wrapp}>
            <h1 className={s.main}>Ближайшие премьеры</h1>
            <div className={s.afisha}>
                {PremiereList.map(item => {
                    return <PremiereCard item={item}/>
                })}
            </div>
        </div>
    );
}
 
export default Premiere;