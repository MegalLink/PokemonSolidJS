import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemText from "@suid/material/ListItemText";
import AddIcon from "@suid/icons-material/Add";
import IconButton from "@suid/material/IconButton";
import Stack from "@suid/material/Stack";
import Box from "@suid/material/Box";
import Divider from "@suid/material/Divider";
import { Component, createEffect, getOwner } from "solid-js";
import { For } from "solid-js";
import { CircularProgress } from "@suid/material";

import { PokemonInfo } from "../../shared/interfaces/get-pokemons-response";
import { BasicModal } from "../../shared/interfaces/basic-modal";
import { dismissModal, setBasicModal } from "../../global-signals/modal.signal";
import {
  getPokemonByUrlResource,
  getPokemonsResource,
} from "../../services/pokemon.service";

export const PokemonList: Component = () => {
  const [data] = getPokemonsResource;

  createEffect(() => {
    console.log("rendering this");
  });
  const owner = getOwner();

  const handleClickAddIconButton = (
    event: MouseEvent,
    pokemon: PokemonInfo
  ) => {
    console.log("activating this");
    event.preventDefault();
    const modal: BasicModal = {
      isOpen: true,
      handleClose: () => {},
      title: `Desea agregar ${pokemon.name}?`,
      primaryButton: {
        btnText: "Aceptar",
        handleClick: () => {
          getPokemonByUrlResource(pokemon.name, owner!);
          dismissModal();
        },
      },
      secondaryButton: {
        btnText: "Cancelar",
        handleClick: () => {
          dismissModal();
        },
      },
    };

    setBasicModal(modal);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <List>
        <For each={data()} fallback={() => <CircularProgress />}>
          {(pokemon, index) => (
            <ListItem>
              <ListItemButton>
                <ListItemText>{pokemon.name}</ListItemText>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    onClick={(e) => {
                      handleClickAddIconButton(e, data()![index()]);
                    }}
                    color="primary"
                    aria-label="add pokemon"
                  >
                    <AddIcon />
                  </IconButton>
                </Stack>
              </ListItemButton>
            </ListItem>
          )}
        </For>
      </List>
      <Divider />
    </Box>
  );
};
