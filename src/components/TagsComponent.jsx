import './TagsComponent.css'

export function TagsComponent({ tags }) {
  console.log(Array.isArray(tags));
  return tags.map(tag => {
    return (
      <div className="tag">
        {tag}
      </div>
    )
  })
}