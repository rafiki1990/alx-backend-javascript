// 1-calcul.js

function calculateNumber(type, a, b) {
  // Round the numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  }

  if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  }

  if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  }

  throw new Error('Invalid type');
}

module.exports = calculateNumber;
