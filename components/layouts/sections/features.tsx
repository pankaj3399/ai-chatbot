import { Clock, FileText, Lock, MessageSquareText, Sparkles, Users } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const features = [
  {
    title: "Voice-Enabled AI Assistant",
    description:
      "Interact with our AI using natural language, making the VA process more accessible and user-friendly for veterans.",
    icon: MessageSquareText,
  },
  {
    title: "Automated Form Filling",
    description:
      "Simplify complex paperwork with our AI-powered form filling system, reducing errors and saving time.",
    icon: FileText,
  },
  {
    title: "Document Management",
    description:
      "Securely store, organize, and retrieve all your VA-related documents in one centralized location.",
    icon: Sparkles,
  },
  {
    title: "Personalized Support",
    description:
      "Receive tailored assistance and guidance throughout your VA journey, addressing your unique needs and circumstances.",
    icon: Users,
  },
  {
    title: "24/7 Availability",
    description:
      "Access ValorAI's services anytime, anywhere, ensuring support is always at your fingertips when you need it most.",
    icon: Clock,
  },
  {
    title: "Secure and Confidential",
    description:
      "Rest easy knowing your personal information is protected with state-of-the-art security measures and encryption.",
    icon: Lock,
  },
]

export default function Features() {
  return (
    <section className="w-full bg-white dark:bg-black flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 pb-10">
            <h2 className="text-md font-medium text-orange-500 sm:text-lg md:text-xl">
              Features
            </h2>
            <h3 className="text-xl font-bold text-black  dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
              How ValorAI Empowers Veterans
            </h3>
            <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
              ValorAI leverages cutting-edge AI technology to streamline the VA process, providing veterans
              with intuitive tools and personalized support every step of the way.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-black-950 flex flex-col items-center">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                    <feature.icon className="h-6 w-6 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h4 className="text-xl font-bold text-black dark:text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}