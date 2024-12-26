'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Building2, Clock, Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="  py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-16 flex flex-col py-10">
            <div className="space-y-4 pr-32">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground ">
                Have questions about ValorAI or need assistance with your VA claims? We&apos;re here to help.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Building2 className="h-5 w-5 text-primary" />
                <p>1234 Veterans Way, Washington, DC 20001</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <p>+1 (800) VALOR-AI</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <p>support@valorai.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p>Monday - Friday</p>
                  <p>9AM - 5PM EST</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 bg-[#efefef] dark:bg-[#29262592] rounded pt-4 pb-10 px-4 border border-gray-300">
            <h2 className="text-3xl text-orange-600 font-semibold">Send Us a Message</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" className="dark:bg-[#2d2d2d] bg-[#fff]" />
              <Input placeholder="Last Name" className="dark:bg-[#2d2d2d] bg-[#fff]" />
            </div>
            <Input placeholder="Email" type="email" className="dark:bg-[#2d2d2d] bg-[#fff]" />
            <Select>
              <SelectTrigger className="dark:bg-[#2d2d2d] bg-[#fff] active:outline-none">
                <SelectValue placeholder="Subject" className="dark:bg-[#2d2d2d] bg-[#fff]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="claims">VA Claims Assistance</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              className="min-h-[150px] bg-[#fff] dark:bg-[#2d2d2d]"
              placeholder="How can we help you?"
            />
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}