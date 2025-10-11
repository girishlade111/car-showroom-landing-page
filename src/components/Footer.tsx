"use client"

import { Car, Mail, Instagram, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Premium Cars</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your trusted partner for luxury and performance vehicles. Experience excellence in every drive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Inventory</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">New Car Sales</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Used Car Sales</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Financing</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Service & Repairs</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Trade-In</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
            <div className="space-y-3">
              <a 
                href="mailto:girish@ladestack.in" 
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>girish@ladestack.in</span>
              </a>
              <a 
                href="https://instagram.com/girish_lade_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@girish_lade_</span>
              </a>
              <a 
                href="https://github.com/girishlade111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>@girishlade111</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-400 text-center sm:text-left">
            © {currentYear} Premium Car Showroom. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="https://ladestack.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors group"
            >
              <span>Powered by LadeStack</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <div className="h-4 w-px bg-zinc-700"></div>
            
            <a href="#" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}