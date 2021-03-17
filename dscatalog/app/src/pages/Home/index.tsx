import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home: React.FC = () => {
  return (
    <View>
      <Text>Bem vindo ao APP</Text>
      <TouchableOpacity>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
