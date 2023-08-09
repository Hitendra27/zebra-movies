import request from "supertest";
import { app } from "../app";
import * as movieService from "../services/movie_service";

jest.mock("../services/movie_service");

describe("Movie Controller Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /health", () => {
    test("should respond with a health message", async () => {
      const res = await request(app).get("/health");
      expect(res.status).toEqual(200);
      expect(res.text).toEqual("Server is running");
    });
  });

  describe("GET /movies", () => {
    test("should get mocked movies successfully", async () => {
      const mockMovies = [
        {
          id: 346698,
          title: "Barbie",
          overview: "Barbie and Ken are having the time of their lives",
        },
        {
          id: 26262,
          title: "Meg 2: The Trench",
          overview:
            "An exploratory dive into the deepest depths of the ocean of a daring research team",
        },
      ];
      (movieService.getMovies as any).mockResolvedValue(mockMovies);

      const res = await request(app).get("/movies");
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(mockMovies);
    });
  });

  describe("GET /search", () => {
    test("should get mocked search results successfully", async () => {
      const mockSearchResults = [{ id: 1, title: "Barbie" }];
      (movieService.filterByGenres as any).mockResolvedValue(mockSearchResults);
      (movieService.searchByString as any).mockResolvedValue(mockSearchResults);

      const res = await request(app)
        .get("/search")
        .query({ query: "Barbie", genres: "" });
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(mockSearchResults);
    });
  });

  describe("GET /genres", () => {
    test("should get mocked genres successfully", async () => {
      const mockGenres = {
        genres: [
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 16,
            name: "Animation",
          },
        ],
      };
      (movieService.getGenres as any).mockResolvedValue(mockGenres);

      const res = await request(app).get("/genres");
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(mockGenres);
    });
  });

  describe("GET /latest", () => {
    test("should get mocked latest movies successfully", async () => {
      const mockLatestMovies = {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
      };
      (movieService.getLatest as any).mockResolvedValue(mockLatestMovies);
      const res = await request(app).get("/latest");
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(mockLatestMovies);
    });
  });

  describe("GET /upcomingMovies", () => {
    test("should get mocked upcoming movies successfully", async () => {
      const mockUpcomingMovies = {
        dates: {
          maximum: "2023-08-31",
          minimum: "2023-08-08",
        },
        results: [
          {
            adult: false,
            backdrop_path: "/vbt3n34eNLBJHIBtRnmKPbHD5G0.jpg",
            genre_ids: [28, 18],
            id: 980489,
            original_language: "en",
            original_title: "Gran Turismo",
            overview:
              "The ultimate wish fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
            popularity: 144.742,
            poster_path: "/bGiNbWaWQxuyIeuajujvsQRJw9y.jpg",
            release_date: "2023-08-11",
            title: "Gran Turismo",
            video: false,
            vote_average: 7.6,
            vote_count: 9,
          },
        ],
      };
      (movieService.getUpcomingMovies as any).mockResolvedValue(
        mockUpcomingMovies
      );

      const res = await request(app).get("/upcomingMovies");
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(mockUpcomingMovies);
    });
  });
});
