import useAuthStore from "../useAuthStore"
import { AxiosError } from "axios"
import useAxios from "../useAxios"

const useKeepLogin = () => {
  const { login } = useAuthStore()
  const { axiosInstance } = useAxios()
  const keepLogin = async () => {
    try {
      await axiosInstance.get("/auth/keep-login")
      login()
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data)
        throw error
      }
    }
  }

  return { keepLogin }
}

export default useKeepLogin
