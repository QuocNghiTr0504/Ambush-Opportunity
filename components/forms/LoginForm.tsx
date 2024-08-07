import { ILoginInfo } from "@/interfaces/ILoginInfo";
import { loginThunk } from "@/redux/slices/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { LocalizedLink } from "../commons/LocalizedLink";


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginInfo>();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const onSubmit = async (loginInfo: ILoginInfo) => {
        dispatch(loginThunk({ loginInfo }));

    }
    useEffect(() => {
        if (isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router])
    return (

        <div className="flex items-center justify-center w-96">
            <div className="w-full flex flex-col h-86 px-8 py-6 space-y-3 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 flex-1 py-4">
                    <div className="text-sm ">
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Username"
                            {...register('email', { required: 'Username is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
                    </div>
                    <div className="text-sm">
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="block w-full p-3 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                    >
                        Sign in
                    </button>

                </form>
                <div className="text-center">
                    <p className="mt-2 text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <LocalizedLink href="/register" className="text-indigo-500 hover:text-indigo-600">
                            Register here
                        </LocalizedLink>
                    </p>
                </div>
            </div>
        </div>
    )
}