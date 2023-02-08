import addScore from "../modules/add-score";

global.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      'result': 'Leaderboard score created correctly.'
    })
  });
});

test('addScore should send a score to the backend', async () => {
  const result = await addScore('Jeannot', 25);
  expect(result).toEqual({
    'result': 'Leaderboard score created correctly.'
  });
});
