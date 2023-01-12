import { View, Text, ImageBackground, Image, Dimensions, StyleSheet,Pressable} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useState,memo } from 'react';
import { useFonts } from 'expo-font';

import QrCode from '../containers/session/Ticket/qrCode';
import { Vista } from "../components/components";
import { Peliculas } from '../utils/databases/peliculas';
import { styleSheet } from '../styles/styles';
import { jsonFonts } from '../hooks/fonts';

export default function Tickets() {

    const [visible,setVisible] = useState(false)

    const [fontsLoaded] = useFonts(jsonFonts);

    if (!fontsLoaded) {
        return null;
    }

    const Container = memo(({ item }) => {

       

        return (
            <ImageBackground style={{flex:1,width,height}} source={item.uri}>
                <View style={styles.continer}>
                    <Pressable style={ ({pressed})=>[{ backgroundColor: 'white', borderRadius: radius }, pressed && {backgroundColor:'rgba(255,255,255,.5)'}]}
                        onLongPress={()=>setVisible(true)}
                    >
                        <Image source={item.uri} style={styles.image} />
                        <View style={{ paddingHorizontal: '5%', paddingVertical: '3%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:4 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styleSheet.Texts, styles.txtRow1]}>Fecha</Text>
                                    <Text style={[styleSheet.Texts]}>{item.fecha}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styleSheet.Texts, styles.txtRow1]}>Hora</Text>
                                    <Text style={[styleSheet.Texts]}>{item.hora}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styleSheet.Texts, styles.txtRow1]}>Fila</Text>
                                    <Text style={[styleSheet.Texts]}>{item.fila}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styleSheet.Texts, styles.txtRow1]}>Sillas</Text>
                                    <Text style={[styleSheet.Texts]}>{item.silla}</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <QrCode visible={visible} setVisible={setVisible}/>
            </ImageBackground>
        )
    })

    return (
        <Vista >
            <FlatList
                data={Peliculas}
                renderItem={({ item, index }) => <Container item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate={0}
                
            />
        </Vista>
    )

}



const { width, height } = Dimensions.get('window')

const size = width * 0.80

const radius = 10

const styles = StyleSheet.create({
    root: { backgroundColor: 'red' },
    continer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.75)',
        padding: 12
    },
    image: {
        width: width * 0.9,
        height: height * 0.6,
        maxWidth: 326,
        maxHeight: 386,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius
    },
    txtRow1: {
        marginRight: 5,
        fontFamily: 'PlayfairDisplay-Bold'
    }
})

