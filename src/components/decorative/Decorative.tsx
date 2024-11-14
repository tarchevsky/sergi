import Image from 'next/image'
import FadeIn from "@/components/fadeIn/FadeIn";

const Decorative = () => {
    return (
        <FadeIn className='grid grid-cols-[30vw_auto] items-center gap-[2vw] mr-[2vw]'>
            <Image src='/me-1.png' alt='Картинка с Марией' width={300} height={1200} className='xl:min-h-[90vh] w-full object-cover' />
            <div className='flex justify-center bg-[#60514A] py-[2vh] xl:py-[13vh]'>
                <div className='flex gap-6 justify-center bg-white py-[2vh] sm:py-[2vh] md:py-[6vh] px-[2vw]'>
                    <Image src='/decorative/1.png' alt='Декоративная картинка с мешочком и запиской' width={200} height={600} className='max-h-[13vh] sm:max-h-[60vh] max-w-[16vw] sm:min-w-[20vw] object-cover' />
                    <Image src='/decorative/2.png' alt='Декоративная картинка с упаковкой' width={200} height={600} className='max-h-[13vh] sm:max-h-[60vh] max-w-[16vw] sm:min-w-[20vw] object-cover' />
                </div>
            </div>
        </FadeIn>
    )
}

export default Decorative;