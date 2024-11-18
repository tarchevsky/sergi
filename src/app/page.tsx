import type { Metadata } from 'next'
import Hero from '@/components/hero/Hero'
import Cards from '@/components/cards/Cards'
import Decorative from '@/components/decorative/Decorative'
import { cardsOne } from '@/data/cardsOne'
import { cardsTwo } from '@/data/cardsTwo'
import CardsFullWidth from '@/components/cardsFullWidth/CardsFullWidth'
import { cardsThree } from '@/data/cardsThree'
import Dev from '@/components/dev/Dev'
import OneProduct from '@/components/oneProduct/OneProduct'
import Order from "@/components/order/Order";

export const metadata: Metadata = {
	title: 'Главная'
}

export default function Home() {
	return (
		<>
			<Hero />
			<div className="text-center my-[100px] text-2xl">Уточняйте наличие</div>
			<Cards cardsMap={cardsOne} />
			<Decorative />
			<Cards cardsMap={cardsTwo} />
			<OneProduct />
			<CardsFullWidth />
			<Cards cardsMap={cardsThree} />
			<Dev />
			<Order />
		</>
	)
}
