import { View, ImageBackground, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';

import SelectTime from '../containers/session/infoPelis/horario/selectTiem';
import { VistaHidden, Loading } from "../components/components";
import { styleSheet } from '../styles/styles'
import { jsonFonts } from '../hooks/fonts';
import { Peliculas } from '../utils/databases/peliculas';


export default function InforPelis() {

    const [items, setItems] = useState(0)

    const [okV, setOkV] = useState(false)

    const [info, setInfo] = useState(undefined)

    const navigation = useNavigation()

    const route = useRoute()

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params) {
                if (route.params?.ok) {
                    return setOkV(true)
                }
                if (route.params?.names) {
                    const { names } = route.params
                    const aux = Peliculas.find((e) => e.nombre == names)
                    setInfo(aux)

                }
            }
        });



    }, [navigation])


    const [fontsLoaded] = useFonts(jsonFonts);




    if (!fontsLoaded) {
        return null;
    }


    /**Eventos */

    const onPress = () => {
        navigation.navigate('puestos')
    }

    /** */
    return (
        <VistaHidden>
            {
                info ? <ScrollView
                    decelerationRate={0}
                    snapToInterval={height * 0.5}
                >
                    <ImageBackground
                        source={info.uri}
                        style={[styles.Image]}
                    >
                        <View style={[styles.ContinerText]}>
                            <Text style={[{ color: 'white', fontSize: 15,textTransform:'capitalize',width:width-50,textAlign:'center' }, styles.texts]}>
                                {info.nombre}
                            </Text>
                            <Text style={[{ color: 'white' }, styleSheet.Texts]}>
                                {info.sipnosis}
                            </Text>
                        </View>

                        <View style={{ backgroundColor: 'rgba(46, 19, 113,0.55)', height: 40, justifyContent: 'center' }}>
                            <View style={styles.Line} />
                            <Text style={[{ color: 'white', textAlign: 'center' }, styleSheet.Texts]}>
                                Seleciona tu Dia y hora
                            </Text>
                        </View>
                    </ImageBackground>
                    <View style={{ height: height * 0.5 }}>
                        <SelectTime items={items} setItems={setItems} />

                        {
                            items !== 0 &&
                            <Pressable
                                style={({ pressed }) => [{ marginBottom: '5%' }, styleSheet.Pressables, pressed && { backgroundColor: 'rgba(182, 17, 107,.5)' }]}
                                onPress={onPress}
                            >
                                <Text style={[{ color: 'white', fontFamily: 'PlayfairDisplay-ExtraBold' }]}>Reservar</Text>
                            </Pressable>
                        }
                    </View>

                    <Snackbar
                        visible={okV}
                        onDismiss={() => setOkV(false)}
                        action={{
                            label: 'ok',
                            onPress: () => { }

                        }}
                        duration={2000}
                    >
                        Compra exitosa
                    </Snackbar>
                </ScrollView>
                    :
                    <Loading />
            }
        </VistaHidden>
    )

}



const { width, height } = Dimensions.get('window')



const styles = StyleSheet.create({
    root: {
        backgroundColor: 'red',

    },
    texts: {
        fontFamily: 'PlayfairDisplay-Bold',
        marginBottom: '3%',

    },
    Image: {
        height: height,
        width,
        justifyContent: 'flex-end',
    },
    Line: {
        alignSelf: 'center',
        marginVertical: '2%',
        height: 3,
        width: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,1)'
    },
    ContinerText: {
        ...StyleSheet.absoluteFill,
        marginBottom: '3%',
        backgroundColor:'rgba(0,0,0,.6)',
        paddingHorizontal:'3%',
        paddingVertical:'4%',
        borderRadius:12,        
        justifyContent: 'center',
        borderColor: 'white',
        alignItems: 'center',
        height: height * 0.2,
        top:height*0.7,
    }
})
