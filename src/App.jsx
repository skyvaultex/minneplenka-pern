import './App.css'
import { Route, Routes } from 'react-router'
import { GalleryPage } from './pages/GalleryPage'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { projects } from './data/projects.js'
import { FavoritesProvider } from './context/FavoritesProvider.jsx'


function App() {

  return (
    <>
      <FavoritesProvider>
      <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage projects={projects} />} />
          <Route path="/projects/:projectId" element={<ProjectPage projects={projects} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </FavoritesProvider>
    </>
  )
}

export default App;
