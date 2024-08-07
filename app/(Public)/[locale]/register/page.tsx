'use client'
import { RegisterForm } from "@/components/forms/RegisterForm"
import { PAGE_VARIANTS } from "@/constants/PageVariant"
import { motion } from "framer-motion"
const Page = () => {
    return (
        <div className=" h-screen flex justify-center items-center">
            <RegisterForm />
        </div>
    )
}
export default Page;