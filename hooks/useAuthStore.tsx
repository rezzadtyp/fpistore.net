import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthStore {
  isLoggedIn: boolean
  userInfo: {
    email: string | null
    name: string | null
  }
  login: () => void
  logout: () => void
  setUserInfo: (userInfo: { email: string; name: string }) => void
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      userInfo: {
        email: null,
        name: null,
      },
      login: () => {
        const token = localStorage.getItem("accessToken")
        if (token) {
          set({ isLoggedIn: true })
          localStorage.setItem("Authorization", `Bearer ${token}`)
        }
      },
      logout: () => {
        set({ isLoggedIn: false })
        localStorage.clear()
      },
      setUserInfo: (userInfo) => {
        set({ userInfo })
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
      },
    }),
    {
      name: "userLoginStatus",
    }
  )
)

export default useAuthStore
