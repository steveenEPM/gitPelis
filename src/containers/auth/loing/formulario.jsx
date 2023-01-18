import { StyleSheet, View, Text, TextInput, Dimensions, Keyboard, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { useEffect, useRef, useContext } from "react";

import { styleSheet } from '../../../styles/styles'
import { Authen } from "../../../components/contex";


const Formulario = () => {

    const refInput = useRef()

    const { state, setState } = useContext(Authen)

    useEffect(() => {

        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            if (refInput.current.isFocused()) refInput.current.blur()
        });

        return () => {

            hideSubscription.remove();
        };
    }, []);


    /**Actions */

    const onPress = () => {
        setState(true)
    }

    /** */

    return (
        <View style={[styles.absoluteFill, styles.componet]}>
            <KeyboardAvoidingView
                behavior={"height"}
                keyboardVerticalOffset={12}
                style={{flex:1}}
            >
                <Text style={[{ marginBottom: 30, textAlign: 'center', fontSize: 20, fontFamily: 'Gelasio-SemiBold' }]}>Iniciar Seccion</Text>
                <View style={{ marginBottom: 30 }}>
                    <TextInput
                        placeholder="Usuario"
                        ref={refInput}
                        style={[styles.TextInput, { marginBottom: 15 }]}
                        placeholderTextColor="rgba(0,0,0,.5)"
                        cursorColor='rgb(46, 19, 113)'
                        selectionColor='rgb(46,19,113)'
                    />

                    <TextInput
                        secureTextEntry={true}
                        placeholder="Contraseña"
                        ref={refInput}
                        style={styles.TextInput}
                        placeholderTextColor="rgba(0,0,0,.5)"
                        cursorColor='rgb(46, 19, 113)'
                        selectionColor='rgb(46,19,113)'
                    />
                </View>
                <Pressable style={[styles.Pressable]}
                    android_ripple={{ color: 'rgba(255,255,255,0.5)' }}
                    onPress={onPress}
                >
                    <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Gelasio-SemiBold' }}>Aceptar</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </View>

    )

}


export default Formulario

const { width, height } = Dimensions.get('screen')


const styles = StyleSheet.create({
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
        top: height * 0.18,
        left: 20

    },
    componet: {
        backgroundColor: 'white',
        width: width * 0.9,
        height: height * 0.5,
        maxHeight: 330,
        borderWidth: 1.3,
        paddingHorizontal: '5%',
        paddingVertical: '6%',
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,.3)'
    },
    TextInput: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 2,
        textAlign: 'center',
        borderRadius: 7,
        fontFamily: 'Gelasio-Medium',
        borderColor: 'rgb(46, 19, 113)'
    },
    Pressable: {
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: 'rgb(46, 19, 113)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12
    }
})