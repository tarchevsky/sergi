import Htag from "@/components/Htag/Htag";
import cn from "clsx";
import styles from "@/components/dev/Dev.module.scss";
import Image from 'next/image'
import {PiTelegramLogoThin, PiWhatsappLogoThin} from "react-icons/pi";
import Link from "next/link";

const Order = () => {
    return (
        <div className='cont md:cont-left mb-14 flex flex-col md:grid md:grid-cols-[35vw_auto] xl:grid-cols-[26.3vw_auto] gap-3'>
            <div>
                <Htag tag='h2' className={cn(styles.heading)}>
                    РАЗМЕР
                    <br/>
                    И
                    СОСТАВ
                </Htag>
                <div className={'prose'}>
                    <p>
                        Практически все изделия длинные,
                        трех-четырехсекционные, размер 6- 7см.
                    </p>
                    <p>
                        Я не верю в силу камня, но я верю в силу любви. Если какое-то изделие вам понравилось, напишите,
                        мне, и я расскажу о его составляющих.
                    </p>
                </div>
                <Htag tag='h2' className={cn(styles.heading)}>
                    СДЕЛАТЬ
                    <br/>
                    ЗАКАЗ
                </Htag>
                <div className={'prose'}>
                    <p>
                        Для заказа свяжитесь со мной в социальных сетях.
                    </p>
                </div>
                <div className='flex gap-3 mt-8'>
                    <Link href='https://t.me/maria_psy' aria-label='Ссылка на связь в телеграм'>
                        <PiTelegramLogoThin size={30} />
                    </Link>
                    <Link href='https://wa.me/+79160921215' aria-label='Ссылка на связь в вотсапп'>
                        <PiWhatsappLogoThin size={30} />
                    </Link>
                </div>
            </div>
            <Image
                src='/me-4.png'
                alt='Портрет Марии с серьгами'
                width={300}
                height={1200}
                className='min-h-[45vh] mt-8 md:mt-auto w-full md:min-w-[36vw] object-cover'
            />
        </div>
    )
}

export default Order