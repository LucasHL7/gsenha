import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //Buscar itens salvos
    const getItem = async (key) => {
        try {
            const pass = await AsyncStorage.getItem(key);
            return JSON.parse(pass) || [];
        } catch (error) {
            console.log("Erro ao Buscar", error)
            return [];
        }
    }

    //Salvar itens no storage
    const saveItem = async (key, value) => {
        try {
            let pass = await getItem(key);

            pass.push(value)

            await AsyncStorage.setItem(key, pass, JSON.stringify(pass))

        } catch (error) {
            console.log("ERRO AO SALVAR", error)
        }
    }

    //Remover algo do storage
    const removeItem = async (key,item) => {
        try{
            let pass = await getItem(key);

            let myPass = pass.filter((pass) =>{
                return (pass !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPass))
            return myPass

        }catch(error){
            console.log("ERRO AO DELETAR", error)
        }

    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}


export default useStorage;