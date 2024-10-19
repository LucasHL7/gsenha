import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { Passitem } from './components/passitem';

export function Spass() {
    const [listPass, setListPass] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPass() {
            const pass = await getItem("@pass");
            setListPass(pass);
        }

        if (focused) {
            loadPass();
        }
    }, [focused]);

    async function Deletepass(item){
        const pass = await removeItem('@pass', item)
        setListPass(pass)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPass}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => {
                        return <Passitem data={item} removePass={() =>Deletepass(item)} />;
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#051B3B",
        paddingTop: 58,
        paddingLeft: 14,
        paddingBottom: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 18,
        color: "#F3F3FF",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
});
