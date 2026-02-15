'use client'

import action from '@/actions/contact-form'
import { useActionState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(action, null)

  if (status?.success) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">{status.message}</p>
    )
  }

  return (
    <form action={formAction}>
      <Input label="სრული სახელი" id="name" name="name" placeholder="თქვენი სახელი" required />
      <Input
        label="ელ.ფოსტა"
        id="email"
        type="email"
        name="email"
        placeholder="თქვენი ელ.ფოსტა"
        required
      />
      <Input label="თემა" id="subject" name="subject" placeholder="შეიყვანეთ თემა" />
      <Textarea
        label="მესიჯი"
        id="message"
        name="message"
        placeholder="თქვენი მესიჯი"
        rows={7}
        required
      />
      {!status?.success && <p className="my-2 font-light text-red-600">{status?.message}</p>}
      <Button text={isPending ? 'იგზავნება...' : 'გაგზავნა'} disabled={isPending} />
    </form>
  )
}

export default ContactForm
