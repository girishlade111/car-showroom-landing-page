"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ShoppingCart, 
  CreditCard, 
  Wrench, 
  Shield, 
  TrendingUp, 
  Award 
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: ShoppingCart,
    title: "Premium Sales",
    description: "Browse our exclusive collection of luxury and performance vehicles. Expert guidance to find your perfect match.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "Competitive rates and customized payment plans. Get pre-approved in minutes with our finance partners.",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30"
  },
  {
    icon: Wrench,
    title: "Expert Maintenance",
    description: "State-of-the-art service center with certified technicians. Keep your vehicle performing at its best.",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "Comprehensive coverage plans for peace of mind. Protect your investment with our warranty options.",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30"
  },
  {
    icon: TrendingUp,
    title: "Trade-In Program",
    description: "Get the best value for your current vehicle. Fair market pricing and instant evaluation.",
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30"
  },
  {
    icon: Award,
    title: "VIP Experience",
    description: "Personalized service from test drive to delivery. Premium customer care throughout your journey.",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">
              Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Complete Car Solutions
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              From purchase to maintenance, we provide comprehensive services to make your car ownership experience seamless.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-zinc-200 dark:border-zinc-800 h-full group">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Our Showroom?
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                With over 15 years of experience, we've built a reputation for excellence, transparency, and customer satisfaction.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span>Certified pre-owned vehicles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span>Transparent pricing & history reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span>Award-winning customer service</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-blue-100">Cars Sold</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm text-blue-100">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-blue-100">Years Exp</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}