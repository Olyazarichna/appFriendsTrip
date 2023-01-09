import {
  Text,
  TouchableOpacity,
} from "react-native";


import variables from '../../styles/utils/variables';
import fonts from '../../styles/utils/mixins';

export default function ButtonLongWhite({
    title,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    click
}) {
    return (
        
            <TouchableOpacity
                style={{
                width: 325,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: variables.lableButtonBlue,
                backgroundColor: variables.lableButtonWhite,
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight
            }}
                onPress={click}>
                <Text
                style={{
                paddingBottom: 19.5,
                paddingTop: 19.5,
                color: variables.lableButtonBlue,
                textAlign: "center",
                ...fonts(15, "700")
                }}>{title}</Text>
            </TouchableOpacity>
       
    )
}