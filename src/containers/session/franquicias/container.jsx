import { Pressable, Text, Image, StyleSheet, View,Dimensions} from "react-native";
import { AntDesign } from 'react-native-vector-icons'
import { memo } from "react";

import {styleSheet} from '../../../styles/styles'

const Contenedor = ({ items }) => {

    const Estrella = () => {
        return (
            <View style={{ flexDirection: 'row' ,alignItems:'center',marginBottom:5 }}>
                <View style={{flexDirection:'row',marginRight:'5%'}}>
                    {
                        [1, 2, 3, 4].map((key, index) => {
                            return (
                                <View key={index}>
                                    <AntDesign name="star" size={15} color="rgb(255, 242, 125)" />
                                </View>
                            )
                        })
                    }
                </View>
                <Text style={[styleSheet.Texts]}>{items.estrellas}</Text>
            </View>
        )
    }

    return (
        <Pressable style={styles.container}>
            <View style={{flex:1,marginRight:20}}>
                <Text style={[{fontSize:14,fontFamily:'PlayfairDisplay-Bold', marginBottom:4}]}>{items.nombre}</Text>
                <Estrella/>
                <Text style={[styleSheet.Texts]}>{items.detalle}</Text>
            </View>
            <View style={{justifyContent:'center'}}>
                <Image source={items.uri} style={styles.image}/>
            </View>
        </Pressable>
    )

}


const {width,height} = Dimensions.get('window')

const size = height *0.14

console.log(size);

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        flexWrap:'wrap',
         paddingHorizontal:'4%',         
        paddingVertical:'3%',
        backgroundColor:'rgba(255,255,255,0.7)',
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.75)',
        elevation:3,
        marginHorizontal:'3%',
        marginBottom:'3%',
        borderRadius:12
    }, 
    image:{
        width:size,
        height:size,
        maxWidth:100,
        maxHeight:100,
        borderRadius:15
    }
})

export default Contenedor
