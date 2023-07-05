import s from './NewsTheater.module.scss'
import newsLogoOne from './../../assets/theaterOne.jpg'
import newsLogoTwo from './../../assets/theaterTwo.png'
import newsLogoThree from './../../assets/theaterThree.png'
import newsLogoFour from './../../assets/theaterFour.png'

const NewsTheater = () => {
    return (
        <div className={s.section}>
            <div className={s.news}>
                <h1>Новости театра</h1>
                <div className={s.up}>
                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoOne} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>24 мая - благотворительный показ спектакля<br /> «Иваново детство»</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации<br /> билетов будут семьям погибших в казанской гимназии №175</p>
                    </div>

                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoTwo} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>"Маленький принц" с сурдопереводом и<br /> тифлокомментированием</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>29 мая в 18:00 пройдет очередной показ в рамках проекта "Театр без границ" Казанского ТЮЗа и фонда<br /> "День добрых дел". Тифлокомментированием и сурдопереводом будет оснащен "Маленький принц" -<br /> трогательная и мудрая история о дружбе и взрослении.</p>
                    </div>
                </div>


                <div className={s.down}>
                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoThree} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>Вячеслав Казанцев - народный артист РТ!</h2>
                            <p className={s.time}>27.04.21</p>
                        </div>
                        <p className={s.desc}>Президент РТ Рустам Минниханов присвоил ему звание в Казанском Кремле<br />Сегодня Президент Республики Татарстан Рустам Минниханов вручил государственные награды<br /> Российской Федерации и Республики Татарстан.</p>
                    </div>

                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoFour} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>Радион Букаев представит свой первый спектакль<br /> в Казанском ТЮЗе</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>Им станет постановка о 1970-1980 годах театра, приуроченная к 90-летнему юбилею ТЮЗа<br />26 марта в 18:30 в Казанском ТЮЗе пройдет премьера спектакля-пасьянса "Первый тайм".<br /> Его постановщиком выступил Радион Букаев, который с 2020 года является главным режиссером театра. </p>
                    </div>
                </div>



                <div className={s.up}>
                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoOne} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>24 мая - благотворительный показ спектакля<br /> «Иваново детство»</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации<br /> билетов будут семьям погибших в казанской гимназии №175</p>
                    </div>

                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoTwo} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>"Маленький принц" с сурдопереводом и<br /> тифлокомментированием</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>29 мая в 18:00 пройдет очередной показ в рамках проекта "Театр без границ" Казанского ТЮЗа и фонда<br /> "День добрых дел". Тифлокомментированием и сурдопереводом будет оснащен "Маленький принц" -<br /> трогательная и мудрая история о дружбе и взрослении.</p>
                    </div>
                </div>


                <div className={s.down}>
                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoThree} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>Вячеслав Казанцев - народный артист РТ!</h2>
                            <p className={s.time}>27.04.21</p>
                        </div>
                        <p className={s.desc}>Президент РТ Рустам Минниханов присвоил ему звание в Казанском Кремле<br />Сегодня Президент Республики Татарстан Рустам Минниханов вручил государственные награды<br /> Российской Федерации и Республики Татарстан.</p>
                    </div>

                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoFour} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>Радион Букаев представит свой первый спектакль<br /> в Казанском ТЮЗе</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>Им станет постановка о 1970-1980 годах театра, приуроченная к 90-летнему юбилею ТЮЗа<br />26 марта в 18:30 в Казанском ТЮЗе пройдет премьера спектакля-пасьянса "Первый тайм".<br /> Его постановщиком выступил Радион Букаев, который с 2020 года является главным режиссером театра. </p>
                    </div>
                </div>


                <div className={s.up}>
                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoOne} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>24 мая - благотворительный показ спектакля<br /> «Иваново детство»</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>24 мая пройдет благотворительный показ спектакля “Иваново детство”. Все средства от реализации<br /> билетов будут семьям погибших в казанской гимназии №175</p>
                    </div>

                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoTwo} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>"Маленький принц" с сурдопереводом и<br /> тифлокомментированием</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>29 мая в 18:00 пройдет очередной показ в рамках проекта "Театр без границ" Казанского ТЮЗа и фонда<br /> "День добрых дел". Тифлокомментированием и сурдопереводом будет оснащен "Маленький принц" -<br /> трогательная и мудрая история о дружбе и взрослении.</p>
                    </div>
                </div>


                <div className={s.down}>
                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoThree} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>Вячеслав Казанцев - народный артист РТ!</h2>
                            <p className={s.time}>27.04.21</p>
                        </div>
                        <p className={s.desc}>Президент РТ Рустам Минниханов присвоил ему звание в Казанском Кремле<br />Сегодня Президент Республики Татарстан Рустам Минниханов вручил государственные награды<br /> Российской Федерации и Республики Татарстан.</p>
                    </div>

                    <div className={s.block}>
                        <img className={s.picture} src={newsLogoFour} alt="" />
                        <div className={s.info}>
                            <h2 className={s.data}>Радион Букаев представит свой первый спектакль<br /> в Казанском ТЮЗе</h2>
                            <p className={s.time}>12.05.21</p>
                        </div>
                        <p className={s.desc}>Им станет постановка о 1970-1980 годах театра, приуроченная к 90-летнему юбилею ТЮЗа<br />26 марта в 18:30 в Казанском ТЮЗе пройдет премьера спектакля-пасьянса "Первый тайм".<br /> Его постановщиком выступил Радион Букаев, который с 2020 года является главным режиссером театра. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewsTheater;