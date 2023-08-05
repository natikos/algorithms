const dataset = require('../dataset.json');
const withPerformanceMeasurement = require('../performance-measurement');

function bubbleSort(input) {
  let currentIndex = 0;
  let finishIndex = input.length - 1;
  let isSwap = false;

  while (currentIndex < finishIndex) {
    const currentElement = input[currentIndex];
    const nextIndex = currentIndex + 1;
    const nextElement = input[nextIndex];

    if (currentElement > nextElement) {
      input[currentIndex] = nextElement;
      input[nextIndex] = currentElement;
      isSwap = true;
    }

    const noNextElement = currentIndex !== finishIndex - 1;

    if (noNextElement) {
      currentIndex = nextIndex;
    } else if (isSwap) {
      currentIndex = 0;
      isSwap = false;
    } else {
      return input;
    }
  }
}

const source = 'random';
const input = dataset['100000'][source];

const executionTime = withPerformanceMeasurement(bubbleSort, input);
console.log(`Bubble Sort (${source}): ${input.length} elements - ${(executionTime / 1000).toFixed(2)}s`);
