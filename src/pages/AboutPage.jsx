import React from 'react'

const AboutPage = () => {
    return (
        <div className='flex bg-black '>
            <div className='ml-[120px]'>
                <img src='public/director-about.webp' className='w-[100%] w-auto]' />
            </div>
            <div className='ml-[120px] mt-[60px]'>
                <p className='text-orange-600 mt-[70px] text-2xl '>ABOUT ME</p><br />
                <h2 className='text-7xl text-white'>CREATIVE & EXPERT</h2><br />
                <h2 className='text-7xl text-white'>FILM DIRECTOR</h2><br />
                <span className='text-2xl text-white'>
                    I’m a world-renowned filmmaker who, for the<br />
                    past 9 years of my 26-years career have<br />
                    specialized in creating incredible cinematic <br />
                    images no matter what the camera. Some of <br />
                    my most iconic work was created with Canon DSLRs.<br />
                    Sloping each project alongside the communities <br />
                    at the heart of her stories in order to ensure <br />
                    authenticity.<br /><br />

                    I can film your project whether it is a commercial <br />
                    advertise, a short film or a document film. I have <br />
                    expertise in these fields. Founded in 2007 by <br />
                    Faime located at Kisterdast, London.</span>
            </div>
        </div>
    )
}

export default AboutPage;
