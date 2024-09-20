import { IContactInfo } from "@/interfaces/IContactInfo";
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next";


export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IContactInfo>();
    const onSubmit = (data: any) => {
        console.log(data);
    }

    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-center w-[48rem]">
            <div className="w-full p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">{t('TitCtForm')}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-1 text-sm">
                        <input
                            type="text"
                            id="firstname"
                            placeholder={t('NameCtForm')}
                            {...register("name", { required: "First name is required" })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-1 text-sm">
                        <input
                            type="text"
                            placeholder={t('MailCtForm')}
                            id="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-1 text-sm">
                        <textarea
                            id="message"
                            placeholder={t('MessCtForm')}
                            {...register("message", { required: "Message is required" })}
                            rows={10}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="uppercase font-bold block w-full p-3 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                    >
                        {t('ButCtForm')}
                    </button>
                </form>
            </div>
        </div>
    );
}