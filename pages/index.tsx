import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Meta from '@modules/Meta'
import PageLayouts from '@layouts/PageLayouts'
import styles from '@styles/Home.module.css'
import { personList as person, InactiveCandidate as inactive } from '@utils/data'
import CardPerson from 'components/organism/CardPerson'
import ActiveCandidate from 'components/organism/ActiveCandidate'
import InactiveCandidate from 'components/organism/InactiveCandidate'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <PageLayouts>
        <Meta title='Homepage' description='First Sales Marketing' keywords='First Sales Marketing Recruitment' />
        <div className={styles.background}>
          <div className="px-[88px]">
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
                      <InactiveCandidate name={user.name} data={user.data} image={user.image} />
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
          </div>
        </div>

        {/* Sponsor Section */}
        <div className={`w-full bg-white mx-auto h-[300px] px-[88px] relative ${styles.bgcontent}`}>
          <div className="bg-white w-[1264px] -top-36 absolute h-[320px] py-16 px-[264px]">
            <h1 className="font-bold text-xl uppercase text-center">Featured In</h1>
            <div className="grid grid-cols-4 gap-8 py-10">
              <Image src={'/homepage/sponsors/junior.png'} height={40} width={160} alt='junior' />
              <Image src={'/homepage/sponsors/business-news.png'} height={40} width={160} alt='junior' />
              <Image src={'/homepage/sponsors/4bc.png'} height={40} width={160} alt='junior' />
              <Image src={'/homepage/sponsors/courier.png'} height={40} width={160} alt='junior' />
              <Image src={'/homepage/sponsors/skynews.png'} height={40} width={160} alt='junior' />
              <Image src={'/homepage/sponsors/radio-brisbane.png'} height={40} width={160} alt='junior' />
              <Image src={'/homepage/sponsors/headspace.png'} height={40} width={160} alt='junior' />
              <Image src={'/homepage/sponsors/2gb.png'} height={40} width={160} alt='junior' />
            </div>
          </div>
          <div className="w-full pt-56">
            <h1 className="max-w-[1000px] text-center mx-auto text-white font-bold leading-[56px] text-[40px] tracking-wide">Connect Great Business with Great People
              <span className="text-[#3377FF]"> Because Without People a Business is Nothing. </span></h1>
          </div>
        </div>

      </PageLayouts>
    </React.Fragment >
  )
}

export default Home