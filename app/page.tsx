"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Search,
  ShoppingCart,
  Menu,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Hero slider images and content
  const heroSlides = [
    {
      image:
        "https://pictures.autods.com/OfficialSite/New/20231009123226/20-Best-Selling-Auto-Parts-To-Start-Dropshipping-Today.png",
      title: "Premium Auto Parts",
      subtitle: "For Every Make and Model",
      description:
        "Find the perfect parts for your car with our extensive collection of genuine and aftermarket components.",
    },
    {
      image:
        "https://priorityautomotive.com.au/wp-content/uploads/2024/12/AdobeStock_707309472-blog-img-3.jpg",
      title: "Performance Upgrades",
      subtitle: "Boost Your Vehicle",
      description:
        "Enhance your driving experience with our high-performance parts and accessories.",
    },
    {
      image:
        "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744393943/ChatGPT_Image_Apr_11_2025_10_52_09_PM_ymy3xj.png",
      title: "Expert Support",
      subtitle: "We're Here to Help",
      description:
        "Our team of automotive experts is ready to assist you in finding the right parts for your vehicle.",
    },
  ];

  // Featured products data
  const featuredProducts = [
    {
      name: "Premium Brake Pads",
      price: 89.99,
      image:
        "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744392958/download_x73pov.jpg",
      rating: 4.8,
      reviews: 124,
      sale: true,
      oldPrice: 119.99,
      category: "Brakes",
    },
    {
      name: "Engine Oil Filter",
      price: 24.99,
      image:
        "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744393053/download_1_oaw1ak.jpg",
      rating: 4.6,
      reviews: 89,
      category: "Engine",
    },
    {
      name: "Suspension Control Arm",
      price: 149.99,
      image:
        "https://cdn.pkwteile.de/uploads/info_section/article/376/1683813027_0794_6ff87584d13a20ac0ea377bfecb22c0b.jpeg",
      rating: 4.9,
      reviews: 56,
      new: true,
      category: "Suspension",
    },
    {
      name: "LED Headlight Assembly",
      price: 299.99,
      image:
        "https://image.made-in-china.com/202f0j00pfZkWIOcrKgn/Auto-Spare-Part-LED-Car-Head-Lamp-Headlight-Assembly-for-Honda-Vezel-2015-2018.webp",
      rating: 4.7,
      reviews: 42,
      sale: true,
      oldPrice: 349.99,
      category: "Lighting",
    },
  ];

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-gray-900 to-black p-6 text-white md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  A
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                ASTORAT AL NAWRAS
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="mt-10 flex flex-col gap-4">
            <Link
              href="#"
              className="group flex items-center justify-between border-b border-gray-800 py-4 text-lg font-medium"
            >
              Home
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between border-b border-gray-800 py-4 text-lg font-medium"
            >
              Shop
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between border-b border-gray-800 py-4 text-lg font-medium"
            >
              Categories
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between border-b border-gray-800 py-4 text-lg font-medium"
            >
              Brands
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between border-b border-gray-800 py-4 text-lg font-medium"
            >
              About
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between border-b border-gray-800 py-4 text-lg font-medium"
            >
              Contact
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
          <div className="mt-auto">
            <div className="mb-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span>056 4497668 | 058 8922465</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span>info@astoratalnawras.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800">
                Login
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-white text-black hover:bg-white/10"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="hidden border-b bg-gradient-to-r from-gray-900 to-black py-2 text-white md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3 text-red-400" />
              <span>056 4497668 | 058 8922465</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3 text-red-400" />
              <span>info@astoratalnawras.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-red-400" />
              <span>Al Jurf, Ajman, UAE</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:text-red-400">
              Track Order
            </Link>
            <Link href="#" className="text-sm hover:text-red-400">
              Support
            </Link>
            <Link href="#" className="text-sm hover:text-red-400">
              Login
            </Link>
            <Link href="#" className="text-sm hover:text-red-400">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md dark:bg-gray-900/90"
            : "bg-transparent dark:bg-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-purple-600 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  A
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                ASTORAT AL NAWRAS
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className="group relative text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400"
              >
                Home
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400"
              >
                Shop
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400"
              >
                Categories
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400"
              >
                Brands
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400"
              >
                About
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400"
              >
                Contact
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-full max-w-sm items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search parts by name, model, or SKU..."
                className="w-full rounded-full bg-background pl-8 md:w-[300px] lg:w-[300px] border-gray-300 focus:border-red-500 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-red-400"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="relative border-gray-300 dark:border-gray-700 dark:text-white"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-xs text-white">
                3
              </span>
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white">
              My Account
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-gray-300 dark:border-gray-700 dark:text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Slider */}
        <section ref={heroRef} className="relative h-[600px] overflow-hidden">
          {/* Slider */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10" />
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={1600}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            ))}
          </div>

          {/* Slider Content */}
          <div className="container relative z-20 flex h-full flex-col items-start justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              key={currentSlide}
              className="max-w-xl space-y-6"
            >
              <Badge className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 px-4 py-1 text-sm">
                Premium Quality
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                {heroSlides[currentSlide].title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white"
                >
                  Shop Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10"
                >
                  Find Parts by Vehicle
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Slider Navigation */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-8 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-red-500 to-purple-600 w-12"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Brands Ticker */}
        <section className="bg-white dark:bg-gray-900 py-6 overflow-hidden">
          <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
            {Array(12)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src="/placeholder-logo.svg"
                    alt="Brand logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
              ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
            >
              <motion.div
                variants={itemFade}
                className="group flex flex-col items-center text-center transition-all hover:translate-y-[-10px]"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-purple-600 shadow-lg shadow-red-500/20 dark:shadow-red-500/10 transform transition-transform duration-500 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-white"
                  >
                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                    <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                    <path d="M5 18v2" />
                    <path d="M19 18v2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold">Genuine Parts</h3>
                <p className="text-muted-foreground">
                  All our parts are 100% genuine or high-quality aftermarket
                  alternatives.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="group flex flex-col items-center text-center transition-all hover:translate-y-[-10px]"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg shadow-purple-500/20 dark:shadow-purple-500/10 transform transition-transform duration-500 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-white"
                  >
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Same-day delivery available for orders placed before 2 PM.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="group flex flex-col items-center text-center transition-all hover:translate-y-[-10px]"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10 transform transition-transform duration-500 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-white"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our team of experts is available to help you find the right
                  parts.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="group flex flex-col items-center text-center transition-all hover:translate-y-[-10px]"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-emerald-600 shadow-lg shadow-cyan-500/20 dark:shadow-cyan-500/10 transform transition-transform duration-500 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-white"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold">Warranty</h3>
                <p className="text-muted-foreground">
                  All parts come with a minimum 6-month warranty for peace of
                  mind.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                <span className="relative">
                  Popular Categories
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-red-500 to-purple-600"></span>
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Browse our most popular categories and find the parts you need
                for your vehicle
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            >
              {[
                {
                  name: "Engine Parts",
                  icon: "engine",
                  color: "from-red-500 to-orange-600",
                },
                {
                  name: "Brake System",
                  icon: "brake",
                  color: "from-orange-500 to-amber-600",
                },
                {
                  name: "Suspension",
                  icon: "suspension",
                  color: "from-amber-500 to-yellow-600",
                },
                {
                  name: "Electrical",
                  icon: "electrical",
                  color: "from-yellow-500 to-lime-600",
                },
                {
                  name: "Body Parts",
                  icon: "body",
                  color: "from-lime-500 to-green-600",
                },
                {
                  name: "Interior",
                  icon: "interior",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  name: "Transmission",
                  icon: "transmission",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  name: "Cooling System",
                  icon: "cooling",
                  color: "from-teal-500 to-cyan-600",
                },
                {
                  name: "Exhaust System",
                  icon: "exhaust",
                  color: "from-cyan-500 to-sky-600",
                },
                {
                  name: "Filters",
                  icon: "filters",
                  color: "from-sky-500 to-blue-600",
                },
                {
                  name: "Lighting",
                  icon: "lighting",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  name: "Wheels & Tires",
                  icon: "wheels",
                  color: "from-indigo-500 to-violet-600",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  className="group relative overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-10 dark:group-hover:opacity-20"></div>
                  <div className="p-6 text-center">
                    <div
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${category.color} shadow-lg transform transition-transform duration-500 group-hover:scale-110`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-white"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                    <div className="mt-4 opacity-0 transition-all group-hover:opacity-100">
                      <Button
                        variant="ghost"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      >
                        View All
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  <span className="relative">
                    Featured Products
                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-red-500 to-purple-600"></span>
                  </span>
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Our best-selling auto parts with guaranteed quality
                </p>
              </div>
              <Tabs defaultValue="all" className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <TabsTrigger
                    value="all"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="new"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    New
                  </TabsTrigger>
                  <TabsTrigger
                    value="popular"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    Popular
                  </TabsTrigger>
                  <TabsTrigger
                    value="sale"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    Sale
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  className="group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
                >
                  {product.sale && (
                    <div className="absolute left-0 top-0 z-10 bg-gradient-to-r from-red-500 to-pink-600 px-4 py-1 text-xs font-medium text-white">
                      SALE
                    </div>
                  )}
                  {product.new && (
                    <div className="absolute left-0 top-0 z-10 bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1 text-xs font-medium text-white">
                      NEW
                    </div>
                  )}
                  <Link href="#" className="overflow-hidden">
                    <div className="relative h-[220px] w-full overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="h-full w-full scale-90 transition-transform duration-700 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        <Button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white w-full">
                          Quick View
                        </Button>
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex items-center">
                      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {product.category}
                      </Badge>
                      <div className="ml-auto flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <h3 className="mb-2 flex-1 text-lg font-bold">
                      {product.name}
                    </h3>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-xl font-bold">
                        ${product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white">
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-gray-300 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-12 flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-8"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Car Models Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                <span className="relative">
                  Shop by Car Model
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-red-500 to-purple-600"></span>
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
                Find parts specifically designed for your vehicle make and model
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            >
              {[
                "Toyota",
                "Honda",
                "Nissan",
                "BMW",
                "Mercedes",
                "Audi",
                "Ford",
                "Chevrolet",
                "Hyundai",
                "Kia",
                "Lexus",
                "Volkswagen",
              ].map((brand, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-800/50 transition-all hover:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <Link href="#" className="block p-6 text-center">
                    <div className="mb-4 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-purple-600 shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-white"
                      >
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">{brand}</h3>
                    <div className="mt-2 h-0.5 w-0 mx-auto bg-gradient-to-r from-red-500 to-purple-600 transition-all duration-300 group-hover:w-16"></div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Parallax Banner */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744393943/ChatGPT_Image_Apr_11_2025_10_52_09_PM_ymy3xj.png"
              alt="Car parts"
              width={1600}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Premium Quality Parts at
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500">
                  Competitive Prices
                </span>
              </h2>
              <p className="mb-8 text-xl text-gray-300">
                We source our parts directly from manufacturers to offer you the
                best prices without compromising on quality.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                Shop Now and Save
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                <span className="relative">
                  What Our Customers Say
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-red-500 to-purple-600"></span>
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Don't just take our word for it. Here's what our customers have
                to say about our products and service.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              {[
                {
                  name: "Ahmed Hassan",
                  role: "Toyota Camry Owner",
                  content:
                    "I've been buying parts from ASTORAT AL NAWRAS for years. Their quality is unmatched and the customer service is exceptional. Fast delivery and the parts always fit perfectly.",
                  rating: 5,
                },
                {
                  name: "Mohammed Ali",
                  role: "BMW 3 Series Owner",
                  content:
                    "Finding genuine parts for my BMW was always a challenge until I discovered this shop. The parts are authentic, reasonably priced, and their technical support team is very knowledgeable.",
                  rating: 5,
                },
                {
                  name: "Sara Khan",
                  role: "Honda Accord Owner",
                  content:
                    "As a woman who knows her cars, I appreciate the honest advice and quality parts from ASTORAT AL NAWRAS. They never try to upsell and always recommend the right parts for my vehicle.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  className="group flex flex-col rounded-xl border bg-white p-6 shadow-md transition-all hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="mb-4 flex">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    {Array(5 - testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-300" />
                      ))}
                  </div>
                  <p className="mb-6 flex-1 text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-purple-600 text-white">
                      <span className="text-lg font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-purple-700 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
            >
              <div className="md:max-w-xl">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Can't find the part you're looking for?
                </h2>
                <p className="text-red-100 md:text-lg">
                  Our expert team can help you source any rare or hard-to-find
                  parts for your vehicle. Contact us today for personalized
                  assistance.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 px-8"
                >
                  Contact Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10 px-8"
                >
                  Request a Part
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 md:p-12"
            >
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Subscribe to Our Newsletter
                </h2>
                <p className="mb-8 text-gray-300 md:text-lg">
                  Stay updated with our latest products, promotions, and
                  automotive tips. Get 10% off your first order when you
                  subscribe.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 flex-1 border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  ASTORAT AL NAWRAS
                </span>
              </div>
              <p className="mt-4 text-gray-400">
                Your trusted source for genuine and high-quality auto spare
                parts. Serving the UAE since 2005.
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Customer Service</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Warranty Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline"
                  >
                    Payment Methods
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-red-400" />
                  <span className="text-gray-400">
                    Al Jurf, Ajman, United Arab Emirates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-red-400" />
                  <div className="text-gray-400">
                    <p>056 4497668</p>
                    <p>058 8922465</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-red-400" />
                  <span className="text-gray-400">
                    info@astoratalnawras.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-5 w-5 text-red-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div className="text-gray-400">
                    <p>Saturday - Thursday: 9:00 AM - 9:00 PM</p>
                    <p>Friday: 4:00 PM - 9:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-gray-400 md:text-left">
                &copy; {new Date().getFullYear()} ASTORAT AL NAWRAS. All rights
                reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white hover:underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white hover:underline"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
