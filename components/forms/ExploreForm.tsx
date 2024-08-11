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
                            placeholder={t('FirstNameSign')}
                            {...register('firstname', { required: 'Firstname is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maintext"
                        />
                        {errors.firstname && <p className="text-red-600 text-sm">{errors.firstname.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <input
                            type="text"
                            id="lastname"
                            placeholder={t('LastNameSign')}
                            {...register('lastname', { required: 'Last name is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maintext"
                        />
                        {errors.lastname && <p className="text-red-600 text-sm">{errors.lastname.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <input
                            type="email"
                            id="email"
                            placeholder={t('EmailSign')}
                            {...register('email', { required: 'Email is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maintext"
                        />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <input
                            type="text"
                            id="phone"
                            placeholder={t('PhoneSign')}
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
                            {t('PriNoticeSign')}
                        </p>
                    </div>
                    {errors.termOfUse && <p className="text-red-600 text-sm">{errors.termOfUse.message}</p>}
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-mainbg hover:text-black hover:opacity-90 hover:shadow-mainbg rounded-md shadow-xl transition-colors duration-500 ease-in-out"
                    >
                        {t('ButtonSign')}
                    </button>
                </form>
            </div>
        </div>
    )
}
