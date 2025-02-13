import React from "react";

import { Stack } from "expo-router";
import index from ".";
import { ThemeProvider } from "@/context/theme.context";

export default function _layout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
