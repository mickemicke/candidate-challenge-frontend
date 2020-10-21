import createEntities from "./createEntities";

test("duplicate events into entities", () => {
  const event = {
    activity: "meeting",
    endDate: "2019-02-27 07:00",
    id: 2,
    location: "online",
    startDate: "2019-02-26 22:00",
    _id: "5f870246d899cd03e8b4ee9e",
  };
  const entities = createEntities([event]);
  expect(entities).toEqual([
    {
      ...event,
      hasDuplicate: true,
    },
    {
      ...event,
      isDuplicate: true,
    },
  ]);
});
