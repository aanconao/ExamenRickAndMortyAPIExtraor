import { GraphQLError } from "graphql";
import { CharactersFromAPI, LocationFromApi } from "../types.ts";

export const Location = {
  characters: async (parent: LocationFromApi): Promise<CharactersFromAPI[]> => {
    return await Promise.all(
      parent.characters.map(async (l) => {
        const response = await fetch(l);
        if (response.status !== 200) throw new GraphQLError("Error para obtener los personajes desde la localizaicon");
        return await response.json() as CharactersFromAPI;
      }))
  }
}
