import { useParams } from "@solidjs/router";
import type { Component } from "solid-js";
export const FormPage: Component = () => {
  const params = useParams();

  return (
    <div>
      Form: {params.pokemonId ? `Update id:${params.pokemonId}` : "Create"}
    </div>
  );
};
