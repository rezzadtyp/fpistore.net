import { axiosInstance } from "@/lib/axios"
import { AxiosError } from "axios"

const useRefresh = () => {
  const refreshAction = async (token: string) => {
    try {
      const response = await axiosInstance.post("/auth/refresh", token)

      const newToken = response.data.accessToken

      localStorage.setItem("Authorization", `Bearer ${newToken}`)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data)
        throw error
      }
    }
  }

  return { refreshAction }
}

export default useRefresh
