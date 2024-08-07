'use client'
import { IRegisterInfo } from "@/interfaces/IRegisterInfo";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import CountryCodeSelect from "../commons/CountryCodeSelect";
import { validatePhoneNumber } from "@/helpers/phoneNumberValidator";
import { registerThunk } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CountrySelect from "../commons/CountrySelect";

export const RegisterForm = () => {
    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm<IRegisterInfo>();



    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = async (registerInfo: IRegisterInfo) => {
        let phoneIsValid = validatePhoneNumber(registerInfo.countryCallingCode, registerInfo.phoneNumber);
        if (!phoneIsValid) {
            setError('phoneNumber', {
                type: 'validate',
                message: 'Phone number is invalid',
            });
            return
        }
        const result = await dispatch(registerThunk({ registerInfo }));
        if (result.meta.requestStatus === 'fulfilled') {
            router.push('/confirm-email')
        }
    };
    // Implement logic to handle country selection (e.g., set selectedCountry state)
    return (
        <div className="flex items-center justify-center w-96">
            <div className="w-full max-w-2xl p-8 space-y-3 bg-white rounded-lg shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <CountrySelect countryCode="countryCode" setValue={setValue} />
                        <input
                            type="text"
                            id="countryCode"
                            {...register('countryCode', { required: 'countryCode is required' })}
                            required
                            className="w-full hidden px-4 py-2 h-full border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext"
                            placeholder="0 121 777 511"
                        />
                        {errors.countryCode && <p className="text-red-500 text-sm">{errors.countryCode.message}</p>}
                    </div>
                    <div className=" text-sm">
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            {...register('username', { required: 'Username is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext"
                            required
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>
                    <div className=" text-sm">
                        <input
                            type="text"
                            placeholder="Email"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className=" text-sm">
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <div className="gap-1 h-10 text-sm flex items-center">
                        <CountryCodeSelect countryCallingCode="countryCallingCode" setValue={setValue} required />
                        <input
                            type="text"
                            id="phone"
                            {...register('phoneNumber', { required: 'Phone is required' })}
                            className="w-full px-4 py-2 h-full border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext"
                            required
                            placeholder="0 121 777 511"
                        />

                        <input
                            type="text"
                            id="countryCallingCode"
                            {...register('countryCallingCode', { required: 'countryCallingCode is required' })}
                            className="w-full hidden px-4 py-2 h-full border rounded-md focus:outline-none focus:ring-2 focus:ring-maintext"
                            required
                            placeholder="0 121 777 511"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                        {errors.countryCallingCode && <p className="text-red-500 text-sm">{errors.countryCallingCode.message}</p>}
                    </div>


                    <button
                        type="submit"
                        className="block w-full p-3 text-center text-white rounded-md bg-gradient-to-r from-extratext to-maintext hover:text-black hover:opacity-90 hover:shadow-maintext hover:shadow-xl"
                    >
                        Sign up
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="text-extratext hover:text-maintext hover:shadow-maintext">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

