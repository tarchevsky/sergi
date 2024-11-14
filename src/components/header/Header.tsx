'use client'
import cn from 'clsx'
import styles from './Header.module.scss'

import Link from 'next/link'
import Htag from "@/components/Htag/Htag";

const Header = () => {

	return (
		<header className='cont flex flex-col gap-1 pb-4'>
			<Htag tag='h1' className={cn(styles.logo, 'uppercase')}>Marie Rakhmani</Htag>
			<div className={cn(styles.subtitle)}>Бижутерия ручной работы из поделочного камня</div>
		</header>
	)
}

export default Header