import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@suid/material";
import { TransitionProps } from "@suid/material/transitions";
import { get, isEmpty } from "lodash";
import { JSXElement } from "solid-js";
import { getBasicModal } from "../../global-signals/modal.signal";

const Transition = function Transition(
  props: TransitionProps & {
    children: JSXElement;
  }
) {
  return <Slide direction="up" {...props} />;
};

export const Modal = () => {
  return (
    <Dialog
      TransitionComponent={Transition}
      open={getBasicModal().isOpen}
      onClose={get(getBasicModal(), "handleClose")}
    >
      {!isEmpty(getBasicModal().title) && (
        <DialogTitle>{get(getBasicModal(), "title")}</DialogTitle>
      )}
      <DialogContent>
        {!isEmpty(getBasicModal().description) && (
          <DialogContentText>
            {get(getBasicModal(), "description")}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        {!isEmpty(getBasicModal().primaryButton) && (
          <Button onClick={get(getBasicModal(), "primaryButton.handleClick")}>
            {get(getBasicModal(), "primaryButton.btnText")}
          </Button>
        )}

        {!isEmpty(getBasicModal().secondaryButton) && (
          <Button onClick={get(getBasicModal(), "secondaryButton.handleClick")}>
            {get(getBasicModal(), "secondaryButton.btnText")}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
