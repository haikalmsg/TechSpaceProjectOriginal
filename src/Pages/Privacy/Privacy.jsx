import React, {useEffect} from "react";
import './Privacy.css'
import Aos from "aos";
import 'aos/dist/aos.css';

function Privacy(){
    useEffect(() => {
        Aos.init()
    }, [])
    return(
        <div className="privacyWrapper" data-aos = "fade-in">
         <h1 className="privacyTitle">Privacy Notice</h1>
         <h1 className="question">1. How is my privacy protected on this website?</h1>
         <p className="answer">We take your privacy seriously. Our website uses secure, encrypted connections (SSL) to protect your data. We do not sell or share your personal information with third parties without your consent.</p>
         <br></br>
         <h1 className="question">2. What kind of personal information do you collect?</h1>
         <p className="answer">We collect only the necessary information needed to provide our services, such as your name, email address, and shipping details. We do not collect sensitive information like credit card numbers without your explicit consent.</p>
         <br></br>
         <h1 className="question">3. How do you use my personal information?</h1>
         <p className="answer">We use your personal information to process orders, provide customer support, and update you about our products and promotions if you opt-in for such notifications. Your information is never used for unrelated marketing activities.</p>
         <br></br>
         <h1 className="question">4. Is my payment information safe?</h1>
         <p className="answer">Yes, your payment information is secure. We utilize trusted payment gateways that adhere to strict security standards. Your payment details are encrypted and not stored on our servers.</p>
         <br></br>
         <h1 className="question">5. Do you use cookies?</h1>
         <p className="answer">Yes, we use cookies to enhance your browsing experience. These cookies help us analyze site traffic and personalize your experience. You can control and delete cookies as you wish – for details, refer to our Cookie Policy.</p>
         <br></br>
         <h1 className="question">6. How can I access or delete my personal data?</h1>
         <p className="answer">You have the right to access, correct, or delete your personal data. If you wish to do so, please contact our privacy team through the contact information provided in our Privacy Policy.</p>
         <br></br>
         <h1 className="question">7. Do you share my data with third parties?</h1>
         <p className="answer">We do not share your personal information with third parties for their marketing purposes. We may share data with trusted partners for order fulfillment or legal requirements, always ensuring your privacy is protected.</p>
         <br></br>
         <h1 className="question">8. How often do you update your privacy policy?</h1>
         <p className="answer">Our privacy policy is reviewed and updated regularly to comply with legal requirements and to reflect any changes in how we handle your data. You can check the last updated date at the bottom of our Privacy Policy page.</p>
    </div>
    )
    
}
export default Privacy