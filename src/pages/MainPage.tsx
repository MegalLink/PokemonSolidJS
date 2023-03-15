import type { Component } from "solid-js";
import { HorizontalTab } from "../components/HorizontalTab/TabPanel";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { Modal } from "../components/Modal/Modal";
export const MaingPage: Component = () => {
  return (
    <div>
      <Modal />
      <MainHeader />
      <HorizontalTab />
    </div>
  );
};
