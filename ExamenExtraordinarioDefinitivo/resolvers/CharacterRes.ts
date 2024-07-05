import { GraphQLError } from "graphql";
import { CharactersFromAPI, EpisodeFromAPI, LocationFromApi } from "../types.ts";

export const Character = {
  episode: async (parent: CharactersFromAPI): Promise<EpisodeFromAPI[]> => {
    const result = await Promise.all(parent.episodes.map(async (c) => {
        const response = await fetch(c);
        if (response.status != 200)throw new GraphQLError("Error paara encontrar episodios");
        return await response.json() as EpisodeFromAPI;
      }))
    return result;
  },
  location: async(parent: CharactersFromAPI): Promise<LocationFromApi[]> =>{
    const result = await Promise.all(parent.location.map(async (l)=>{
      const response = await fetch(l);
      if(response.status != 200)throw new GraphQLError("Error para encontrar la location");
      return await response.json() as  LocationFromApi;
    }))
    return result;
  }
}
