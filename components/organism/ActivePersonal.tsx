import React from 'react'
import Image from 'next/image'
import ListPoint from 'components/moleculs/ListPoint'
import { Leslie as data } from '@utils/data'

interface IActivePersonal {
    name: string
    image: string
}
const ActivePersonal: React.FC<IActivePersonal> = ({ name, image }: IActivePersonal) => {
    return (
        <React.Fragment>
            <div className="card max-w-[352px] rounded-md bg-white border border-[#ECECEC] py-3 px-4">
                <div className="flex items-center">
                    {/* Card Header */}
                    <Image src={image} width={48} height={48} alt={'faces1'} className="border-2 border-white" />
                    <div className="w-full flex flex-col">
                        <div className="w-full flex items-center justify-between">
                            <h3 className="text-xs font-bold ml-2 text-[#19439E]">{name}</h3>
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
                <div className="w-full mt-4 relative">
                    {data.map((item: any) => {
                        return (
                            <ListPoint title={item.title} />
                        )
                    })}
                    <div className="flex items-center my-2">
                        <Image src='/homepage/icons/dots.png' width={14} height={14} alt='highlight' />
                        <p className="font-semibold text-[12px] pl-2 text-[#0D1F42]">Add Highlight</p>
                    </div>

                    <hr className='border-[#BABBBF] border my-4' />

                    <h2 className="w-fit tracking-tight font-bold text-[12px] py-2 px-4 rounded-full bg-[#FEF4DF]">Active Candidate</h2>
                    <h2 className="w-fit text-[#0C0A1A] tracking-tight font-semibold text-[12px] py-2">Notice Period : 1 Weeks</h2>
                    <h2 className="w-fit text-[#0D1F42] tracking-tight font-semibold text-[12px]">See More</h2>
                    <hr className='border-[#BABBBF] border my-4' />
                    <h2 className="w-fit text-[#0D1F42] tracking-tight font-semibold text-[12px]">Outgoing phone call <span className="font-light text-[#76767E]">by Declan 4h ago</span></h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ActivePersonal