import { GraphQLError } from "graphql";
import { CharactersFromAPI } from "../../types.ts";

export const character = async (id: string): Promise<CharactersFromAPI> => {
  const url = ("https://rickandmortyapi.com/api/character/" + id);
  const response = await fetch(url);
  if (response.status != 200)throw new GraphQLError("Error para adquirir la informacion del personaje por ese id");
  return await response.json() as CharactersFromAPI;
};
