import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import IconButton from "@suid/material/IconButton";
import Chip from "@suid/material/Chip";
import { getSavedPokemons } from "../../services/pokemon.service";

export function MainHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon App
          </Typography>

          <Chip label={getSavedPokemons().length} color="warning" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
