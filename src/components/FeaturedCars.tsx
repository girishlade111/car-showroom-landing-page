"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gauge, Fuel, Settings, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const cars = [
  {
    id: 1,
    name: "Porsche 911 GT3",
    category: "Sports Car",
    price: "$185,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    specs: {
      speed: "320 km/h",
      fuel: "Petrol",
      transmission: "Automatic"
    },
    badge: "Featured"
  },
  {
    id: 2,
    name: "Mercedes-Benz S-Class",
    category: "Luxury Sedan",
    price: "$110,000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    specs: {
      speed: "250 km/h",
      fuel: "Hybrid",
      transmission: "Automatic"
    },
    badge: "New"
  },
  {
    id: 3,
    name: "BMW X7",
    category: "Luxury SUV",
    price: "$95,000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    specs: {
      speed: "240 km/h",
      fuel: "Diesel",
      transmission: "Automatic"
    },
    badge: "Popular"
  },
  {
    id: 4,
    name: "Audi R8",
    category: "Sports Car",
    price: "$165,000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    specs: {
      speed: "330 km/h",
      fuel: "Petrol",
      transmission: "Automatic"
    },
    badge: "Featured"
  },
  {
    id: 5,
    name: "Range Rover Vogue",
    category: "Luxury SUV",
    price: "$125,000",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    specs: {
      speed: "225 km/h",
      fuel: "Petrol",
      transmission: "Automatic"
    },
    badge: "New"
  },
  {
    id: 6,
    name: "Tesla Model S Plaid",
    category: "Electric Sedan",
    price: "$135,000",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    specs: {
      speed: "322 km/h",
      fuel: "Electric",
      transmission: "Automatic"
    },
    badge: "Eco"
  }
]

export default function FeaturedCars() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">
              Premium Collection
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Featured Vehicles
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Explore our handpicked selection of premium vehicles. Each one carefully inspected and certified.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-zinc-200 dark:border-zinc-800">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                    {car.badge}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      {car.category}
                    </p>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                      {car.name}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      {car.price}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Gauge className="w-4 h-4" />
                      <span>Max Speed: {car.specs.speed}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Fuel className="w-4 h-4" />
                      <span>Fuel: {car.specs.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Settings className="w-4 h-4" />
                      <span>{car.specs.transmission}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group/btn">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8"
          >
            View All Vehicles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}