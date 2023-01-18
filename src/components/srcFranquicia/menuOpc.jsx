import { View, TouchableOpacity, Text, StyleSheet, Linking, Platform } from 'react-native'
import { Feather, MaterialIcons } from 'react-native-vector-icons'

import { styleSheet } from '../../styles/styles'

const MenuPress = () => {


    /**Boton Como llegar */
    const pressMap = () => {
        const latitude = "-1.054640";
        const longitude = "-80.447677";

        
        const url = Platform.select({
            ios: "maps:" + latitude + "," + longitude ,
            android: "geo:" + latitude + "," + longitude 
        });
        Linking.openURL(url);
    }

    /**Boton de contactar */
    const presContac = () => {
        let mobile = "+593982121296"
        let msg = "Hola, me estoy interesado en tu trabajo"
        let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
        Linking.openURL(url)
            .then(data => {
            })
            .catch(() => {
                alert("Make sure WhatsApp installed on your device");
            });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.Pressable]} onPress={pressMap}>
                <View style={[styles.circle]}>
                    <Feather name="corner-up-right" size={size} color={color} />
                </View>
                <Text style={[styleSheet.Texts, styles.Text]}>Como llegar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Pressable]} onPress={presContac}>
                <View style={[styles.circle]}>
                    <MaterialIcons name="mobile-screen-share" size={size} color={color} />
                </View>
                <Text style={[styleSheet.Texts, styles.Text]}>Contactar </Text>
            </TouchableOpacity>
 
        </View>
    )
}

export default MenuPress

const size = 23, color = "rgb(83, 35, 206)"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.2)',
        paddingVertical: '1%'
    },
    Text: {
        color,
        marginTop: 5,
        fontFamily: 'PlayfairDisplay-Medium'
    },
    Pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '4%',
        padding: 6
    },
    Pressed: {
        backgroundColor: 'rgba(0,0,0,.05)',
        borderRadius: 50


    },
    circle: {
        borderWidth: 1,
        borderRadius: 70,
        padding: 10,
        borderColor: color
    }
})