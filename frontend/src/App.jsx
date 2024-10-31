import FAQAccordion from './components/FAQAccordion'
import ContactForm from './components/ContactForm'
import BAYHorizontalScroll from './components/BAYHorizontalScroll'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    < div className='root m-0'>
      <div>
        <Header></Header>
      </div>

      <div className='section-Landing'>
        <h1>Holistic Mental Wellness For Everyone</h1>
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

      <div className='section-bay-program '>
      <div>
      <h4>At Better Together, we don’t believe in short term solutions, but sustainable ones. The Bright As You Program brings a holistic balance between the mental, emotional, and physical.</h4>
      </div>
      <div>
      <BAYHorizontalScroll></BAYHorizontalScroll>  
      </div>

      </div>

      <div className='section-Testimonials'>

      </div>

      <div className='section-faq'>
      <FAQAccordion></FAQAccordion>
      </div>

      <div className='section-contact-us flex m-10 justify-evenly bg-slate-400'>
      <div className='' >
        <div className=''>
          Have Questions? We’re an email away!
          <br />
          Reach us at query.bettertogether@gmail.com for questions, queries, or collaborations.
          <br />
          Or send us a message on our social media!
        </div>
      </div>


      <ContactForm></ContactForm>

      </div>

      <div className='section-contact-us flex flex-col lg:flex-row m-0 justify-evenly bg-slate-400'>
        <div className='m-10 mb-4 md:mb-0'>
          <div>
            Have Questions? We’re an email away!
            <br />
            Reach us at <a href="mailto:query.bettertogether@gmail.com" className="text-blue-600">query.bettertogether@gmail.com</a> for questions, queries, or collaborations.
            <br />
            Or send us a message on our social media!
          </div>
        </div>

        <ContactForm />
      </div>

      
      <div className='section-footer'>

      </div>
    </div>
  )
}

export default App
