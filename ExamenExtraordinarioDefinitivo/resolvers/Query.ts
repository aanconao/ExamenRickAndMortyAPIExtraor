import { CharactersFromAPI } from "../types.ts";
import { character } from "./Query/character.ts";
import { characters } from "./Query/characters.ts";

export const Query = {
  character: async (_: unknown,args: { ids: string }): Promise<CharactersFromAPI> => {
    return await character(args.ids);
  },
  charactersByIds: async (_: unknown,args: { ids: string[] }): Promise<CharactersFromAPI[]> => {
    return await characters(args.ids);
  },
};
