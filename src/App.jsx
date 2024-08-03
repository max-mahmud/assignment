import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import('./pages/Home'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"))
const MainPage = React.lazy(() => import('./pages/mainArea/MainPage'))

const App = () => {
  return (
    <>
    <Suspense fallback={<h4>Loding...</h4>}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard Routes */}
            <Route path="/" element={<MainPage />}>
              <Route path="" element={<Home />} />
              {/* <Route path="about" element={<About />} /> */}
            </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App