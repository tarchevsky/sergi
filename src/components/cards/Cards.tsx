import Image from 'next/image'
import FadeIn from "@/components/fadeIn/FadeIn";

interface CardsProps {
    src: string;
    alt: string;
    name: string;
    status: string;
}
interface CardsMapProps {
    cardsMap: CardsProps[];
}

const Cards = ({cardsMap}: CardsMapProps) => {
    return (
        <FadeIn className='cont grid grid-cols-2 gap-10 my-[100px]'>

            {cardsMap.map((card, index) => (
                <div key={index}>
                    <Image src={card.src} alt={card.alt} width={300} height={300}
                           className='object-cover w-full md:min-h-[30vh] xl:min-h-[70vh]'/>
                    <div className='p-6 border-2 border-[#9C9797] text-center'>
                        <div>{card.name}</div>
                        <p>{card.status}</p>
                    </div>
                </div>
            ))}
        </FadeIn>
    )
}

export default Cards;