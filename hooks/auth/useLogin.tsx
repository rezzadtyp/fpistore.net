import { axiosInstance } from "@/lib/axios"
import { AxiosError } from "axios"
import useAuthStore from "../useAuthStore"

interface loginPayload {
  email: string
  password: string
}

const useLogin = () => {
  const { login, setUserInfo } = useAuthStore()
  const loginAction = async (payload: loginPayload) => {
    try {
      const { data } = await axiosInstance.post("auth/sign-in", payload)

      localStorage.setItem("accessToken", data.accessToken)
      setUserInfo(data.data)
      login()
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data)
      }
    }
  }
  return { loginAction }
}

export default useLogin
