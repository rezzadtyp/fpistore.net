import { axiosInstance } from "@/lib/axios"
import { AxiosError } from "axios"
import { useState } from "react"

interface useGetOtpPayload {
  email: string
}

interface IResponseData {
  message: string
  emails: [
    {
      subject: string
      date: string
      link: string
    }
  ]
}

const useGetOTP = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<IResponseData>()
  const [error, setError] = useState<string | null>(null)

  const getOtp = async (payload: useGetOtpPayload) => {
    setIsLoading(true)
    setError(null)
    try {
      const { data: responseData } = await axiosInstance.post(
        "https://api.fpiinfo.com/api/mail",
        // "http://localhost:8000/api/mail",
        {
          email: payload.email,
        }
      )
      console.log(responseData)
      setData(responseData)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data)
        setError(error.response?.data?.message || "An error occurred")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { getOtp, isLoading, data, error }
}

export default useGetOTP
