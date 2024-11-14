import FadeIn from '@/components/fadeIn/FadeIn'
import Image from 'next/image'
import cn from 'clsx'
import styles from '@/components/Dev/Dev.module.scss'
import Htag from '@/components/Htag/Htag'

const Dev = () => {
	return (
		<FadeIn className='grid gap-y-[2vh] mb-14'>
			<div className='grid grid-cols-[auto_auto_auto_20.5vw] gap-[2vw]'>
				<Image
					src='/dev/1.png'
					alt='Картинка с инструментами'
					width={300}
					height={1200}
					className='min-h-[35vh] h-full w-full object-cover'
				/>
				<Htag tag='h2' className={cn(styles.heading, 'px-[2vw]')}>
					ПРОЦЕСС
					<br />
					СБОРКИ
				</Htag>
				<Image
					src='/dev/2.png'
					alt='Картинка с катушкой, серьгами'
					width={300}
					height={1200}
					className='min-h-[35vh] h-full w-full object-cover'
				/>
				<Image
					src='/dev/3.png'
					alt='Картинка с катушкой, серьгами'
					width={300}
					height={1200}
					className='min-h-[35vh] h-full w-full object-cover'
				/>
			</div>
			<div className='cont-left grid grid-cols-[64.5vw_auto]'>
				<div className={'prose pr-3 mt-14'}>
					<p>
						Добро пожаловать в мир уникальных украшений, где каждое изделие
						рассказывает свою историю.
					</p>
					<p>
						Каждые серьги, представленные здесь, - это не просто украшения, а
						результат вдохновения и труда. Некоторые из них уже нашли своих
						хозяек, но их красота и уникальность останутся в нашей галерее.
						Пусть эти работы вдохновят вас на уникальное украшение, созданное
						спецально для вас.
					</p>
					<p>
						Я создаю серьги-бижутерию из натуральных камней, вкладывая в каждую
						частичку души и мастерства. Если Вам понравились мои работы, и
						привлекает идея иметь что-то особенное, созданное для вас, я буду
						рада помочь воплотить вашу мечту в реальность.
					</p>
					<p>
						Свяжитесь со мной, и мы вместе создадим неповтормую историю,
						отражающую вашу индивидуальность и стиль. Пусть ваше украшение
						найдет Вас.
					</p>
				</div>
				<Image
					src='/dev/4.png'
					alt='Картинка с катушкой, серьгами'
					width={300}
					height={1200}
					className='min-h-[35vh] h-full w-full object-cover'
				/>
			</div>
		</FadeIn>
	)
}

export default Dev
