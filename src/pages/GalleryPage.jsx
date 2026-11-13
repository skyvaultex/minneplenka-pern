import './GalleryPage.css'
import { TagsComponent } from '../components/TagsComponent'
import { useState, useMemo } from 'react'
import { Link } from 'react-router'
import { inputFilter, categoryFilter } from '../utils/filter.js'
import { isActive } from '../utils/ui.js'
import { FavoritesCounter } from '../components/FavoritesCounter.jsx'
import { FavoriteButton } from '../components/FavoriteButton.jsx'


export function GalleryPage({ projects }) {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const filteredGallery = useMemo(() =>
    inputFilter(search, categoryFilter(category, projects)), [search, projects, category]
  );


  return (
    <main>
        <FavoritesCounter />
        <div className="filter-bar">
          <span> filter by </span>
          <button
            className={`category-button ${isActive(category, 'All')}`}
            onClick={() => { setCategory('All') }}
          >
            All
          </button>
          <button
            className={`category-button ${isActive(category, 'Architecture')}`}
            onClick={() => { setCategory('Architecture') }}
          >
            Architecture
          </button>
          <button className={`category-button ${isActive(category, 'Real Estate')}`}
            onClick={() => { setCategory('Real Estate') }}
          >
            Real Estate
          </button>
          <button
            className={`category-button ${isActive(category, 'Nature')}`}
            onClick={() => { setCategory('Nature') }}
          >
            Nature
          </button>
          <button
            className={`category-button ${isActive(category, 'Portraits')}`}
            onClick={() => { setCategory('Portraits') }}
          >
            Portraits
          </button>
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
            type="text"
            placeholder="Search by Title, Location"
          />

          <span>
            Showing {filteredGallery.length} out of {projects.length}
          </span>
        </div>


        <div className="gallery-container">
          {filteredGallery.map(project => {
            const { id, title, description, media, author, location, tags } = project;
            return (
              <div className="gallery-card" key={id}>
                  <img className="gallery-thumbnail" src={media[0].url} />
                  <div className="gallery-card-footer">
                    <div className="title-container">
                      <h2 className="gallery-card-title">{title}</h2>
                    </div>
                    <h3 className="gallery-card-description">{description}</h3>
                    <p className="gallery-card-author"> Author: {author} in {location} </p>
                    <div className="gallery-card-tags"><TagsComponent tags={tags} /></div>
                    <div className="button-wrap">
                      <Link className="button-primary" to={`/projects/${id}`}>View photos</Link>
                    </div>
                    <FavoriteButton id={id} />
                  </div>
              </div>
            )
          }
          )}
          {filteredGallery.length > 0
            ?
            (
              <div className="gallery-card all-card">
                <h1>View More</h1>
              </div>
            )
            :
            (
              <div className="gallery-card no-card">
                <h1>No items found</h1>
              </div>
            )
          }
        </div>
    </main>
  )
}