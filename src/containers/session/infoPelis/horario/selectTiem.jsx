import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native'
import { useState, useEffect } from 'react'

import { styleSheet } from '../../../../styles/styles'


export default function SelectTime({ items, setItems }) {



    /**
     * 
    **/



    const Container = ({ num, dia, hora, keys }) => {
        return (
            <View>
                <Pressable
                    style={({ pressed }) => [styles.Touch, pressed && { backgroundColor: 'rgba(182, 17, 107,0.3)' }, keys === items && { backgroundColor: 'rgba(182, 17, 107,1)' }]}
                    onPress={() => keys !== items ? setItems(keys) : setItems(0)}
                >
                    <Text style={[styleSheet.Texts, styles.text]}>{dia}</Text>
                    <Text style={[styleSheet.Texts, styles.text]}>{num}</Text>
                </Pressable>
                <View style={[styles.box1, keys === items && { backgroundColor: 'rgba(182, 17, 107,1)' }]}>
                    <Text style={[styleSheet.Texts, styles.text]}>{hora}</Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flexDirection: 'row', marginVertical: '2%', marginBottom: '6%' }}>
            <View style={{ marginHorizontal: '1%', flex: 1, marginTop: 50 }}>
                <Container dia={'Thu'} hora={'16:00'} num={21} keys={1} />
            </View>
            <View style={{ marginHorizontal: '1%', flex: 1, top: 25 }}>
                <Container dia={'Fri'} hora={'17:00'} num={22} keys={2} />
            </View>

            <View style={{ marginHorizontal: '1%', flex: 1 }}>
                <Container dia={'Sat'} hora={'18:00'} num={23} keys={3} />
            </View>
            <View style={{ marginHorizontal: '1%', flex: 1, top: 25 }}>
                <Container dia={'Sun'} hora={'19:00'} num={24} keys={4} />
            </View>
            <View style={{ marginHorizontal: '1%', flex: 1, top: 50 }}>
                <Container dia={'Thu'} hora={'20:00'} num={25} keys={5} />
            </View>

        </View>
    )
}

const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
    Touch: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.20,
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255,0.2)',

    },
    text: {
        color: 'white'
    },

    imageBackground2: {
        alignItems: 'center',
        backgroundColor: '#09FBD3',
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        borderRadius: 4,

    },
    box1: {
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '7%'
    }
})