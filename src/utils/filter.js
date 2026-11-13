export function categoryFilter(filter, projects) {
  if (filter === 'All') {
    return projects;
  } else {
    return projects.filter(project => project.tags.includes(filter));
  }
}

export function inputFilter(input, projects, filteredGallery = projects) {
  const normalizedInput = input.toLowerCase()
  return filteredGallery.filter(project => {
    return project.title.toLowerCase().includes(normalizedInput) || project.location.toLowerCase().includes(normalizedInput);
  });
}