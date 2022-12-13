const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('searches for candies starting with Ma, price under 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it('searches for candies starting with Ma, price under 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]); // Maltesers excluded: it's more than 2
  });

  it('searches for candies starting with S, price under 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]); 
  });
    
  it('searches for candies starting with S, price under 4', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]); // Starbust excluded: it's more than 4
  });
    
  it('searches for candies starting with ma, price under 10', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});