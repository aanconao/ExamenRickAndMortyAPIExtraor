import { GraphQLError } from "graphql";
import { CharactersFromAPI, EpisodeFromAPI } from "../types.ts";

export const Episode = {
  characters: async (parent: EpisodeFromAPI): Promise<CharactersFromAPI[]> => {
    return await Promise.all(parent.characters.map(async (a) => {
        const response = await fetch(a);
        if (response.status != 200) throw new GraphQLError("Error para obtener los peronajes desde episodios");
        return await response.json() as CharactersFromAPI
      }))
  }
}
