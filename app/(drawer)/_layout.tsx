import { Drawer } from "expo-router/drawer";
import React from "react";

export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen name="index" options={{ title: "MultiVida", headerShown: false}} />
            <Drawer.Screen name="ajuda" options={{ title: "Motivação", headerShown: true }} />
            <Drawer.Screen name="dicas" options={{ title: "Dicas", headerShown: true }} />
            <Drawer.Screen name="recursos" options={{ title: "Recursos", headerShown: true }} />
        </Drawer>
    )
}
