import axios from "axios";
import {
  createSignal,
  createResource,
  Signal,
  Accessor,
  onCleanup,
  Owner,
  runWithOwner,
} from "solid-js";
import { GetPokemonResponse } from "../shared/interfaces/get-pokemon-response";
import { PokemonInfo } from "../shared/interfaces/get-pokemons-response";
import {
  getLocalPokemons,
  setLocalPokemon,
} from "../shared/utils/local-storage/pokemon";

export const [getPokemonList, setPokemonList]: Signal<PokemonInfo[]> =
  createSignal([]);

export const [getSavedPokemons, setSavedPokemons]: Signal<
  GetPokemonResponse[]
> = createSignal(getLocalPokemons());

const getPokemons = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );
  console.log("calling resource getPokemons");

  return response.data.results;
};

export const getPokemonsResource = createResource<PokemonInfo[]>(getPokemons);

const getPokemonByUrl = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const result: GetPokemonResponse = response.data;
  console.log("calling getPokemonByUrl", result);
  setLocalPokemon(result);
  setSavedPokemons(getLocalPokemons());

  return result;
};

export const getPokemonByUrlResource = (name: string, owner: Owner) => {
  console.log("owner", owner);

  runWithOwner(owner, () => {
    const [getName, setName] = createSignal("");
    setName(name);
    return createResource<GetPokemonResponse, string>(getName, getPokemonByUrl);
  });
};
