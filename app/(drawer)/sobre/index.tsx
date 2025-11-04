import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

export default function Integrantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INTEGRANTES</Text>

      <Image source={require('../../../assets/logofiap.png')} style={{width: 200, height: 150, marginVertical: 10, margin: 'auto'}} />

      <View style={styles.item}>
        <Text style={styles.name}>Eduardo do Nascimento Barriviera</Text>
        <Text style={styles.name}>RM: 555309 </Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.item}>
        <Text style={styles.name}>Thiago Lima de Freitas</Text>
        <Text style={styles.name}>RM: 556795</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.item}>
        <Text style={styles.name}>Thiago Thomaz Sales</Text>
        <Text style={styles.name}>RM: 557992</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  item: {
    marginBottom: 10
  },
  name: {
    fontSize: 20
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 15
  }
});
