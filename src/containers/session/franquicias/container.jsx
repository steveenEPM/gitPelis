import { Pressable, Text, Image, StyleSheet, View, Dimensions } from "react-native";
import { AntDesign } from 'react-native-vector-icons'
import { memo } from "react";

import { styleSheet } from '../../../styles/styles'
import Estrella from "../../../components/srcFranquicia/estrellas";

const Contenedor = ({ items , onPress}) => {



    return (
        <Pressable style={({ pressed }) => [styles.container, pressed && { backgroundColor: 'rgba(255,255,255,0.8)' }]}
            onPress={()=>onPress(items)}
        >
            <Text style={[{ fontSize: 13, fontFamily: 'PlayfairDisplay-Bold', marginBottom: 4 }]}>{items.nombre}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{ flex: 1, marginRight: 20 }}>
                    <Estrella estrella={items.estrellas}/>
                    <Text style={[styleSheet.Texts]}>{items.detalle}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image source={items.uri} style={styles.image} />
                </View>
            </View>

        </Pressable>
    )

}


const { width, height } = Dimensions.get('window')

const size = height * 0.15


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '4%',
        paddingVertical: '3%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,255.3)',
        elevation: 3,
        marginHorizontal: '3%',
        marginBottom: '3%',
        borderRadius: 12
    },
    image: {
        width: size,
        height: size,
        maxWidth: 100,
        maxHeight: 100,
        borderRadius: 15
    }
})

export default Contenedor
