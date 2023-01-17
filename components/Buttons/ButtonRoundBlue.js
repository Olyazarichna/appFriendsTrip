 
import {
  Text,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import variables from '../../styles/utils/variables';
import fonts from '../../styles/utils/mixins';


export default function ButtonRoundBlue({
    title,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width,
    height,
    click
}) {
    return (
        <LinearGradient
            style={{
                width: width,
                borderRadius: 60,
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight,
                height: height
        
            }}
        colors={[variables.gradColorOne, variables.gradColorTwo]}
        >
        <TouchableOpacity style={{marginBottom: "auto", marginTop: "auto",}} onPress={click}>
                <Text
                style={{
                color: variables.lableButtonWhite,
                textAlign: "center",
                ...fonts(15, "700"),
    
                }}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
