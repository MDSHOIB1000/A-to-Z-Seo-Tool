import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div className='Footer'>
             <div className='d-flex justify-content-evenly paddingTop Responsive'>
                <div className=''>
                    <h1 className='fs-20'>Support</h1>
                    <div className='d-flex flex-column mt-3 lh-lg'>
                        <span>Help Center</span>
                        <span>Safety information</span>
                        <span>Cancellation options</span>
                    </div>
                </div>
                <div>
                    <h1 className='fs-20'>Company</h1>
                    <div className='d-flex flex-column mt-3 lh-lg'>
                        <span>About us</span>
                        <span>Privacy policy</span>
                        <span>Community Blog</span>
                        <span>Terms of service </span>
                    </div>
                </div>
                <div>
                    <h1 className='fs-20'>Contact</h1>
                    <div className='d-flex flex-column mt-3 lh-lg'>
                        <span>FAQ</span>
                        <span>Get in touch</span>
                        <span>Partnerships</span>
                    </div>
                </div>
                <div>
                    <h1 className='fs-20'>Social</h1>
                </div>
             </div>
           
             <hr className='tagColor'/>
             <div className='mt-4 copyRightPadLeft'>
                <span>© Copyright travel 2024</span>
             </div>

             
        </div>
    </div>
  )
}

export default Footer