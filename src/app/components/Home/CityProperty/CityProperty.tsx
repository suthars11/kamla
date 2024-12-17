import React from 'react'
import SectionHeading from '../../SectionHeading'
import CitySlider from './CitySlider'

const CityProperty = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto'>
            <SectionHeading heading='Explore City prperties'/>

            <div className='mt-10 md:mt-16'>
                {/* {slider} */}
                <CitySlider/>
            </div>
        </div>
    </div>
  )
}

export default CityProperty