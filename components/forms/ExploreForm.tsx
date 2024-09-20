import { IUserExploreInfo } from "@/interfaces/IUserExploreInfo";
import { Checkbox } from "antd";
import { Form, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ExploreForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserExploreInfo>();
  const { t } = useTranslation();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center w-96">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">{t("explore")}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1 text-sm">
            <input
              type="text"
              id="firstname"
              placeholder={t("FirstNameSign")}
              {...register("firstname", { required: "firstname is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">
                {errors.firstname?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              placeholder={t("LastNameSign")}
              id="lastname"
              {...register("lastname", { required: "Last name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname?.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              placeholder={t("EmailSign")}
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            )}
          </div>
          {/* <div className="space-y-1 text-sm">
                        <input
                            type="text"
                            placeholder="0 912 345 678"
                            id="phone"
                            {...register('phone', { required: 'Phone is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone?.message}</p>}
                    </div> */}
          <div className="flex items-start gap-2">
            <Checkbox
              {...register("termOfUse", {
                required:
                  "You must agree with the term of use in order to continue",
              })}
            />
            <p>
              {t("PriNoticeSign")}
            </p>
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            {t("ButtonSign")}
          </button>
        </form>
      </div>
    </div>
  );
};
