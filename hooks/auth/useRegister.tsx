import { axiosInstance } from "@/lib/axios"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"

interface registerPayload {
  name: string
  email: string
  password: string
}

const useRegister = () => {
  const router = useRouter()
  const register = async (payload: registerPayload) => {
    try {
      await axiosInstance.post("auth/sign-up", payload)
      router.push("/login")
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data)
      }
    }
  }
  return { register }
}

export default useRegister
