import { View, StyleSheet, Pressable, TextInput, Keyboard } from "react-native";
import { FontAwesome, EvilIcons } from "react-native-vector-icons"
import { useEffect, useRef } from "react";

import { styleSheet } from "../../styles/styles";

const SearchBars = () => {


    const refInput = useRef()

    useEffect(() => {

        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            if(refInput.current.isFocused()) refInput.current.blur()
        });

        return () => {
           
            hideSubscription.remove();
        };
    }, []);


    return (
        <View style={styles.container}>
            <EvilIcons name="search" size={30} color="rgba(255,255,255,0.5)" />
            <TextInput
                ref={refInput}
                placeholder="Buscar"
                style={[styles.input,styleSheet.Texts]}
                selectionColor={"rgb(114, 71, 224)"}
                cursorColor={"rgb(114, 71, 224)"}
            />
            <Pressable style={({pressed})=> [styles.pressed,pressed&&{backgroundColor:'rgba(255,255,255,0.1)',borderRadius:30}]}>
                <FontAwesome name="microphone" size={23} color="rgba(255,255,255,.5)" />
            </Pressable>
        </View>
    )

}

export default SearchBars

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: '4%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginHorizontal: '2%',
        borderRadius: 10,
        paddingHorizontal: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    input: {
        backgroundColor: "transparent",
        paddingVertical: '3%',
        flex: 1
    },
    pressed:{ justifyContent: 'center', paddingHorizontal: '4%',paddingVertical:'3%' }
})