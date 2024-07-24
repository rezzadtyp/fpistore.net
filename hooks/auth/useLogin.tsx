import { axiosInstance } from "@/lib/axios"
import { AxiosError } from "axios"
import useAuthStore from "../useAuthStore"
import { useRouter } from "next/navigation"

interface loginPayload {
  email: string
  password: string
}

const useLogin = () => {
  const { login, setUserInfo } = useAuthStore()
  const router = useRouter()
  const loginAction = async (payload: loginPayload) => {
    try {
      const { data } = await axiosInstance.post("auth/sign-in", payload)

      localStorage.setItem("accessToken", data.accessToken)
      setUserInfo(data.data)
      login()
      router.push("/dashboard/home")
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data)
      }
    }
  }
  return { loginAction }
}

export default useLogin
