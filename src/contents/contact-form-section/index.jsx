import ContactForm from '@/components/contact-form'
import Container from '@/components/container'
import Section from '@/components/section'
import React from 'react'

const ContactFormSection = () => {
  return (
    <Section>
        <Container className={"!max-w-[500px]"} >
            <ContactForm />
        </Container>
    </Section>
  )
}

export default ContactFormSection