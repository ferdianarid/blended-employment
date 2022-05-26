import React from 'react'
import Image from 'next/image'

interface IPerson {
    name: string
    roles: string
    img: string
}

const CardPerson: React.FC<IPerson> = ({ name, roles, img }: IPerson) => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[352px] rounded-md bg-white flex items-center border border-[#ECECEC] py-6 px-4">
                <Image src={img} width={64} height={64} alt='faces' className='border-2 border-white' />
                <div className="ml-4">
                    <div className="flex items-center">
                        <h3 className="font-bold mr-4 text-md text-[#19439E]">{name}</h3>
                        <Image src='/homepage/icons/linkedin.png' width={20} height={20} alt='linkedin' />
                    </div>
                    <h3 className="font-light text-sm text-[#76767E] text-opacity-60">{roles}</h3>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardPerson