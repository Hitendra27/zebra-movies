import request from "supertest";
import express from "express";
import { router } from "./routes";

const app = express();
app.use("/", router);

describe("Zebra Movie API Routes", () => {
  test('It should respond with 200 and "Server is running" on /health', async () => {
    // Arrange
    // Nothing to arrange here as we testing a single route only here

    // Act
    const response = await request(app).get("/health");

    // Assert
    expect(response.status).toBe(200);
    expect(response.text).toBe("Server is running");
  });

  test("It should respond with 200 and list of genres on /genres", async () => {
    // Arrange
    // Nothing to arrange here as we testing a single route only here

    // Act
    const response = await request(app).get("/genres");

    // Assert
    expect(response.status).toBe(200);
  });

  test("It should response with 200 and list of latest onf /latest", async () => {
    // Arrange
    // Nothing to arrange here as we testing a single route only here

    // Act
    const response = await request(app).get("/latest");

    // Assert
    expect(response.status).toBe(200);
  });

  test("It should response with 200 and list of latest onf /person/:id", async () => {
    // Arrange
    // Nothing to arrange here as we testing a single route only here

    // Act
    const response = await request(app).get("/person/:id");

    // Assert
    expect(response.status).toBe(200);
  });

  test("It should response with 200 and list of latest onf /movie/:id", async () => {
    // Arrange
    // Nothing to arrange here as we testing a single route only here

    // Act
    const response = await request(app).get("/movie/:id");

    // Assert
    expect(response.status).toBe(200);
  });

  test("It should response with 200 and list of latest onf /latest", async () => {
    // Arrange
    // Nothing to arrange here as we testing a single route only here

    // Act
    const response = await request(app).get("/upcomingMovies");

    // Assert
    expect(response.status).toBe(200);
  });
});
