'use client'
import { ContactForm } from "@/components/forms/ContactForm"
import { PAGE_VARIANTS } from "@/constants/PageVariant"
import { motion } from 'framer-motion'
export default function ContactPage() {
    return (
        <motion.div
            initial="initial"
            variants={PAGE_VARIANTS}
            animate="in"
            exit="out"
            className="h-screen flex justify-center items-center">
            <ContactForm />
        </motion.div>)
}