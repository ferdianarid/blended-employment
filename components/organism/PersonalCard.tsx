import React from 'react'
import Image from 'next/image'
import ListPoint from 'components/moleculs/ListPoint'

interface IPersonal {
    name: string
    data: string[]
    image: string
    activities: string
    person: string
    highlight: boolean
}

const PersonalCard: React.FC<IPersonal> = ({ name, data, image, activities, person, highlight }: IPersonal) => {
    return (
        <React.Fragment>
            <div className="flex items-center p-1 relative">
                {/* Card Header */}
                <Image src={image} width={48} height={48} alt={'faces1'} className="border-2 border-white" />
                <div className="w-full flex flex-col">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="text-xs font-bold ml-2 text-[#19439E] pr-6 pb-1">{name}</h3>
                    </div>
                    {/* Icons */}
                    <div className="flex items-center gap-x-2 ml-2">
                        <div>
                            <Image src="/homepage/icons/call.png" width={16} height={16} alt={'phone'} />
                            <Image src="/homepage/icons/arrow-down.png" width={16} height={16} alt={'arrow'} />
                        </div>
                        <Image src="/homepage/icons/document-text.png" width={16} height={16} alt={'document'} />
                        <Image src="/homepage/icons/linkedin.png" width={16} height={16} alt={'linkedin'} />
                    </div>
                </div>
            </div>
            {/* Points */}
            <div className="w-full mt-4 pl-2">
                {data.map((item) => {
                    return (
                        <ListPoint title={item} />
                    )
                })}
                {
                    highlight ? (
                        <div className="flex items-center my-2">
                            <Image src='/homepage/icons/dots.png' width={14} height={14} alt='highlight' />
                            <p className="font-semibold text-[12px] pl-2 text-[#0D1F42]">Add Highlight</p>
                        </div>
                    ) : ""
                }

                <hr className='border-[#BABBBF] border my-4' />
                <h2 className="w-fit pb-2 text-[#0D1F42] tracking-tight font-semibold text-[12px]">{activities}<span className="font-light text-[#76767E]">{person}</span></h2>
            </div>
        </React.Fragment>
    )
}

export default PersonalCard