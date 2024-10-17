import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export function ModalPass({pass, handleClose}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    senha gerada
                </Text>

                <Pressable style={styles.innerPass}>
                    <Text style={styles.text}>
                        {pass}
                    </Text>
                </Pressable>

                <View style={styles.buttomArea}>
                    <TouchableOpacity style={styles.button}onPress={handleClose}>
                        <Text style={styles.text}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gba(24,24,24,0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        backgroundColor: "#03132B",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#9CAEC8",
        marginBottom: 24
    },
    innerPass: {
        backgroundColor: "#010A17",
        width: "90%",
        padding: 14,
        borderRadius: 8
    },
    text: {
        color: "#F3F3FF",
        textAlign: "center"
    },
    buttomArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding:8
    },
    buttonSave:{
        backgroundColor: "#0A2143",
        borderRadius: 8
    },
    buttonSaveText:{
        color: "#F3F3FF",
        fontWeight: 'bold'
    }
})