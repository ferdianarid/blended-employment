import React from 'react'
import Image from 'next/image'

type IList = {
    title: string
}

const ListPoint = ({ title }: IList) => {
    return (
        <React.Fragment>
            <div className="flex items-center my-2">
                <Image src='/homepage/icons/dots.png' width={14} height={14} alt={title} />
                <p className="font-light text-[12px] pl-2 text-[#76767E]">{title}</p>
            </div>
        </React.Fragment>
    )
}

export default ListPoint