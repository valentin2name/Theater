import axios from 'axios'
import { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import s from './AboutTheater.module.scss'

const AboutTheater = () => {

    const [found, setFound] = useState([])

    const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/comments'
        const data = await axios.get(url);
        setFound(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={s.wrapp}>
            <h1 className={s.title}>Спасибо за ваш отзыв!</h1>
            {found.length ? found.map((item: any) => {
                return <ReviewCard item={item}/>
            }) : <p className={s.total}>Список отзывов пуст</p>}
        </div>
    );
}
 
export default AboutTheater;