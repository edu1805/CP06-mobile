import { useRouter } from 'expo-router';
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { MotiView, MotiText, MotiImage } from "moti";

export default function PagInicial() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    console.log('Dados cadastrados:', { nome, email, senha });
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');

    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título animado */}
      <MotiText
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 700 }}
        style={styles.title}
      >
        Bem-vindo ao <Text style={styles.highlight}>MultiVida 💙</Text>
      </MotiText>

      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 400 }}
        style={styles.subtitle}
      >
        Sua jornada de bem-estar começa aqui
      </MotiText>

      <MotiView
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 600 }}
        style={styles.form}
      >
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <MotiView
          from={{opacity:0.8,scale:1}}
          animate={{opacity:1,scale:1.05}}
          transition={{
              loop:true,
              type:'timing',
              duration:1000
          }}
        >
          <TouchableOpacity style={styles.primaryButton} onPress={handleCadastro}>
            <Text style={styles.primaryButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </MotiView>
      </MotiView>

      {/* Imagens animadas */}
      <MotiView
        style={styles.imageContainer}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1000 }}
      >
        <MotiImage
          source={require('../../assets/saude1.png')}
          style={styles.image}
          from={{ rotate: '-3deg', opacity: 0 }}
          animate={{ rotate: '3deg', opacity: 1 }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 3000,
            delay: 200,
          }}
        />
        <MotiImage
          source={require('../../assets/saude2.png')}
          style={styles.image}
          from={{ rotate: '3deg', opacity: 0 }}
          animate={{ rotate: '-3deg', opacity: 1 }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 3000,
            delay: 400,
          }}
        />
      </MotiView>

      {/* Botões secundários animados */}
      <MotiView
        style={styles.linksContainer}
        from={{ opacity: 0, translateY: 60 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1200 }}
      >
        {[
          { title: '💡 Dicas', path: '/dicas' },
          { title: '💬 Motivação', path: '/ajuda' },
          { title: '🧭 Recursos', path: '/recursos' },
          { title: '👨‍💻 Sobre os Desenvolvedores', path: '/sobre/' },
        ].map((item, i) => (
          <MotiView
            key={i}
            from={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1400 + i * 150 }}
          >
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.push(item.path)}
            >
              <Text style={styles.secondaryButtonText}>{item.title}</Text>
            </TouchableOpacity>
          </MotiView>
        ))}
      </MotiView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F9FBFF',
    padding: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginTop: 20,
  },
  highlight: {
    color: '#2563EB',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButton: {
    width: '90%',
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    shadowColor: '#2563EB',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    flexWrap: 'wrap',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
    margin: 10,
  },
  linksContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  secondaryButton: {
    width: '85%',
    backgroundColor: '#E0E7FF',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1E3A8A',
    fontWeight: '600',
    fontSize: 15,
  },
});
