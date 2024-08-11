import { IContactInfo } from "@/interfaces/IContactInfo";
import { useForm } from "react-hook-form";

import { useTranslation } from 'react-i18next';


export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IContactInfo>();
  const onSubmit = (data: IContactInfo) => {
    console.log(data);
  };
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center w-full max-w-2xl mx-auto">
      <div className="w-full p-8 space-y-6 bg-white rounded-lg shadow-2xl mt-10">
        <h1 className="text-3xl font-bold text-center">{t('AboutAtHeader')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="firstname"
              {...register("name", { required: "First name is required" })}
              className="peer z-0 w-full px-4 py-3 pt-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext placeholder-transparent"
              placeholder=" "
            />
            <label
              htmlFor="firstname"
              className="absolute top-0 left-4 text-gray-600 transition-transform duration-300 transform -translate-y-1/2 scale-85 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:z-10 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-maintext"
            >
              {t('NameCtForm')}
            </label>
            {errors.name && (
              <p className="text-red-500 text-base mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="peer w-full px-4 py-3 pt-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext focus:z-10 placeholder-transparent"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute top-0 left-4 text-gray-600 transition-transform duration-300 transform -translate-y-1/2 scale-85 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-maintext"
            >
              {t('MailCtForm')}
            </label>
            {errors.email && (
              <p className="text-red-500 text-base mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="peer w-full px-4 py-3 pt-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext placeholder-transparent"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute top-0 left-4 text-gray-600 transition-transform duration-300 transform -translate-y-1/2 scale-85 origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-maintext"
            >
              {t('MessCtForm')}
            </label>
            {errors.message && (
              <p className="text-red-500 text-base mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="uppercase font-bold block w-full py-4 text-center bg-mainbg text-white hover:text-black hover:shadow-xl hover:shadow-mainbg transition-colors duration-500 ease-in-out"
          >
            {t('ButCtForm')}
          </button>
        </form>
      </div>
    </div>
  );
};
