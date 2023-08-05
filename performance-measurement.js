const { performance } = require('perf_hooks');

function withPerformanceMeasurement(func, input) {
  performance.mark('start');
  func(input);
  performance.mark('end');
  return performance.measure('sort', 'start', 'end');
}

module.exports = withPerformanceMeasurement;
