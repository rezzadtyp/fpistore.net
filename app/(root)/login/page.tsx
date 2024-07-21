"use client"

import LoginForm from "@/components/form/LoginForm"
import { Button } from "@/components/ui/button"
import useAuthStore from "@/hooks/useAuthStore"

const LoginPage = () => {
  const { logout } = useAuthStore()
  const handleLogout = () => {
    logout()
    alert("success logout")
  }
  return (
    <div>
      <div>LOGIN</div>
      <LoginForm />
      <Button onClick={() => handleLogout()}>LOGOUT</Button>
    </div>
  )
}

export default LoginPage
