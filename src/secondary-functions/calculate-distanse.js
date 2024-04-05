function calculatePosition(element) {
  const { left, width } = element.getBoundingClientRect();
  return left + width;
}

function calculateDistance(start, finish) {
  const startPosition = calculatePosition(start);
  const finishPosition = calculatePosition(finish);
  return finishPosition - startPosition;
}
export default calculateDistance;
