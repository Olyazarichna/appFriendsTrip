import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import variables from "../../styles/utils/variables";
import { LinearGradient } from "expo-linear-gradient";

export default function ModalWindow({
    modalVisible,
    onRequestClose,
    title,
    textBtnY,
    textBtnN,
    onClose,
    onPress,
}) {
    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={onRequestClose}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.text}>{title}</Text>
                        <View style={styles.btnWrapper}>
                            <LinearGradient
                                style={styles.gradient}
                                colors={[variables.gradColorOne, variables.gradColorTwo]}
                            >
                                <Pressable onPress={onPress} style={styles.btn}>
                                    <Text style={styles.textBtn}>{textBtnY}</Text>
                                </Pressable>
                            </LinearGradient>
                            <LinearGradient
                                style={styles.gradient}
                                colors={[variables.gradColorOne, variables.gradColorTwo]}
                            >
                                <Pressable onPress={onClose} style={styles.btn}>
                                    <Text style={styles.textBtn}>{textBtnN}</Text>
                                </Pressable>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
    openModalButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    },
    modal: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "transparent",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "500",
        fontSize: "16",
        color: "#848689",
        marginBottom: 30,
    },
    btnWrapper: {
        flexDirection: "row",
    },
    gradient: {
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        marginLeft: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    btn: {
        borderWidth: 1,
        borderColor: "transparent",
        padding: 20,
        width: 100,
        alignItems: "center",
    },
    textBtn: {
        fontWeight: "700",
        fontSize: "15",
        color: "#FFFFFF",
    },
});
