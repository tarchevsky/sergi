import FadeIn from "@/components/fadeIn/FadeIn";
import Image from 'next/image'

const Dev = () => {
    return (
        <FadeIn>
            <Image src='/shoes.png' alt='Картинка с Марией' width={300} height={1200} className='min-h-[80vh] w-full object-cover' />
        </FadeIn>
    )
}

export default Dev