import {
  Text,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import variables from '../../styles/utils/variables';
import fonts from '../../styles/utils/mixins';


export default function ButtonLongBlue({
    title,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    click
}) {
    return (
        <LinearGradient
            style={{
                width: 326,
                borderRadius: 20,
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight,
        
            }}
        colors={[variables.gradColorOne, variables.gradColorTwo]}
        >
        <TouchableOpacity onPress={click}>
                <Text
                style={{
                paddingBottom: 20,
                paddingTop: 20,
                color: variables.lableButtonWhite,
                textAlign: "center",
                ...fonts(15, "700")
                }}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
