import React from 'react';

function ContactForm() {

  return (
    <div className='m-0
    '>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJpvzpYXjgWVIlExDLQ8dZ__pMB0czHGuSIdl8cPRKQo1H-Q/viewform?embedded=true" 
	width={800} 
    height={1000} 
    // sandbox='allow-scripts allow-modal'  if added it provides additional layer of security
    loading='lazy'  
    title='Custom title'  >
    </iframe>
    </div>
  );
}

export default ContactForm;