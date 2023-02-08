import addScore from "../modules/add-score";


jest.mock('node-fetch', () => jest.fn().mockReturnValue(Promise.resolve({
  ok: true,
  json: () => Promise.resolve({"result": "Leaderboard score created correctly."})
})));

test('addScore should send a score to the backend', async () => {
  const result = await addScore('Yorina', 15);
  expect(result).toEqual({
    "result": "Leaderboard score created correctly."
  });
});
