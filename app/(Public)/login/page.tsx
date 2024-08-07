'use client'
import { LoginForm } from "@/components/forms/LoginForm"
import { SystemColor } from "@/constants/Color"
import { PAGE_VARIANTS } from "@/constants/PageVariant"
import { motion } from "framer-motion"
export default function LoginPage() {
    return (
        <div style={{ backgroundColor: SystemColor.grayBackground }}

            className=" h-screen flex  justify-center items-center">
            <LoginForm />
        </div>
    )
}