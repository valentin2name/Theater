import s from './BuyTicket.module.scss'
import bg from './../../assets/afishaBg.png'
import { useState } from 'react';

const BuyTicket = () => {


    const [talon, setTalon] = useState(0)
    const [price, setPrice] = useState(0)

    const minusVal = () => {
        setTalon(talon - 1)
        setPrice(price -650)
    }

    const plusVal = () => {
        setTalon(talon + 1)
        setPrice(price +650)
    }

    return (
        <div className={s.ticket}>
            <div>
            <img className={s.phon} src={bg} alt="" />
            </div>

            <div className={s.pay}>
                <h1 className={s.title}>Покупка билета</h1>
                <div className={s.rap}>
                <p className={s.price}>650 рублей</p>
                </div>
            </div>

            <div className={s.choise}>
                <div className={s.place}>
                    <h2>Билеты</h2>
                    <div className={s.total}>
                        <p>Билет: {talon}</p>
                        <p>Цена: {price}</p>
                    </div>
                    <div className={s.complex}>
                    <button onClick={() => minusVal()} className={s.minus}>убрать</button>
                    <button onClick={() => plusVal()} className={s.plus}>добавить</button>
                    </div>
                </div>

                <div className={s.block}>
                    <h2>Выберите дату показа премьеры</h2>
                    <div className={s.dates}>
                        <p>24 Мая, 18:30</p>
                        <p>22 Июня, 18:30</p>
                    </div>
                    <div className={s.desc}>
                    Внимание! Выбранные вами билеты должны быть<br /> оплачены банковской картой в течение 30 минут.<br /> Обязательно распечатайте приобретенный вами<br /> электронный билет. Его необходимо предъявить при<br /> входе в театр. 
                    </div>
                    <div className={s.btn}>
                        <button className={s.done}>Оплатить билет</button>
                        <button className={s.cancel}>Отменить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BuyTicket;