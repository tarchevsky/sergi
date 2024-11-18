import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const CardsFullWidth = () => {
	return (
		<FadeIn className='grid grid-cols-2 my-[100px] gap-[2vw] sm:gap-[4vw] text-center'>
			<div>
				<Image
					src='/cards/10.png'
					alt='Товар 9'
					width={500}
					height={400}
					className='max-h-[14vh] sm:max-h-[20vh] md:min-h-[50vh] xl:max-h-[60vh] w-full object-cover'
				/>
				<div className='p-6 border-[1px] border-[#9C9797]'>
					<div>Музыка лесных фей</div>
					<p>Под заказ</p>
				</div>
			</div>
			<div>
				<Image
					src='/cards/11.png'
					alt='Товар 10'
					width={500}
					height={400}
					className='max-h-[14vh] sm:max-h-[20vh] md:min-h-[50vh] xl:max-h-[60vh] w-full object-cover'
				/>
				<div className='p-6 border-[1px] border-[#9C9797]'>
					<div>Конница королевы</div>
					<p>Под заказ</p>
				</div>
			</div>
		</FadeIn>
	)
}

export default CardsFullWidth
