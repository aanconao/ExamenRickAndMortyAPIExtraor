import { GraphQLError } from "graphql";
import { CharactersFromAPI } from "../../types.ts";

export const characters = async (ids: string[]): Promise<CharactersFromAPI[]> => {
  const result = await Promise.all(ids.map(async (e) => {
      const url = ("https://rickandmortyapi.com/api/character/"+e);
      const response = await fetch(url);
      if (response.status !== 200)throw new GraphQLError("No se ha encontrado el Character");
      return await response.json() as CharactersFromAPI;
    }))
  return result;
};
