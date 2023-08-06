export const getPersonDetails = async (personId: string | undefined) => {
  try {
    const url = `https://api.themoviedb.org/3/person/${personId}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
    const response = await fetch(url);
    const personDetails = await response.json();
    return personDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
