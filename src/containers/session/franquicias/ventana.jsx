import { Modal, View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useRef, useEffect } from "react";
import { measure } from "react-native-reanimated";
import {Fontisto,Foundation} from "react-native-vector-icons"

import Estrella from "../../../components/srcFranquicia/estrellas";
import MenuPress from "../../../components/srcFranquicia/menuOpc";
import { styleSheet } from "../../../styles/styles";



const Ventana = ({ visible, setVisible, items }) => {

    const refView = useRef(null)



    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setVisible(false)}
        >
            {
                items && <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.2)', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: Radius }}>
                        <Image source={items.uri} style={{
                            width: width * 0.95,
                            height: height * 0.4,
                            borderTopRightRadius: Radius,
                            borderTopLeftRadius: Radius,
                        }} />
                        <View style={{ paddingHorizontal: '3%', paddingVertical: '4%' }}>
                            <Text style={[{ fontSize: 14, fontFamily: 'PlayfairDisplay-Medium' }]}>{items.nombre}</Text>
                            <Estrella estrella={items.estrellas} />
                        </View>
                        <MenuPress />
                        <View style={{paddingHorizontal:'3%', paddingVertical:'4%'}}>
                          <View style={[styles.rowus,{marginBottom:8}]}>
                                <Fontisto name="earth" size={size} color={color}/>
                                <Text style={[styleSheet.Texts,{marginLeft:'3%'}]}>{items.url}</Text>
                          </View>
                          <View style={[styles.rowus,]}>
                                <Foundation name="telephone" size={size} color={color}/>
                                <Text style={[styleSheet.Texts,{marginLeft:'3%',letterSpacing:1}]}> + {items.telefono}</Text>
                          </View>
                        </View>
                    </View>
                </View>
            }
        </Modal>
    )

}



export default Ventana

const { width, height } = Dimensions.get('window')

const Radius = 10

const size = 30, color = "rgb(83, 35, 206)"

const styles = StyleSheet.create({
    rowus:{
        flexDirection:'row',
        alignItems:'center'
    }
})