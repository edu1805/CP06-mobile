import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom", // ou "fade", "slide_from_bottom"
      }}
    >
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
