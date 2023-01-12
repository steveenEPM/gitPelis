import moment from "moment";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { FontAwesome5, FontAwesome, Entypo } from 'react-native-vector-icons'

import { styleSheet } from "../../../styles/styles";
import { useNavigation } from "@react-navigation/native";
export default function Container({ arrray }) {

    const navigation = useNavigation()

    const onPress = ()=>  navigation.navigate('infoPeli',{ok:true})

    return (
        <View style={styles.roots}>
            <View style={{ paddingHorizontal: '3%' }}>
                <View style={[styles.rows]}>
                    <View style={styles.caja}>
                        <FontAwesome5 name="calendar-alt" color="white" size={20} />
                        <Text style={[styleSheet.Texts, styles.text, { marginLeft: 5 }]}>{moment().format('MMMM YY, YYYY')}</Text>
                    </View>
                    <View style={styles.caja}>
                        <FontAwesome name="circle" color="white" size={10} style={{ top: 2, marginRight: '4%' }} />
                        <Text style={[styleSheet.Texts, styles.text]}>{moment().format(' h a')}</Text>
                    </View>
                </View>

                <View style={[styles.rows]}>
                    <View style={styles.caja}>
                        <Entypo name="ticket" color="white" size={20} />
                        <Text style={[styleSheet.Texts, styles.text, { marginLeft: 5 }]}>Tiquetes</Text>
                    </View>
                    <View style={styles.caja}>
                        <FontAwesome name="circle" color="white" size={10} style={{ top: 2, marginRight: '6%' }} />
                        <Text style={[styleSheet.Texts, styles.text]}>{arrray.join(', ')}</Text>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome5 name='cart-plus' color="white" size={10} />
                    <Text style={[styleSheet.Texts, styles.text, { marginLeft: 5 }]}> $ {arrray.length * 30}</Text>
                </View>
            </View>
            <View style={styles.containerPress}>
                <Pressable
                    style={({ pressed }) => [styles.Pressable, pressed && { backgroundColor: 'rgba(255,255,255,.5)' }]}
                    onPress={onPress}
                >
                    <Entypo name="shopping-cart" color="#6030DC" size={34} />
                </Pressable>
            </View>

        </View>
    )
}


const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    roots: {
        backgroundColor: '#6030DC',
        flex: 1,
        marginTop: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    rows: {
        flexDirection: 'row',
        marginBottom: '4%',

    },
    caja: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '9%'
    },
    containerPress: {
        paddingLeft: '6%',
        paddingRight: '3%',
        paddingVertical: '2%',
        marginVertical: '4%',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: 'rgb(46, 19, 113)'
    },
    text: {
        color: "white",
    },
    Pressable: {
        alignSelf: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 180,
        backgroundColor: 'white'
    }
})