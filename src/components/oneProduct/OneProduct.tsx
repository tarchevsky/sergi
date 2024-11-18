import Image from 'next/image'
import FadeIn from "@/components/fadeIn/FadeIn";

const OneProduct = () => {
    return (
        <FadeIn className='grid grid-cols-[1fr_2fr_1fr] md:grid-cols-3 gap-[1vh] sm:gap-[4vh]'>
            <Image src='/shoes.png' alt='Картинка с Марией' width={300} height={1200} className='max-h-[20vh] md:min-h-[60vh] xl:min-h-[70vh] w-full object-cover' />
            <div>
                <Image src='/cards/9.png' alt='Картинка с Марией' width={300} height={1200}
                       className='max-h-[20vh] md:min-h-[60vh] xl:min-h-[70vh] w-full object-cover'/>
                <div className='p-6 border-[1px] border-[#9C9797] text-center'>
                    <div>Небесно-голубые васильки на пшенчном поле. Под крылом воробья</div>
                    <p>Под заказ</p>
                </div>
            </div>
            <Image src='/me-2.png' alt='Картинка с Марией' width={300} height={1200}
                   className='max-h-[20vh] md:min-h-[60vh] xl:min-h-[70vh] w-full object-cover'/>
        </FadeIn>
    )
}
export default OneProduct