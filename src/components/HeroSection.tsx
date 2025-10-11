"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Car } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt="Luxury car background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Car className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Premium Car Showroom</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight">
            Drive Your Dream Car
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Today
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl">
            Experience luxury and performance with our curated collection of premium vehicles. 
            From sports cars to luxury sedans, find your perfect match.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full group"
            >
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-zinc-900 px-8 py-6 text-lg rounded-full"
            >
              Schedule Test Drive
            </Button>
          </div>

          <div className="flex gap-8 mt-12 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-zinc-400">Premium Cars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-zinc-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-zinc-400">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}