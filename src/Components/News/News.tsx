import { NavLink } from 'react-router-dom';
import s from './News.module.scss'
import {NewsList, NewsListTwo} from './NewsList'
import NewsCard from '../NewsCard/NewsCard';

const News = () => {
    return (
        <div className={s.section}>
            <div className={s.wrapp}>
                <h1 className={s.title}>Новости театра</h1>
                <NavLink to='/news' className={s.show}>Показать все</NavLink>
            </div>

            <div className={s.news}>
                {NewsList.map(item => {
                    return <NewsCard item={item}/>
                })}
            </div>

            <div className={s.news}>
                {NewsListTwo.map(item => {
                    return <NewsCard item={item}/>
                })}
            </div>
        </div>
    );
}
 
export default News;