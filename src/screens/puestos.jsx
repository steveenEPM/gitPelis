import { useFonts } from "expo-font";
import { View, Text, Pressable, Image, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState, } from "react";

import Asientos from "../containers/session/puestos/asientos";
import Estados from "../containers/session/puestos/estados";
import Container from "../containers/session/puestos/container";
import { Vista } from "../components/components";
import { styleSheet } from "../styles/styles";
import { jsonFonts } from "../hooks/fonts";



export default function Puestos() {




    const [fontsLoaded] = useFonts(jsonFonts);


    const [array, setArray] = useState([])

    const [reserv, setReserv] = useState([1, 2, 4, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 20, 21, 25, 26, 27, 28, 29, 32, 33, 34, 38, 39, 40, 43, 44, 45, 48, 49])


    if (!fontsLoaded) {
        return null;
    }

    /**Eventos */



    /** */
    return (
        <Vista styles={styles.root}>
            <ScrollView >
                <View style={{ height: height - 80 }}>
                    <View style={{flex:4}}>
                        <View style={[styles.line]} />
                        <Asientos array={array} setArray={setArray} reserv={reserv} />
                        <Estados />
                    </View>
                    <View style={{flex:1}}>
                        {
                            array.length !== 0 && <Container arrray={array} />

                        }
                    </View>

                </View>

            </ScrollView>

        </Vista>
    )

}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    line: {
        width: width * 0.9,
        height: 7,
        alignSelf: 'center',
        backgroundColor: 'rgba(182, 17, 107,1)',
        marginTop: '12%',
        marginBottom: '10%',
        borderRadius: 80,
    }
})