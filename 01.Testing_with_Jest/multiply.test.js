const multiply = require('./multiply')

describe('multiply',() =>{
  it('multiply 3 and 2', () =>{
    expect(multiply(3,2)).toBe(6)
  })
})