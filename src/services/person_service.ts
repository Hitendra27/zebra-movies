interface Person {
  name: string;
  biography: string;
  place_of_birth: string;
  // Add more properties here if needed
}

export const getPersonById = async (
  personId: string
): Promise<Person | null> => {
  try {
    const url = `${process.env.BASE_URL}person/${personId}?api_key=${process.env.API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const personDetails: Person = await response.json();
    return personDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("Unknown error occurred.");
    }
    return null;
  }
};
