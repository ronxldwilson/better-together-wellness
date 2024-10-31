import './App.css'

function App() {

  return (
    <>
      <div className='header text-3xl ' style={{ display:'flex', justifyContent:'space-between'}}>
        <div className='logo' > Logo </div>
        <div className='right-menu' style={{display:'flex'}}>
          <div>Services</div>
          <div>Team</div>
          <div>FAQ</div>
        </div>
      </div>

      <div className='section-Landing'>
        <h1>Holistic Mental Wellness <br /> For Everyone</h1>
        <h2>We are your go to destination for anything mental health. We offer carefully tailored mental wellness programs with expert guidance and community support that take you from surviving to thriving.</h2>
        <button>Contact Us</button>
      </div>

      <div className='section-meet-team'> 
        <h2> WE RALLY BEHIND THE NAME OF OUR ORGANIZATION.  We are here to break the stigma around mental health and provide individuals with tools and support on their healing journey.</h2>
        
        <div>
          <img src="" alt="Image" />
           Card With Detaiils
        </div>
        
        <div>
          <img src="" alt="Image" />
           Card With Detaiils
        </div>
        
        <div>
          <img src="" alt="Image" />
           Card With Detaiils
        </div>

      </div>

      <div className='section-bay-program'>
      <h4>At Better Together, we don’t believe in short term solutions, but sustainable ones. The Bright As You Program brings a holistic balance between the mental, emotional, and physical.</h4>
      
      BAY Card 01
      BAY Card 02
      BAY Card 03
      BAY Card 04 
      BAY Card 05
      </div>

      <div className='section-Testimonials'>

      </div>

      <div className='section-faq'>

      </div>
npm
      <div className='section-contact-us'>
      Have Questions? We’re an email away!

      Reach us at query.bettertogether@gmail.com for questions, queries, or collaborations.

      Or send us a message on our social media!

      </div>
      
      <div className='section-footer'>

      </div>
    </>
  )
}

export default App
