import { PersonDetails } from "../types/interfaces";

export const getPersonById = async (
  personId: string
): Promise<PersonDetails | null> => {
  try {
    const url = `${process.env.BASE_URL}person/${personId}?api_key=${process.env.API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const personData = await response.json();

    const personDetails: PersonDetails = {
      biography: personData.biography,
      birthday: personData.birthday,
      id: personData.id,
      known_for_department: personData.known_for_department,
      name: personData.name,
      place_of_birth: personData.place_of_birth,
      profile_path: personData.profile_path,
    };

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
