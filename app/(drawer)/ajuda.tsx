import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MotiView, MotiText, MotiImage } from 'moti';
import { Easing } from 'react-native-reanimated';

export default function Ajuda() {
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(true);

  const buscarMensagem = async () => {
    setCarregando(true);
    try {
      const resposta = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
      const json = await resposta.json();
      setMensagem(json.slip.advice);
    } catch (erro) {
      setMensagem('Erro ao buscar mensagem. Tente novamente.');

    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarMensagem();
  }, []);

  return (
    <View style={styles.container}>
      {/* Título */}
      <MotiText
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 200, type: 'timing', duration: 600 }}
        style={styles.titulo}
      >
        🌟 Mensagem Motivacional 🌟
      </MotiText>

      {/* Imagens em cascata */}
      <MotiImage
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 400, type: 'timing', duration: 600 }}
        source={require('../../assets/motivacao.jpg')}
        style={styles.imagem}
      />

      <MotiImage
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 600, type: 'timing', duration: 600 }}
        source={require('../../assets/motivacao2.jpg')}
        style={styles.imagem}
      />

      {/* Mensagem com fade */}
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 800, type: 'timing', duration: 700 }}
      >
        {carregando ? (
          <ActivityIndicator size="large" color="#007BFF" />
        ) : (
          <Text style={styles.mensagem}>{mensagem}</Text>
        )}
      </MotiView>

      {/* Botão piscando */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1000 }}
      >
        <MotiView
          // pulses using keyframes and reverses so it keeps looping reliably
          from={{ opacity: 0.8, scale: 0.95 }}
          animate={{ opacity: [0.8, 1], scale: [0.95, 1.05] }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 800,
            repeatReverse: true,
          }}
         style={{ width: '100%', alignItems: 'center' }}
        >
          <Pressable onPress={buscarMensagem} style={styles.botao}>
            <Text style={styles.botaoTexto}>Nova Mensagem</Text>
          </Pressable>
        </MotiView>

      </MotiView>

      {/* Botão CVV */}
      <MotiView
        from={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1300, type: 'timing', duration: 700 }}
      >
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#28a745', marginTop: 10 }]}
          onPress={() => Linking.openURL('https://cvv.org.br/')}
        >
          <Text style={styles.botaoTexto}>Precisa de ajuda? Acesse o CVV 💬</Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007BFF',
  },
  mensagem: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
