function max(...numbers) {
  return numbers.reduce( (prev, curt) => prev > curt ? prev : curt)
};