import {
  Text,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';


export default function Button({
    title,
    radColOne,
    radColTwo,
    width,
    borderRadius,
    borderWidth,
    borderColor,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padBot,
    padTop,
    color,
    textAlign,
    fontSize,
    fontWeight,
    click
}) {
    return (
        <LinearGradient
            style={{
                width: width,
                borderRadius: borderRadius,
                borderWidth: borderWidth,
                borderColor: borderColor,
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight
            }}
        colors={[radColOne, radColTwo]}
        >
        <TouchableOpacity onPress={click}>
                <Text
                style={{
                paddingBottom: padBot,
                paddingTop: padTop,
                color: color,
                textAlign: textAlign,
                fontSize: fontSize,
                fontWeight: fontWeight
                }}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}