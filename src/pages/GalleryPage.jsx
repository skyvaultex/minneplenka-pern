import './GalleryPage.css'
import { projects } from '../data/projects'
import { TagsComponent } from '../components/TagsComponent'
import { useState } from 'react'


function filterGallery(filter) {
  if (filter === 'All') {
    return projects;
  } else {
    return projects.filter(project => project.tags.includes(filter));
  }
}

function inputSearch(input, filteredGallery = projects) {
  const normalizedInput = input.toLowerCase()
  return filteredGallery.filter(project => {
    return project.title.toLowerCase().includes(normalizedInput) || project.location.toLowerCase().includes(normalizedInput);
  });
}

function isActive(selectedCategory, btnCategory) {
  return selectedCategory === btnCategory 
  ? 'active'
  : ''
};

export function GalleryPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const filteredGallery = inputSearch(search, filterGallery(category));


  return (
    <main>
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
          onChange={(e) => {setSearch(e.target.value)}}
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
                  <button className="button-primary"><span>View photos</span></button>
                </div>
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