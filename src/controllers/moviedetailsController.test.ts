import request from "supertest";
import { app } from "../app";
import * as moviedetailsService from "../services/moviedetails_service";

jest.mock("../services/moviedetails_service");

describe("Movie Details Controller Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /movie/:id", () => {
    test("should get movie details successfully", async () => {
      const mockMovieId = "346698";
      const mockMovieDetails = {
        id: 346698,
        budget: 145000000,
        genres: [
          {
            id: 35,
            name: "Comedy",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 14,
            name: "Fantasy",
          },
        ],
        title: "Barbie",
        overview:
          "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
        poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      };
      (moviedetailsService.getMovieById as any).mockResolvedValue(
        mockMovieDetails
      );

      const res = await request(app).get(`/movie/${mockMovieId}`);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(mockMovieDetails);
    });
    
  });

  describe("GET /movie/:invalid-ID", () => {
    test("should return 400 for invalid movie ID", async () => {
      (moviedetailsService.getMovieById as any).mockResolvedValue(null);

      const res = await request(app).get("/movie/346698666");
      console.log("Result :", res);

      expect(res.status).toEqual(400);
      expect(res.text).toEqual("Bad Request");
    });
  });


});
