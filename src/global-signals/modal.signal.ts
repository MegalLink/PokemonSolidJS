import { createSignal, Signal } from "solid-js";
import { BasicModal } from "../shared/interfaces/basic-modal";

export const [getBasicModal, setBasicModal]: Signal<BasicModal> = createSignal({
  isOpen: false,
});

export const dismissModal = () =>
  setBasicModal({
    isOpen: false,
  });
