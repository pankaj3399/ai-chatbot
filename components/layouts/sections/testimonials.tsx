'use client'

import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Testimonial {
  rating: number
  quote: string
  author: string
  role: string
  initial: string
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote: "ValorAI has been a game-changer for me. The AI-powered form assistance saved me hours of frustration with VA paperwork.",
    author: "John Smith",
    role: "Army Veteran",
    initial: "J"
  },
  {
    rating: 4,
    quote: "The document management system is incredibly helpful. I can easily access all my VA-related documents whenever I need them.",
    author: "Sarah Johnson",
    role: "Navy Veteran",
    initial: "S"
  },
  {
    rating: 4,
    quote: "The 24/7 virtual assistant has been invaluable. It's like having a VA expert on call whenever I have questions.",
    author: "Michael Davis",
    role: "Air Force Veteran",
    initial: "M"
  },{
    rating: 5,
    quote: "The 24/7 virtual assistant has been invaluable. It's like having a VA expert on call whenever I have questions.",
    author: "Michael Davis",
    role: "Air Force Veteran",
    initial: "M"
  },{
    rating: 4,
    quote: "As a premium user, the personalized claim tracking feature has given me peace of mind. I always know the status of my claims.",
    author: "Emily Rodriguez",
    role: "Marine Corps Veteran",
    initial: "E"
  },{
    rating: 4,
    quote: "ValorAI's interface is intuitive and user-friendly. It's made navigating the VA process so much easier for me.",
    author: "David Thompson",
    role: "Navy Veteran",
    initial: "D"
  },
]

export default function Testimonials() {
  return (
    <div id='testimonials' className="py-16 px-10 bg-white dark:bg-black flex flex-col items-center justify-center ">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 mb-2">Testimonials</h2>
          <h3 className="sm:text-4xl text-2xl font-bold text-black dark:text-white">Hear From Our Veterans</h3>
        </div>
        
        <Carousel className="w-screen max-w-5xl px-10">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white  dark:bg-zinc-900 border-zinc-800 m-2">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-orange-500 fill-orange-500"
                              : "text-zinc-600"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-black dark:text-white mb-6">
                    &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar className="bg-white dark:bg-zinc-800">
                        <AvatarFallback className="text-black dark:text-white dark:bg-[#2d2d2d] bg-[#cfcfcf]">
                          {testimonial.initial}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-black dark:text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-zinc-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:text-orange-500 border-zinc-700 ml-14" />
          <CarouselNext className="text-white hover:text-orange-500 border-zinc-700 mr-14" />
        </Carousel>
      </div>
    </div>
  )
}