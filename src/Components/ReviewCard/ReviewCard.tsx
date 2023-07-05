import s from './ReviewCard.module.scss'

const ReviewCard = ({item}: any) => {
    return (
        <div className={s.wrapp}>
            <div className={s.card}>
                <p>email: {item.email}</p>
                <p>review: {item.body}</p>
            </div>
        </div>
    );
}
 
export default ReviewCard;