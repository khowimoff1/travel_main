import PageHeader from '@/components/page-header'
import ContactFormSection from '@/contents/contact-form-section'
import ContactInfo from '@/contents/contact-info'
import React from 'react'

const breadCrumpData = [
    {
        id:1,
        name: "Contact",
        url: "/contact"
    }
]

const ContactInner = () => {
  return (
    <>
    <PageHeader title={"Contact Us"} breadcrumpData={breadCrumpData} image={"/img/contact-page-header.jpg"} />
    <ContactFormSection />
    <ContactInfo />
    </>
  )
}

export default ContactInner