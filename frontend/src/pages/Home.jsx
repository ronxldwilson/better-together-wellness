import FAQAccordion from '../components/FAQAccordion'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import TeamSection from '../components/TeamSection'
import TestimonalSection from '../components/TestimonialSection'
import LandingSection from '../components/LandingSection'
import BrightAsYou from '../components/BrightAsYou'
import Footer from '../components/Footer'
import React from "react";

const Home = () => {
    return (
        <>
            <div>
                <Header></Header>
            </div>

            <div className='section-Landing'>
                <LandingSection></LandingSection>
            </div>

            <div className='section-bay-program '>
                <BrightAsYou></BrightAsYou>
            </div>

            <div className="section-team">
                <TeamSection></TeamSection>
            </div>

            <div className='section-Testimonials'>
                <TestimonalSection></TestimonalSection>
            </div>

            <div className='section-faq p-10 bg-red-300'>
                <FAQAccordion ></FAQAccordion>
            </div>

            <ContactForm></ContactForm>

            <div className='section-footer'>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home;