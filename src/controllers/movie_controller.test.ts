import request from "supertest";
import { app } from "../app";

// Test /movie endpoint
test("GET /movie should return correct object", async () => {
  const res = await request(app)
    .get("/test")
    .query({ title: "The Shawshank Redemption" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    id: 5,
    overview: "Man escapes prison in search of solidance",
    poster_path: "abcd.jpg",
    title: "The Shawshank Redemption",
  });
});
test("GET /movie with no param should return correct object", async () => {
  const res = await request(app).get("/movie");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "movie",
    name: "movie",
  });
});
test("GET /movie with different param should return correct object", async () => {
  const res = await request(app)
    .get("/movie")
    .query({ movieName: "Macchiato" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "movie",
    name: "Macchiato",
  });
});

//Test /movieLover endpoint
describe("Test movie API endpoint request", () => {
  test("GET /movielover should return correct message", async () => {
    const res = await request(app).get("/movielover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I looooooove movie!");
  });
});
