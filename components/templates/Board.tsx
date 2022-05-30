import React, { ReactNode } from 'react'
import Image from 'next/image'
import ContentLayouts from '@layouts/ContentLayouts'
import Badge from '@components/atoms/Badge'
import SectionDesc from '@components/moleculs/SectionDesc'

interface IBoardHightlight {
    titleDesc: string
    subDesc: string
    hightlight: boolean
    children: ReactNode
}

const Board: React.FC<IBoardHightlight> = ({ children, hightlight = false, titleDesc, subDesc }) => {
    return (
        <React.Fragment>
            <ContentLayouts>
                <div className="w-full h-fit rounded-[13px] bg-[#F7F8FB] max-w-[759px] py-5">
                    <div className="flex items-center justify-between px-5">
                        <div className="flex items-center relative">
                            <div className="w-[30px] h-[30px] bg-[#0C0A1A] flex justify-center items-center rounded-full text-white font-bold text-md">F</div>
                            <h3 className="font-bold text-xl pl-3">Sales Director</h3>
                            {hightlight ? (
                                <div className="flex items-center absolute -right-6 -top-5">
                                    <h1 className="text-lg font-semibold">Interview</h1><Badge count={2} />
                                </div>
                            ) : ""
                            }
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="flex items-center mr-2">
                                <div className="">
                                    <Image src='/homepage/faces/faces8.png' height={36} width={36} alt='faces' />
                                </div>
                                <div className='-ml-3'>
                                    <Image src='/homepage/faces/faces9.png' height={36} width={36} alt='faces' />
                                </div>
                            </div>
                            <button className="py-2 px-4 rounded-lg font-bold text-sm text-white bg-blue-600">Share</button>
                        </div>
                    </div>
                    <hr className='border-[#BABBBF] mt-5' />
                    <div className="flex items-center px-5 my-[10px]">
                        <div className="w-[80px] gap-x-1 flex justify-between rounded-md border border-[#BABBBF] p-[2px]">
                            <Image src='/homepage/icons/row-vertical.png' width={25} height={20} alt='vertical' />
                            <Image src='/homepage/icons/block.png' width={35} height={35} alt='vertical' />
                        </div>
                        <div className="py-2 w-full text-[#76767E] font-light rounded-[10px] text-sm px-6 ml-2 border border-[#BABBBF] flex items-center gap-x-3">
                            <Image src='/homepage/icons/search.png' height={18} width={18} alt='search' />
                            Search Candidate
                        </div>
                        <div className="p-2 ml-2 rounded-lg border border-[#BABBBF] flex items-center justify-center">
                            <Image src='/homepage/icons/kebab.png' height={24} width={24} alt='kebab' />
                        </div>
                        <button className="py-2 flex items-center px-4 ml-2 rounded-lg font-normal text-sm text-white bg-blue-600">
                            <Image src='/homepage/icons/plus.png' width={48} height={48} alt='search' />
                            Add</button>
                        <hr className='border-[#BABBBF]' />
                    </div>
                    {children}
                </div>
                <SectionDesc title={titleDesc} description={subDesc} />
            </ContentLayouts>
        </React.Fragment>
    )
}

export default Board