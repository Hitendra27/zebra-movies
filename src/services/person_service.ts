export const getPersonDetails = async (personId: string | undefined) => {
  try {
    const url = `${process.env.BASE_URL}person/${personId}?api_key=${process.env.API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    const personDetails = await response.json();
    return personDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
};
