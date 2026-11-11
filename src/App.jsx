import './App.css'
import { Route, Routes } from 'react-router'
import { GalleryPage } from './pages/GalleryPage'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'


function App() {

  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
