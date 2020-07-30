import { StatusBar } from "expo-status-bar";
import React from "react";

import { TransactionScreenStack } from "./navigation/TransactionScreenStack";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <TransactionScreenStack />
    </>
  );
}
