import addScore from '../modules/add-score.js';

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({
    result: 'Leaderboard score created correctly.',
  }),
}));

test('addScore should send a score to the backend', async () => {
  const result = await addScore('Jeannot', 25);
  expect(result).toEqual({
    result: 'Leaderboard score created correctly.',
  });
});
