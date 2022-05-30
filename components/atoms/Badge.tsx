import React from 'react'

type IBadge = {
    count: string | number
}

const Badge: React.FC<IBadge> = ({ count }: IBadge) => {
    return (
        <React.Fragment>
            <h1 className="font-bold text-white py-1 ml-1 px-2 text-[12px] rounded-[8px] bg-gray-900">{count}</h1>
        </React.Fragment>
    )
}

export default Badge