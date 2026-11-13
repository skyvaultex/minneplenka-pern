import './TagsComponent.css'

export function TagsComponent({ tags }) {
  return tags.map(tag => {
    return (
      <div key={tag} className="tag">
        {tag}
      </div>
    )
  })
}