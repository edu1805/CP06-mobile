import { Link } from "expo-router";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

export default function LinkScreen() {
  const botoes = [
    { titulo: "Ir para tela Inicial", link: "/" },
    { titulo: "Ir para tela de motivação", link: "/ajuda" },
    { titulo: "Ir para tela de dicas", link: "/dicas" },
  ];

  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "timing", duration: 800, easing: Easing.out(Easing.ease) }}
      >
        <Image source={require("../../assets/saude1.png")} style={styles.imagem} />
      </MotiView>

      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "timing", duration: 800, delay: 400, easing: Easing.out(Easing.ease) }}
      >
        <Image source={require("../../assets/logofiap.png")} style={styles.imagem} />
      </MotiView>

      <Text style={styles.title}>Links</Text>

      {/* Botões com animação em cascata */}
      {botoes.map((botao, index) => (
        <MotiView
          key={index}
          from={{ opacity: 0, translateX: -80 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            type: "timing",
            duration: 600,
            delay: 700 + index * 200, // ⏳ efeito cascata
            easing: Easing.out(Easing.ease),
          }}
          style={styles.link}
        >
          <Link href={botao.link} asChild>
            <View style={styles.botao}>
              <Text style={styles.textoBotao}>{botao.titulo}</Text>
            </View>
          </Link>
        </MotiView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaf4fc",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginVertical: 30,
    textAlign: "center",
  },
  link: {
    marginVertical: 10,
    width: "80%",
  },
  imagem: {
    width: 180,
    height: 130,
    resizeMode: "contain",
    marginVertical: 8,
  },
  botao: {
    backgroundColor: "#0066cc",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
