import "./index.css"
import { useEffect } from "react"
import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { useAuth } from "../features/auth/hook/useAuth"


function App() {

  const auth = useAuth()

  useEffect(() => {

    // wake the Render server in the background (fire and forget)
    fetch(import.meta.env.VITE_API_URL, { mode: "no-cors" }).catch(() => { })

    if (localStorage.getItem("veltrix_session")) {
      auth.handleGetMe()
    }

  }, [])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
