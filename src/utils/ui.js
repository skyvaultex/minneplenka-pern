export function isActive(selectedCategory, btnCategory) {
  return selectedCategory === btnCategory 
  ? 'active'
  : ''
};