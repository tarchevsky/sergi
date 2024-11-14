'use client'
import cn from 'clsx'
import styles from './Header.module.scss'

import Link from 'next/link'

const Header = () => {

	return (
		<header className='cont flex flex-col gap-1 pb-4'>
			<Link href='/' className={cn(styles.logo)}>MARIE RAKHMANI</Link>
			<div className={cn(styles.subtitle)}>Бижутерия ручной работы из поделочного камня</div>
		</header>
	)
}

export default Header