"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Github, 
  Send 
} from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
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
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-white dark:bg-zinc-950"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-white dark:bg-zinc-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white dark:bg-zinc-950"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Phone
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="bg-white dark:bg-zinc-950"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..." 
                    rows={5}
                    className="bg-white dark:bg-zinc-950"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-6 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Email</h4>
                  <a 
                    href="mailto:girish@ladestack.in" 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    girish@ladestack.in
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Instagram</h4>
                  <a 
                    href="https://instagram.com/girish_lade_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    @girish_lade_
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">GitHub</h4>
                  <a 
                    href="https://github.com/girishlade111" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    @girishlade111
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Location</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Premium Car Showroom<br />
                    Downtown District<br />
                    City Center, State 12345
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Business Hours</h4>
                  <div className="text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Phone</h4>
                  <a 
                    href="tel:+15551234567" 
                    className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}