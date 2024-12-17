import React from 'react'
import SectionHeading from '../../SectionHeading'
import BuildingCard from './BuildingCard'
import { buildings } from '@/app/data/data'

const BuildingFeature = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
    <div className='w-[80%] mx-auto'>
        <SectionHeading heading="Explor Building Features"/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14'>
            {buildings.map((building)=>{
                return <div key={building.id}>
                    <BuildingCard building={building}/>
                </div>

            })}
        </div>
    </div>

    </div>
  )
}

export default BuildingFeature