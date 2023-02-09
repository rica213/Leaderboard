import displayScores from '../modules/display-scores.js';

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve(
    {
      result: [
        {
          user: 'John Doe',
          score: 42,
        },
        {
          user: 'Peter Parker',
          score: 35,
        },
        {
          user: 'Wonder Woman',
          score: 50,
        },
      ],
    },
  ),
}));

test('Display scores', async () => {
  const scores = await displayScores();
  expect(scores).toEqual({
    result: [
      {
        user: 'John Doe',
        score: 42,
      },
      {
        user: 'Peter Parker',
        score: 35,
      },
      {
        user: 'Wonder Woman',
        score: 50,
      },
    ],
  });
});