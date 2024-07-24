import { axiosInstance } from "@/lib/axios"
import { AxiosError } from "axios"
import { useEffect } from "react"
import useAuthStore from "./useAuthStore"
import useRefresh from "./auth/useRefresh"

const useAxios = () => {
  const { logout } = useAuthStore()
  const { refreshAction } = useRefresh()

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("Authorization")
        if (token) {
          config.headers.Authorization = token
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (err: AxiosError) => {
        if (err.response?.status === 401) {
          const token = localStorage.getItem("Authorization")

          if (!token) {
            localStorage.clear()
            logout()
            return Promise.reject(err)
          }

          try {
            await refreshAction(token)
            if (err.config) {
              const originalRequest = err.config
              const newToken = localStorage.getItem("Authorization")
              if (newToken) {
                originalRequest.headers.Authorization = newToken
              }
              return axiosInstance(originalRequest)
            }
          } catch (error) {
            localStorage.clear()
            logout()
            return Promise.reject(err)
          }
        }
        return Promise.reject(err)
      }
    )

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept)
      axiosInstance.interceptors.response.eject(responseIntercept)
    }
  }, [logout, refreshAction])

  return { axiosInstance }
}

export default useAxios
