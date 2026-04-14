import React from 'react'
import ContactSMS from './ContactSMS'
import ContactMap from './ContactMap'

export default function ContactFlex() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="flex justify-between gap-10 flex-wrap lg:flex-nowrap">
        <ContactSMS/>
<ContactMap/>
      </div>
    </div>
  )
}