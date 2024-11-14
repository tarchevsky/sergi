import Image from "next/image";
import FadeIn from "@/components/fadeIn/FadeIn";

const Hero = () => {
    return (
        <FadeIn className='cont-alt grid grid-cols-[1.2fr_1fr_1.2fr] gap-[2vw] bg-[#F4F4F4] pt-[6vh] pb-[8vh]'>
            <Image src='/hero/1.png' alt='Картинка hero блок с презентацией украшения 1' width={200} height={220} className='w-full h-full object-cover' />
            <Image src='/hero/2.png' alt='Картинка hero блок с презентацией украшения 1' width={300} height={220} className='w-full h-full object-cover' />
            <Image src='/hero/3.png' alt='Картинка hero блок с презентацией украшения 1' width={200} height={220} className='w-full h-full object-cover' />
        </FadeIn>
    )
}

export default Hero