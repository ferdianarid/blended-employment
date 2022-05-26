import React from 'react'
import Image from 'next/image'
import ListPoint from 'components/moleculs/ListPoint'

interface IInactive {
    name: string
    data: string[]
    image: string
}
const InactiveCandidate: React.FC<IInactive> = ({ name, data, image }: IInactive) => {
    return (
        <React.Fragment>
            <div className="flex items-center relative">
                {/* Glass */}
                <div className="w-20 absolute z-10 -right-14 shadow-xl shadow-slate-100 -top-20 flex justify-center items-center h-20 rounded-full bg-white">
                    <Image src='/homepage/icons/glass.png' width={48} height={48} alt='flags' />
                </div>
                {/* Card Header */}
                <Image src={image} width={48} height={48} alt={'faces1'} className="border-2 border-white" />
                <div className="w-full flex flex-col">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="text-md font-bold ml-2 text-[#19439E]">{name}</h3>
                        <Image src='/homepage/icons/kebab.png' width={24} height={24} alt='kebab' />
                    </div>
                    {/* Icons */}
                    <div className="flex items-center gap-x-4 ml-2">
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
            <div className="w-full mt-4">
                {data.map((item) => {
                    return (
                        <ListPoint title={item} />
                    )
                })}
                <div className="flex items-center my-2">
                    <Image src='/homepage/icons/dots.png' width={14} height={14} alt='highlight' />
                    <p className="font-semibold text-[12px] pl-2 text-[#0D1F42]">Add Highlight</p>
                </div>

                <hr className='border-[#BABBBF] border my-4' />
                <h2 className="w-fit text-[#0D1F42] tracking-tight font-semibold text-[12px]">Outgoing phone call <span className="font-light text-[#76767E]">by Declan 4h ago</span></h2>
            </div>
        </React.Fragment>
    )
}

export default InactiveCandidate