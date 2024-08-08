import { IUserExploreInfo } from "@/interfaces/IUserExploreInfo";
import { Checkbox } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ExploreForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IUserExploreInfo>();
    const { t } = useTranslation();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent p-4">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">{t('explore')}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-1">
                        <input
                            type="text"
                            id="firstname"
                            placeholder="First name"
                            {...register('firstname', { required: 'Firstname is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maintext"
                        />
                        {errors.firstname && <p className="text-red-600 text-sm">{errors.firstname.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Last name"
                            {...register('lastname', { required: 'Last name is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maintext"
                        />
                        {errors.lastname && <p className="text-red-600 text-sm">{errors.lastname.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register('email', { required: 'Email is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maintext"
                        />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <input
                            type="text"
                            id="phone"
                            placeholder="Phone number"
                            {...register('phone', { required: 'Phone number is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maintext"
                        />
                        {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
                    </div>
                    <div className="flex items-start space-x-2">
                        <Checkbox 
                            {...register('termOfUse', { required: 'You must agree with the terms of use' })}
                            className="accent-maintext text-maintext"
                        />
                        <p className="text-sm text-gray-700">
                            I agree to share my personal data (full name, email address, and phone number) with the partners of Ambush Opportunity for their own purposes. Ambush Opportunity&apos;s partners are investment education firms, data brokers, and intermediaries. To find out more about the processing of your personal data and your rights, please consult our Data Privacy Notice.
                        </p>
                    </div>
                    {errors.termOfUse && <p className="text-red-600 text-sm">{errors.termOfUse.message}</p>}
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-gradient-to-r from-extratext to-maintext hover:text-black hover:opacity-90 hover:shadow-maintext rounded-md shadow-xl transition-shadow duration-300"
                    >
                        Learn more
                    </button>
                </form>
            </div>
        </div>
    )
}
