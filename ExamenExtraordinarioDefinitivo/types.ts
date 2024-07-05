export type CharactersFromAPI = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  episodes: string[];
  location: string[];
  url: string;
  created: string;
};

export type LocationFromApi = {
  id: string;
  url: string;
  characters: string[];
};

export type EpisodeFromAPI = {
  id: string;
  name: string;
  characters: string[];
};
