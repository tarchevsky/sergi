import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='footer'>
			<Image src='/me-3.png' alt='' width={1920} height={1000} className='h-min-[400px] w-full' />
		</footer>
	)
}

export default Footer;