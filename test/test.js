describe('This test', function() {
  it('should always return true', function() {
    expect(true).toBe(true);
  });
});

describe('Add', function() {
  it('should add two numbers together', function() {
    expect(add(1, 2)).toBe(3);
    expect(add(6, 3)).toBe(9);
  })
})
