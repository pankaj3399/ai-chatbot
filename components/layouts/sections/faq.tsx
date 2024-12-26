'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-[#fff] dark:bg-black">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl ">
                Frequently Asked Questions
            </h2>
            </div>

            <div className="flex flex-col justify-center items-center w-full mt-12">
            <Accordion type="single" collapsible className="w-full max-w-3xl  px-4 sm:px-6 space-y-8">
                {faqs.map((faq, i) => (
                <AccordionItem
                    key={i}
                    className="dark:bg-[#29262592] rounded-2xl px-8 shadow-lg hover:shadow-xl"
                    value={`item-${i}`}
                >
                    <AccordionTrigger className=" rounded text-lg font-semibold ">
                    {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 dark:text-gray-300">
                    {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            </div>
        </div>
    </section>

  )
}

const faqs = [
  {
    question: "What is ValorAI?",
    answer: "ValorAI is an AI-powered platform designed to help veterans navigate the VA claims process more efficiently."
  },
  {
    question: "Is ValorAI free to use?",
    answer: "We offer both free and premium features. Basic assistance is available at no cost to all veterans."
  },
  {
    question: "How does the AI-powered form assistance work?",
    answer: "Our AI analyzes your information and automatically fills out VA forms, reducing errors and saving time."
  },
  {
    question: "Is my data secure with ValorAI?",
    answer: "Yes, we use military-grade encryption and follow strict security protocols to protect your information."
  },
  {
    question: "Can ValorAI help with all types of VA claims?",
    answer: "Yes, our platform supports all types of VA claims, including disability, pension, and healthcare benefits."
  }
]