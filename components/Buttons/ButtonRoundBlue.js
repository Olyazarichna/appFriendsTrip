import { Text, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import variables from '../../styles/utils/variables';

export default function ButtonRoundBlue({ style, click }) {
  return (
    <LinearGradient
      style={{
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      colors={[variables.gradColorOne, variables.gradColorTwo]}
    >
      <TouchableOpacity onPress={click}>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
