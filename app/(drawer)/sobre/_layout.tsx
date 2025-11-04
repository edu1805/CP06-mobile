import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

export default function SobreTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingBottom: 15,
          backgroundColor: "#f0f0f0",
        },
        tabBarLabelStyle: {
          fontSize: 20
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Integrantes",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contato"
        options={{
          title: "Contato",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
