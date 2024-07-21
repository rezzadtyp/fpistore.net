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
        const userLocalStorage = localStorage.getItem("accessToken")
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
        if (userLocalStorage) {
          set({ isLoggedIn: true, userInfo })
        }
      },
      logout: () => {
        set({ isLoggedIn: false, userInfo: { email: null, name: null } })
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
