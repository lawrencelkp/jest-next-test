const {sum} = require('./Util');

test('should return the sum of two integer numbers', () => {
    const answer = sum(1,2);
    expect(answer).toBe(3);
});
