import { Component, createSignal, Match, Switch } from "solid-js";
import { Grid, ToggleButton, ToggleButtonGroup } from "@suid/material";
export type { Component } from "solid-js";
import { styled } from "@suid/material/styles";
import { PokemonList } from "../PokemonList/PokemonList";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&:first-of-type": {
      "&:hover": {
        backgroundColor: "transparent",
      },
      borderRadius: "0px",
      width: "100%",
      color: "#746692",
    },
    "&:first-of-type.Mui-selected": {
      borderRadius: "0px",
      borderBottom: "2px solid #1976d2",
      color: "#1976d2",
      backgroundColor: "transparent",
      width: "100%",
    },
  },
}));

export const HorizontalTab: Component = () => {
  const [getSelectedTab, setSelectedTab] = createSignal(0);
  return (
    <Grid container textAlign="center">
      <StyledToggleButtonGroup
        color="primary"
        sx={{ width: "100%" }}
        value={getSelectedTab()}
        exclusive
        onChange={(_event, newValue) => {
          if (newValue !== null) {
            setSelectedTab(newValue);
          }
        }}
      >
        <Grid item xs={6}>
          <ToggleButton value={0}>My Pokemons</ToggleButton>
        </Grid>
        <Grid item xs={6}>
          <ToggleButton value={1}>Pokemon List</ToggleButton>
        </Grid>
      </StyledToggleButtonGroup>

      <Switch fallback={<div>No Encontrado</div>}>
        <Match when={getSelectedTab() === 0}>
          <PokemonList />
        </Match>
        <Match when={getSelectedTab() === 1}>
          <div>Content 2</div>
        </Match>
      </Switch>
    </Grid>
  );
};
