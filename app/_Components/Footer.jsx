import { Facebook, Phone, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200/40 text-sm">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-6">
          {/* Логотип и описание - занимает 2 колонки на больших экранах */}
          <div className="space-y-6 lg:col-span-2 text-center lg:text-left">
            <Image
              src="/wallet-logo.png"
              alt="Logo"
              width={200}
              height={80}
              className="mx-auto lg:mx-0"
            />
            <p className="text-gray-600 text-lg mx-auto lg:mx-0 lg:w-4/5">
              Empowering your financial journey with secure and innovative
              digital wallet solutions.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Facebook
                className="text-primary hover:text-secondary cursor-pointer transition-colors"
                size={30}
              />
              <Youtube
                className="text-primary hover:text-secondary cursor-pointer transition-colors"
                size={30}
              />
              <Twitter
                className="text-primary hover:text-secondary cursor-pointer transition-colors"
                size={30}
              />
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4 text-left">
            <h1 className="text-2xl font-semibold text-gray-900 pb-4">
              Quick Links
            </h1>
            <div className="space-y-5">
              {["Home", "About Us", "Services", "Blog"].map((link) => (
                <Link
                  key={link}
                  href="/"
                  className="block text-gray-600 hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 text-left">
            <h2 className="text-xl font-semibold text-gray-900 pb-4">
              Services
            </h2>
            <div className="space-y-5">
              {["Digital Wallet", "Payments", "Security", "Support"].map(
                (service) => (
                  <Link
                    key={service}
                    href="/services/digital-wallet"
                    className="block text-gray-600 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4 text-left">
            <h2 className="text-xl font-semibold text-gray-900 pb-4">
              Resources
            </h2>
            <div className="space-y-5">
              <Link
                href="/faq"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/help-center"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 text-left">
            <h2 className="text-xl font-semibold text-gray-900 ">Contact Us</h2>
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span className="text-gray-600">support@wallet.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" size={20} />
                <span className="text-gray-600">
                  123 Business Ave, Suite 100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="py-8 border-t border-gray-200">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Wallet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
