import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export type CardProps = {
  name: string;
  address: string;
};
export const Card: React.FC<CardProps> = ({name, address}) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.address}>{address}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    height: 80,
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#888',
  },
});
