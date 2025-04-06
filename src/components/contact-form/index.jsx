import React, { useState } from 'react'
import Paragraph from '../paragraph'
import ContactInput from '../contact-input'
import { RiAccountCircleLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import Button from '../button';


const ContactForm = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handleFormSubmit = () => {
        if(name && phone) {

        }else {
            alert("Fill all fields")
        }
    }

  return (
    <div className="w-full shadow-lg border-3 border-white p-[30px] bg-sectionGray flex flex-col gap-8">
        <Paragraph className={"text-center font-medium !text-[20px]"}>Contact Us</Paragraph>
        <ContactInput value={name} setValue={setName} className={"text-darkBlue"} placeholder='Name' Icon={RiAccountCircleLine}  />
        <ContactInput value={phone} setValue={setPhone} className={"text-darkBlue"} placeholder='Phone' Icon={FiPhone}  />
        <ContactInput multiline rows={3} value={message} setValue={setMessage} className={"text-darkBlue"} placeholder='Message' Icon={AiOutlineMessage}  />
        <Button onClick={handleFormSubmit} className={"w-full !py-[8px] text-center !rounded-md"} >Send Message</Button>

    </div>
  )
}

export default ContactForm