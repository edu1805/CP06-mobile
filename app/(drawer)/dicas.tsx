import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Dicas() {
  const dicas = [
    {
      emoji: "🧘‍♂️",
      titulo: "Meditação",
      texto: "Reserve alguns minutos do seu dia para se desconectar e respirar fundo.",
    },
    {
      emoji: "🏃‍♀️",
      titulo: "Atividade Física",
      texto: "Exercícios liberam endorfina, ajudam a reduzir o estresse e melhoram o humor.",
    },
    {
      emoji: "📵",
      titulo: "Pausa nas redes sociais",
      texto: "Desconecte-se um pouco das redes para se reconectar com você mesmo.",
    },
    {
      emoji: "💬",
      titulo: "Converse com alguém",
      texto: "Falar com amigos ou familiares pode aliviar a ansiedade e trazer conforto.",
    },
    {
      emoji: "🛌",
      titulo: "Durma bem",
      texto: "O sono regula o humor e melhora sua disposição. Tente manter uma rotina saudável de sono.",
    },
    {
      emoji: "📖",
      titulo: "Leia algo leve",
      texto: "Uma boa leitura pode ajudar a distrair a mente e estimular o pensamento positivo.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      
      <Image
        source={require('../../assets/saude_mental.png')}
        style={styles.headerImage}
        resizeMode="cover"
      />

      <Text style={styles.title}>🧠 Saúde Mental Importa</Text>

      <Text style={styles.intro}>
        A saúde mental é tão essencial quanto a saúde física. Ela afeta como pensamos,
        sentimos e agimos. Cuidar da mente é cuidar de si — é encontrar equilíbrio
        mesmo em meio ao caos. Reconhecer a importância do autocuidado é um
        passo fundamental para uma vida mais leve e feliz.
      </Text>

      <Image
        source={require('../../assets/dicas.jpg')}
        style={styles.headerImage}
        resizeMode="cover"
      />

      <Text style={styles.subtitle}>✨ Pequenas ações que fazem diferença:</Text>

      {dicas.map((dica, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardEmoji}>{dica.emoji}</Text>
          <Text style={styles.cardTitle}>{dica.titulo}</Text>
          <Text style={styles.cardText}>{dica.texto}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
  },
  headerImage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginTop: 20,
    marginBottom: 15,
  },
  intro: {
    fontSize: 20,
    color: "#333",
    textAlign: "justify",
    marginHorizontal: 20,
    marginBottom: 25,
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 15,
    color: "#264653",
    marginHorizontal: 20,
    marginTop: 15
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardEmoji: {
    fontSize: 28,
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#264653",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 16,
    color: "#4f4f4f",
  },
});
