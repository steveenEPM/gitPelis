import { View, Pressable, Image, StyleSheet } from 'react-native'
import { useState, useCallback, useEffect, useMemo, memo, useTransition } from 'react'

import { sillas } from '../../../utils/databases/sillas'


export default function Asientos({ array, setArray, reserv }) {


    const [isPending, startTransition] = useTransition();


    const onPress = useCallback((items, status) => {
        if (status == 1) {
            const aux = [...array, items]
           return  setArray(aux)
        }
        if(status === 3){
            const aux = array.filter(e => e !== items)
            return setArray(aux)
        }
    }, [array])



    /** */

    const Asiento = memo(({ estado, numero }) => {

        const [status, setStatus] = useState(estado)

        useMemo(() => {
            const bools = array.includes(numero)
            if (bools) setStatus(3)

        }, [array])

        return (
            <Pressable
                style={({ pressed }) => [pressed && { backgroundColor: 'rgba(0,0,0,.3)' }]}
                onPress={() => {
                    onPress(numero, status)
                }}
            >
                {
                    /**Vacio */
                    status === 1 &&
                    <Image
                        source={require('../../../../assets/imagenes/sillon-disponible.png')}
                        style={styles.imagen}
                    />
                }
                {
                    /**reservado */
                    status === 2 &&
                    <Image
                        source={require('../../../../assets/imagenes/sillon-reservado.png')}
                        style={styles.imagen}
                    />
                }
                {
                    /**Seleccionado */
                    status === 3 &&
                    <Image
                        source={require('../../../../assets/imagenes/sillon-selecion.png')}
                        style={styles.imagen}
                    />
                }
            </Pressable>
        )

    })
    return (
        <View style={{ marginBottom: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
                    <Asiento estado={sillas[1].estado} numero={sillas[1].numero} />
                    <Asiento estado={sillas[2].estado} numero={sillas[2].numero} />
                    <Asiento estado={sillas[3].estado} numero={sillas[3].numero} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Asiento estado={sillas[4].estado} numero={sillas[4].numero} />
                    <Asiento estado={sillas[5].estado} numero={sillas[5].numero} />
                    <Asiento estado={sillas[6].estado} numero={sillas[6].numero} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Asiento estado={sillas[7].estado} numero={sillas[7].numero} />
                    <Asiento estado={sillas[8].estado} numero={sillas[8].numero} />
                    <Asiento estado={sillas[9].estado} numero={sillas[9].numero} />
                    <Asiento estado={sillas[10].estado} numero={sillas[10].numero} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Asiento estado={sillas[11].estado} numero={sillas[11].numero} />
                    <Asiento estado={sillas[12].estado} numero={sillas[12].numero} />
                    <Asiento estado={sillas[13].estado} numero={sillas[13].numero} />
                    <Asiento estado={sillas[14].estado} numero={sillas[14].numero} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%', paddingHorizontal: '5%' }}>
                <Asiento estado={sillas[15].estado} numero={sillas[15].numero} />
                <Asiento estado={sillas[16].estado} numero={sillas[16].numero} />
                <Asiento estado={sillas[17].estado} numero={sillas[17].numero} />
                <Asiento estado={sillas[18].estado} numero={sillas[18].numero} />
                <Asiento estado={sillas[19].estado} numero={sillas[19].numero} />
                <Asiento estado={sillas[20].estado} numero={sillas[20].numero} />
                <Asiento estado={sillas[21].estado} numero={sillas[21].numero} />
                <Asiento estado={sillas[22].estado} numero={sillas[22].numero} />
            </View>


            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={sillas[23].estado} numero={sillas[23].numero} />
                <Asiento estado={sillas[24].estado} numero={sillas[24].numero} />
                <Asiento estado={sillas[25].estado} numero={sillas[25].numero} />
                <Asiento estado={sillas[26].estado} numero={sillas[26].numero} />
                <Asiento estado={sillas[27].estado} numero={sillas[27].numero} />
                <Asiento estado={sillas[28].estado} numero={sillas[28].numero} />
                <Asiento estado={sillas[29].estado} numero={sillas[29].numero} />
                <Asiento estado={sillas[30].estado} numero={sillas[30].numero} />
                <Asiento estado={sillas[31].estado} numero={sillas[31].numero} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={sillas[32].estado} numero={sillas[32].numero} />
                <Asiento estado={sillas[33].estado} numero={sillas[33].numero} />
                <Asiento estado={sillas[34].estado} numero={sillas[34].numero} />
                <Asiento estado={sillas[35].estado} numero={sillas[35].numero} />
                <Asiento estado={sillas[36].estado} numero={sillas[36].numero} />
                <Asiento estado={sillas[37].estado} numero={sillas[37].numero} />
                <Asiento estado={sillas[38].estado} numero={sillas[38].numero} />
                <Asiento estado={sillas[39].estado} numero={sillas[39].numero} />
                <Asiento estado={sillas[40].estado} numero={sillas[40].numero} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={sillas[41].estado} numero={sillas[41].numero} />
                <Asiento estado={sillas[42].estado} numero={sillas[42].numero} />
                <Asiento estado={sillas[43].estado} numero={sillas[43].numero} />
                <Asiento estado={sillas[44].estado} numero={sillas[44].numero} />
                <Asiento estado={sillas[45].estado} numero={sillas[45].numero} />
                <Asiento estado={sillas[46].estado} numero={sillas[46].numero} />
                <Asiento estado={sillas[47].estado} numero={sillas[47].numero} />
                <Asiento estado={sillas[48].estado} numero={sillas[48].numero} />
                <Asiento estado={sillas[49].estado} numero={sillas[49].numero} />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'row',
        marginBottom: '2%'
    },
    imagen: {
        width: 30,
        height: 35,
        marginHorizontal: 4
    }
})

/**
 * g
 *       
 *   <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Asiento estado={1} numero={7} />
                    <Asiento estado={2} numero={8} />
                    <Asiento estado={2} numero={9} />
                    <Asiento estado={2} numero={10} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Asiento estado={1} numero={11} />
                    <Asiento estado={2} numero={12} />
                    <Asiento estado={2} numero={13} />
                    <Asiento estado={1} numero={14} />
                </View>
            </View>
 * 
 *          
 * <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%', paddingHorizontal: '5%' }}>
                <Asiento estado={1} numero={15} />
                <Asiento estado={2} numero={16} />
                <Asiento estado={2} numero={17} />
                <Asiento estado={2} numero={18} />
                <Asiento estado={2} numero={19} />
                <Asiento estado={2} numero={20} />
                <Asiento estado={2} numero={21} />
                <Asiento estado={1} numero={22} />
            </View>


            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={1} numero={23} />
                <Asiento estado={2} numero={24} />
                <Asiento estado={1} numero={25} />
                <Asiento estado={2} numero={26} />
                <Asiento estado={2} numero={27} />
                <Asiento estado={1} numero={28} />
                <Asiento estado={2} numero={29} />
                <Asiento estado={1} numero={30} />
                <Asiento estado={2} numero={31} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={1} numero={32} />
                <Asiento estado={1} numero={33} />
                <Asiento estado={1} numero={34} />
                <Asiento estado={2} numero={35} />
                <Asiento estado={2} numero={36} />
                <Asiento estado={1} numero={37} />
                <Asiento estado={2} numero={38} />
                <Asiento estado={1} numero={39} />
                <Asiento estado={1} numero={40} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={1} numero={41} />
                <Asiento estado={1} numero={42} />
                <Asiento estado={2} numero={43} />
                <Asiento estado={2} numero={44} />
                <Asiento estado={2} numero={45} />
                <Asiento estado={1} numero={46} />
                <Asiento estado={2} numero={47} />
                <Asiento estado={2} numero={49} />
                <Asiento estado={2} numero={50} />
            </View>
 */