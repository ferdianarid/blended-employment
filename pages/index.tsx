import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Meta from '@modules/Meta'
import PageLayouts from '@layouts/PageLayouts'
import styles from '@styles/Home.module.css'
import { personList as person, InactiveCandidate as inactive, Leslie } from '@utils/data'
import CardPerson from '@components/organism/CardPerson'
import ActiveCandidate from '@components/organism/ActiveCandidate'
import InactiveCandidate from '@components/organism/InactiveCandidate'
import PersonalCard from '@components/organism/PersonalCard'
import ActivePersonal from '@components/organism/ActivePersonal'
import Badge from '@components/atoms/Badge'
import SectionDesc from '@components/moleculs/SectionDesc'
import Sponsors from '@templates/Sponsors'
import ContentLayouts from '@layouts/ContentLayouts'
import HeaderLayouts from '@layouts/HeaderLayouts'
import Board from '@components/templates/Board'
import HiredCard from '@components/organism/HiredCard'
import FullBoard from '@components/templates/FullBoard'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <PageLayouts>
        {/* Metadata */}
        <Meta title='Homepage' description='First Sales Marketing' keywords='First Sales Marketing Recruitment' />
        <div className={styles.background}>
          {/* Header Section */}
          <HeaderLayouts>
            {/* Heading and Subheading*/}
            <h1 className="font-semibold text-md text-center text-[#76767E] pt-[240px]">120K professional talents</h1>
            <h1 className="max-w-[670px] my-6 mx-auto leading-[72px] text-center font-bold text-[#0C0A1A] text-[56px]">The #1 sales and marketing recruitment agency in Australia</h1>
            <p className="font-light text-xl text-[#76767E] text-center">We help you source, match and hire sales and marketing talent faster.</p>
            {/* Call to Action Button */}
            <div className="text-center">
              <button className="py-4 px-[65.5px] mt-[42px] rounded-md font-bold text-md bg-[#0C15A7] text-center text-white">Start Hiring</button>
            </div>
            <p className="font-light mt-[22px] text-xs text-[#76767E] text-center">🔥 First 50 sign-ups receive the first hire for free!</p>

            <div className="flex justify-between space-x-8 pr-[88px] relative">
              {/* Cards */}
              <div className="w-full mt-6 px-[72px] z-10 absolute -top-24">
                <ActiveCandidate />
              </div>

              <div className="w-full max-w-[352px] rounded-md py-5 px-4"></div>

              <div className="relative mt-[120px] left-4 flex flex-col space-y-3">
                {person.map((data) => {
                  return (
                    <CardPerson key={data.id} img={data.image} name={data.name} roles={data.roles} />
                  )
                })}
                <div className="w-9 h-9 -bottom-4 -left-4 shadow-xl shadow-slate-100 rounded-full bg-white flex justify-center items-center absolute">
                  <Image src='/homepage/icons/chart.png' width={20} height={20} alt='chart' />
                </div>

                <div className="w-[92px] h-[92px] absolute border-2 border-gray-800 rounded-full -right-8 -bottom-8">
                  <Image src='/homepage/faces/faces4.png' width={92} height={92} alt='faces' />
                  <h3 className="font-semibold text-white absolute -right-20 -top-7 rounded-full rounded-bl-none text-[12px] py-[6px] px-4 bg-[#037C69]">Recruiter</h3>
                </div>

              </div>

              <div className="-mt-[120px] max-w-[352px] w-full">
                <div className="w-full h-fit  rounded-md bg-white border border-[#ECECEC] py-5 px-4">
                  {inactive.map((user) => {
                    return (
                      <InactiveCandidate key={user.id} name={user.name} data={user.data} image={user.image} />
                    )
                  })}
                </div>
                <div className="w-full max-w-[352px] rounded-md bg-white flex items-center border border-[#ECECEC] py-4 px-4 mt-4 space-x-2">
                  <h1 className="font-bold text-2xl text-[#3377FF]">98%</h1>
                  <h1 className="font-semibold text-xl text-[#0C0A1A] pr-2">Match</h1>
                  <Image src='/homepage/icons/trumpet.png' width={24} height={24} alt='trump' />
                </div>
              </div>
            </div>
          </HeaderLayouts>
        </div>

        {/* Sponsor Section */}
        <div className={`w-full bg-white mx-auto h-[300px] px-[88px] relative ${styles.bgcontent}`}>
          <Sponsors />
          <div className="w-full px-16 pt-56">
            <h1 className="max-w-[1000px] text-center mx-auto text-white font-bold leading-[56px] text-[40px] tracking-wide">Connect Great Business with Great People
              <span className="text-[#3377FF]"> Because Without People a Business is Nothing. </span></h1>
            <h3 className="font-bold text-2xl pt-[162px] text-white">How Bring The Bright People Together</h3>
            <h3 className="font-light pt-4 max-w-[739px] text-md text-white">Blended Employment combines the global reach and data-driven matching to deliver you amazing design candidates in less time and a fraction of the cost.</h3>

            <div className="w-full mt-[88px] flex items-center justify-between">
              <div className="w-full rounded-[13px] bg-[#F7F8FB] max-w-[759px] py-5">
                <div className="flex items-center px-5">
                  <div className="w-[30px] h-[30px] bg-[#0C0A1A] flex justify-center items-center rounded-full text-white font-bold text-md">F</div>
                  <h3 className="font-bold text-xl pl-3">Sales Director</h3>
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
                </div>
                <hr className='border-[#BABBBF]' />
                <div className="grid grid-cols-3 gap-x-4 p-5 relative">
                  <div className="rounded-lg bg-[#ECECEC] h-fit pb-4 px-[14px] border border-[#BABBBF]">
                    <h3 className="font-semibold text-md py-4 uppercase">Sourced</h3>
                    <div className="relative">
                      <div className="bg-[#0C0A1A] -ml-1 w-full pt-1 rounded-md h-[224px]"></div>
                      <div className="bg-white p-1 rounded-md absolute -top-1 z-10">
                        <PersonalCard name='Peter Hooper' image='/homepage/faces/faces3.png' data={["Hot Doc", "Sales Director"]} activities={'Sourced'} person={' by Declan 4h ago'} highlight={true} />
                      </div>
                    </div>
                    <div className="bg-white p-1 mt-3 border-2 border-[#0C0A1A] rounded-md">
                      <PersonalCard name='Brad Browne' image='/homepage/faces/faces5.png' data={[]} activities={'Sourced'} person={' by Declan 4h ago'} highlight={false} />
                    </div>
                    <div className="w-[69px] h-[69px] absolute z-20 left-28 bottom-10 border-2 border-gray-800 rounded-full">
                      <h3 className="font-light text-[#0C0A1A] absolute -left-20 -top-7 rounded-full rounded-br-none text-[12px] py-[6px] px-4 bg-[#FFC403]">Recruiter</h3>
                      <Image src='/homepage/faces/faces7.png' width={69} height={69} alt='faces' />
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#ECECEC] pb-36 h-fit mt-14 px-[14px] border border-[#BABBBF]">
                    <h3 className="font-semibold text-md py-4 uppercase">In Progress</h3>
                    <div className="relative">
                      <div className="bg-[#0C0A1A] -ml-1 w-full pt-1 rounded-md h-[240px]"></div>
                      <div className="bg-white p-1 rounded-md absolute -top-1 z-10">
                        <PersonalCard name='David Haykal' image='/homepage/faces/faces6.png' data={["SpeedUp Solutions", "Manager • IT & Services"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#ECECEC] mt-28 h-fit pb-6 px-[14px] border border-[#BABBBF] relative">
                    <div className="w-[46px] h-[46px] absolute border-2 border-gray-800 rounded-full right-16 -top-20">
                      <Image src='/homepage/faces/faces4.png' width={46} height={46} alt='faces' />
                      <h3 className="font-semibold text-[#0C0A1A] absolute -right-16 -top-7 rounded-full rounded-bl-none text-[12px] py-1 px-2 bg-[#03D0B0]">Recruiter</h3>
                    </div>
                    <h3 className="font-semibold text-md py-4 uppercase">Interview</h3>
                    <ActivePersonal name='Leslie Alexander' image='/homepage/faces/faces1.png' />
                  </div>
                </div>
              </div>
              <div className="max-w-[262px]">
                <h3 className="font-bold text-2xl text-white">Sourced</h3>
                <h3 className="font-light text-md pt-4 text-white">Manage all candidates who register into the system. With a cv, recruiters immediately see which candidate applied first, and the recruiter will contact the candidates.</h3>
              </div>
            </div>

            <Board hightlight={true} titleDesc={'In Progress'} subDesc={'recruiters immediately contact the candidates to check the data.'}>
              <div className="grid grid-cols-3 gap-x-4 pt-5 px-8 relative">
                <div className="rounded-lg bg-[#ECECEC]  pb-4 px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">In Progress</h3><Badge count={2} />
                  </div>
                  <div className="relative">
                    <div className="bg-white p-1 rounded-md absolute -top-1 z-10">
                      <PersonalCard name='David Haykal' image='/homepage/faces/faces6.png' data={["SpeedUp Solutions", "Manager • IT & Services"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                    </div>
                    <div className="bg-white p-1 rounded-md absolute top-56 z-10">
                      <PersonalCard name='Peter Hooper' image='/homepage/faces/faces3.png' data={["Hot Doc", "Sales Director"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                      <div className="w-[62px] h-[62px] absolute border-2 border-gray-800 rounded-full -right-11 -bottom-10">
                        <Image src='/homepage/faces/faces4.png' width={62} height={62} alt='faces' />
                        <h3 className="font-semibold text-white absolute -right-20 -top-7 rounded-full rounded-bl-none text-[12px] py-[6px] px-4 bg-[#037C69]">Recruiter</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#ECECEC] pb-32 h-fit px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Interview </h3><Badge count={1} />
                  </div>
                  <div className="relative">
                    {/* <div className="bg-[#0C0A1A] -ml-1 w-full pt-1 rounded-md h-[240px]"></div> */}
                    <ActivePersonal name='Leslie Alexander' image='/homepage/faces/faces1.png' />

                  </div>
                </div>

                <div className="rounded-lg bg-[#ECECEC] h-full pb-10 px-[14px] border border-[#BABBBF] relative">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Hired</h3><Badge count={0} />
                  </div>
                  <div className="border-2 border-gray-400 border-dashed p-1 rounded-md h-40"></div>
                </div>
              </div>
            </Board>

            <Board hightlight={false} titleDesc='Interview' subDesc='if the candidate has fulfilled the data. recruiters will directly conduct interviews with candidates'>
              <div className="grid grid-cols-3 gap-x-4 pt-5 px-8 relative">
                <div className="rounded-lg bg-[#ECECEC] relative pb-8 px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Interview</h3><Badge count={2} />
                  </div>
                  <div className="relative">
                    <ActivePersonal name='Leslie Alexander' image='/homepage/faces/faces1.png' />
                    <div className="w-[62px] h-[62px] z-40 absolute border-2 border-gray-800 rounded-full -right-11 top-32">
                      <Image src='/homepage/faces/faces4.png' width={62} height={62} alt='faces' />
                      <h3 className="font-semibold text-white absolute -right-20 -top-7 rounded-full rounded-bl-none text-[12px] py-[6px] px-4 bg-[#037C69]">Recruiter</h3>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ECECEC] h-full pb-10 px-[14px] border border-[#BABBBF] relative">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Hired</h3><Badge count={0} />
                  </div>
                  <div className="border-2 border-gray-400 border-dashed p-1 rounded-md h-40"></div>
                </div>
                <div className="rounded-lg bg-[#ECECEC] h-full pb-10 px-[14px] border border-[#BABBBF] relative">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Rejected</h3><Badge count={0} />
                  </div>
                </div>
              </div>
            </Board>

            <Board hightlight={false} titleDesc='Hired' subDesc='If you have passed the interview test, the candidate will be contacted by a recruiter'>
              <div className="grid grid-cols-3 gap-x-4 pt-3 px-8 relative">
                <div className="rounded-lg bg-[#ECECEC] relative pb-52 px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Interview</h3><Badge count={1} />
                  </div>
                  <div className="relative">
                    <div className="bg-white p-1 rounded-md absolute top-0 z-10">
                      <PersonalCard name='Leslie Alexander' image='/homepage/faces/faces1.png' data={["Hot Doc", "Sales Director"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ECECEC] relative pb-52 px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Hired</h3><Badge count={1} />
                  </div>
                  <div className="relative">
                    <div className="bg-white p-1 rounded-md absolute top-0 z-10">
                      <HiredCard name='Peter Hooper' image='/homepage/faces/faces3.png' data={["Hot Doc", "Sales Director"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                    </div>
                    <div className="w-[62px] h-[62px] z-40 absolute border-2 border-gray-800 rounded-full -right-11 top-48">
                      <Image src='/homepage/faces/faces4.png' width={62} height={62} alt='faces' />
                      <h3 className="font-semibold text-white absolute -right-20 -top-7 rounded-full rounded-bl-none text-[12px] py-[6px] px-4 bg-[#037C69]">Recruiter</h3>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ECECEC] relative pb-52 px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Rejected</h3><Badge count={0} />
                  </div>
                  <div className="relative">
                  </div>
                </div>
              </div>
            </Board>
            <div className="mt-12">
              <h1 className="font-bold text-white text-2xl">Why We’re Better at Bringing People Together</h1>
              <div className="grid grid-cols-3">
                <h1 className="font-normal text-white gap-x-2 text-md mt-6 flex items-center">
                  <Image src={'/homepage/icons/blue-check.png'} height={20} width={20} alt='items' />
                  We don’t discriminate at all</h1>
                <h1 className="font-normal text-white gap-x-2 text-md mt-6 flex items-center">
                  <Image src={'/homepage/icons/blue-check.png'} height={20} width={20} alt='items' />
                  We provide authentic solutions</h1>
                <h1 className="font-normal text-white gap-x-2 text-md mt-6 flex items-center">
                  <Image src={'/homepage/icons/blue-check.png'} height={20} width={20} alt='items' />
                  We follow a proven process</h1>
                <h1 className="font-normal text-white gap-x-2 text-md mt-3 flex items-center">
                  <Image src={'/homepage/icons/blue-check.png'} height={20} width={20} alt='items' />
                  Small in size, large in reach</h1>
                <h1 className="font-normal text-white gap-x-2 text-md mt-3 flex items-center">
                  <Image src={'/homepage/icons/blue-check.png'} height={20} width={20} alt='items' />
                  We have international reach</h1>
              </div>
            </div>
            <FullBoard hightlight={false} titleDesc='Hired' subDesc='If you have passed the interview test, the candidate will be contacted by a recruiter'>
              <div className="grid grid-cols-5 gap-x-4 pt-5 px-8 relative">
                <div className="rounded-lg bg-[#ECECEC] h-fit pb-36 px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Sourced</h3><Badge count={2} />
                  </div>
                  <div className="relative">
                    <div className="bg-white p-1 rounded-md absolute -top-1 z-10">
                      <PersonalCard name='Brad Browne' image='/homepage/faces/faces5.png' data={[]} activities={'Sourced'} person={' by Declan 4h ago'} highlight={false} />
                      {/* <PersonalCard name='David Haykal' image='/homepage/faces/faces6.png' data={["SpeedUp Solutions", "Manager • IT & Services"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} /> */}
                    </div>
                    <div className="bg-white p-1 rounded-md absolute top-56 z-10">
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#ECECEC] pb-64 h-full px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">In Progress </h3><Badge count={1} />
                  </div>
                  <div className="relative">
                    <div className="bg-white p-1 rounded-md absolute -top-1 z-10">
                      <PersonalCard name='David Haykal' image='/homepage/faces/faces6.png' data={["SpeedUp Solutions", "Manager • IT & Services"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#ECECEC] pb-64 h-full px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Interview </h3><Badge count={1} />
                  </div>
                  <div className="relative">
                    <div className="bg-white p-1 rounded-md absolute -top-1 z-10">
                      <PersonalCard name='David Haykal' image='/homepage/faces/faces6.png' data={["SpeedUp Solutions", "Manager • IT & Services"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                    </div>
                  </div>
                </div>


                <div className="rounded-lg bg-[#ECECEC] pb-64 h-full px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Hired </h3><Badge count={1} />
                  </div>
                  <div className="relative">
                    <div className="bg-white p-1 rounded-md absolute -top-1 z-10">
                      <PersonalCard name='David Haykal' image='/homepage/faces/faces6.png' data={["SpeedUp Solutions", "Manager • IT & Services"]} activities={'Outgoing phone call '} person={'by Declan 4h ago'} highlight={true} />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ECECEC] pb-64 h-full px-[14px] border border-[#BABBBF]">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-md py-4 uppercase flex items-center">Rejected </h3><Badge count={0} />
                  </div>
                  <div className="relative">

                  </div>
                </div>
              </div>
            </FullBoard>

            <div className="text-center mt-80">
              <h1 className="font-bold text-5xl text-white">Let’s Learn How it Works 👇</h1>
              <p className="text-lg font-normal mx-auto mt-6 text-white max-w-[736px]">Finding the right candidate shouldn’t be a process of trial and error. With Blended Employment’s industry expertise and thorough screening process, we will ensure you aren’t taking a gamble on your company’s biggest assets – your employees.</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F7F8FB] px-[88px] py-[120px]">
          <h1 className="font-bold text-5xl">Our Industry Specialisations</h1>
          <p className="text-lg font-normal text-[#32323D] max-w-[739px] pt-6">At Blended Employment, our recruiters are dedicated to bringing people together. As a company built on integrity, excellence and transparency</p>
          <div className="grid grid-cols-3 gap-x-6 mt-14">
            <div className="w-full rounded-2xl bg-white p-6 border border-[#0C0A1A] h-[400px] relative">
              <Image src='/homepage/content/discuss.png' width={409} height={256} alt='discuss' />
              <div className="absolute z-10 top-8 right-8">
                <Image src='/homepage/icons/camera.png' width={40} height={40} alt='camera' />
              </div>
              <div className="absolute bg-white w-[300px] rounded-lg z-10 left-8 bottom-40 p-2 flex items-center">
                <Image src='/homepage/faces/faces1.png' width={38} height={38} alt='faces' />
                <div className="flex flex-col ml-2">
                  <h1 className="font-bold text-sm">Emma Quinnel</h1>
                  <h1 className="font-normal text-sm text-[#051237]">Manager at Company Industry</h1>
                </div>
              </div>
              <Image src='/homepage/content/skeleton1.png' width={340} height={80} alt='skeleton' />
              <h1 className="font-bold text-2xl pt-5">Commercial & Industrial</h1>
            </div>
            <div className="w-full rounded-2xl p-6 border border-[#0C0A1A] bg-white h-[400px]">
              <h1 className="font-bold text-2xl pb-5">Technology & Digital</h1>
              <div className="flex space-x-2">
                <div className="w-full rounded-lg border border-gray-400 bg-white">
                  <Image src='/homepage/content/tech.png' width={300} height={200} alt='content' />
                  <div className="p-3">
                    <h3 className="font-bold text-sm">Tech People</h3>
                    <div className="py-2 mt-1 w-full bg-gray-200 rounded-md"></div>
                    <div className="py-2 mt-1 w-full bg-gray-200 rounded-md"></div>
                    <h3 className="font-bold text-sm mt-2">2421+ Members</h3>
                    <div className="py-2 mt-1 w-full bg-gray-200 rounded-md"></div>
                    <div className="py-2 mt-1 w-full bg-gray-200 rounded-md"></div>
                  </div>
                </div>
                <div className="w-full rounded-lg p-2 border border-gray-400 bg-white">
                  <h3 className="font-bold text-sm mt-2">Members</h3>
                  <div className="flex items-center mt-2">
                    <Image src='/homepage/faces/faces2.png' width={32} height={32} alt='faces' />
                    <div className="ml-2">
                      <h3 className="text-xs font-bold text-[#19439E]">David Haykal</h3>
                      <h3 className="text-xs font-normal text-gray-400">Tech Lead</h3>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Image src='/homepage/faces/faces3.png' width={32} height={32} alt='faces' />
                    <div className="ml-2">
                      <h3 className="text-xs font-bold text-[#19439E]">Joachim Low</h3>
                      <h3 className="text-xs font-normal text-gray-400 py-1 bg-gray-200"></h3>
                    </div>
                  </div>

                  <div className="flex items-center mt-2">
                    <Image src='/homepage/faces/faces4.png' width={32} height={32} alt='faces' />
                    <div className="ml-2">
                      <h3 className="text-xs font-bold text-[#19439E]">Malik</h3>
                      <h3 className="text-xs font-normal text-gray-400 py-1 bg-gray-200"></h3>
                    </div>
                  </div>

                  <div className="flex items-center mt-2">
                    <Image src='/homepage/faces/faces5.png' width={32} height={32} alt='faces' />
                    <div className="ml-2">
                      <h3 className="text-xs font-bold text-[#19439E]">John Mckin</h3>
                      <h3 className="text-xs font-normal text-gray-400 py-1 bg-gray-200"></h3>
                    </div>
                  </div>

                  <div className="flex items-center mt-2">
                    <Image src='/homepage/faces/faces6.png' width={32} height={32} alt='faces' />
                    <div className="ml-2">
                      <h3 className="text-xs font-bold text-[#19439E]">Maria Bell</h3>
                      <h3 className="text-xs font-normal text-gray-400 py-1 bg-gray-200"></h3>
                    </div>
                  </div>

                  <h3 className="font-bold text-sm mt-2">See More</h3>
                </div>
              </div>
            </div>
            <div className="relative w-full rounded-2xl p-6 border border-[#0C0A1A] h-[400px]">
              <Image src='/homepage/content/house.png' width={350} height={200} alt='house' />
              <div className="absolute z-10 top-36 left-10">
                <Image src='/homepage/icons/home.png' width={32} height={32} alt='house' />
              </div>
              <div className="flex items-center w-full space-between">
                <h3 className="mt-2 font-bold text-md">Melbourne Apartment</h3>
                <h4 className="text-sm font-normal ml-3 mt-1">Top Recruiter</h4>
              </div>
              <div className="w-full flex space-x-2 items-center">
                <div className="flex w-full flex-col mt-3">
                  <div className="text-xs font-normal text-gray-400 py-2 bg-gray-200"></div>
                  <div className="text-xs font-normal text-gray-400 py-2 bg-gray-200 mt-2"></div>
                </div>
                <div className="flex w-full flex-col mt-3">
                  <div className="flex items-center mt-2">
                    <Image src='/homepage/faces/faces6.png' width={32} height={32} alt='faces' />
                    <div className="ml-2">
                      <h3 className="text-xs font-bold text-[#19439E]">Maria Bell</h3>
                      <h3 className="text-xs font-normal text-gray-400 py-1 bg-gray-200"></h3>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="font-bold text-2xl pb-5 mt-4">Real Estate & Property</h1>
            </div>
          </div>
        </div>
        {/* 
        <div className="w-full bg-[#F7F8FB] px-[50px] py-[90px] flex space-between">
          <div className="relative">
            <Image src='/homepage/content/person.png' width={450} height={600} className='z-20' />
            <div className="w-[450px] top-0 ml-20 h-[600px] bg-[#FFC85F] absolute"></div>
          </div>
        </div> */}
      </PageLayouts>
    </React.Fragment >
  )
}

export default Home