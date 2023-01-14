import { View, Pressable, Image, StyleSheet } from 'react-native'
import { useState, useCallback, useEffect, useMemo, memo, useTransition } from 'react'

import { sillas } from '../../../utils/databases/sillas'
import Elemento from '../../../components/scrPuestos/asineto';

export default function Asientos({ array, setArray, reserv }) {


    const [isPending, startTransition] = useTransition();

    const [asiento, setAsiento] = useState(sillas)



    const onSelect = useCallback((items, status) => {

        const aux = [...array, items]

        const container = []

        asiento.forEach((e) => {
            if (e.numero == items) {
                container.push({
                    numero: items,
                    estado: 3
                })
            }
            else container.push(e)

        })
        setAsiento(container)

        return setArray(aux)

    }, [array])

    const onRemove = useCallback((items, status) => {

        const aux = array.filter(e => e !== items)

        const container = []

        asiento.forEach((e) => {
            if (e.numero == items) {
                container.push({
                    numero: items,
                    estado: 1
                })
            }
            else container.push(e)

        })
        setAsiento(container)

        return setArray(aux)

    }, [array])


    /** */

    const Containers = ({ maps }) => {
        return (
            <>
                {
                    maps.map((key, index) => {
                        return (
                            <View key={index}>
                                <Elemento estado={asiento[key - 1].estado} numero={asiento[key - 1].numero} onSelect={onSelect} onRemove={onRemove}/>
                            </View>
                        )
                    })
                }
            </>
        )
    }


    return (
        <View style={{ marginBottom: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
                    <Containers maps={[1, 2, 3]} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Containers maps={[4, 5, 6]} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Containers maps={[7, 8, 9, 10]} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Containers maps={[11, 12, 13, 14]} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%', paddingHorizontal: '5%' }}>
                <Containers maps={[15, 16, 17, 18, 19, 20, 21, 22]} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Containers maps={[23, 24, 25, 26, 27, 28, 29, 30, 31]} />
            </View>


            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>

            </View>


            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>

                <Containers maps={[41, 42, 43, 44, 45, 46, 47, 48, 49]} />

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
 * 
         

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%', paddingHorizontal: '5%' }}>
                <Asiento estado={asiento[15].estado} numero={asiento[15].numero} />
                <Asiento estado={asiento[16].estado} numero={asiento[16].numero} />
                <Asiento estado={asiento[17].estado} numero={asiento[17].numero} />
                <Asiento estado={asiento[18].estado} numero={asiento[18].numero} />
                <Asiento estado={asiento[19].estado} numero={asiento[19].numero} />
                <Asiento estado={asiento[20].estado} numero={asiento[20].numero} />
                <Asiento estado={asiento[21].estado} numero={asiento[21].numero} />
                <Asiento estado={asiento[22].estado} numero={asiento[22].numero} />
            </View>


            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={asiento[23].estado} numero={asiento[23].numero} />
                <Asiento estado={asiento[24].estado} numero={asiento[24].numero} />
                <Asiento estado={asiento[25].estado} numero={asiento[25].numero} />
                <Asiento estado={asiento[26].estado} numero={asiento[26].numero} />
                <Asiento estado={asiento[27].estado} numero={asiento[27].numero} />
                <Asiento estado={asiento[28].estado} numero={asiento[28].numero} />
                <Asiento estado={asiento[29].estado} numero={asiento[29].numero} />
                <Asiento estado={asiento[30].estado} numero={asiento[30].numero} />
                <Asiento estado={asiento[31].estado} numero={asiento[31].numero} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={asiento[32].estado} numero={asiento[32].numero} />
                <Asiento estado={asiento[33].estado} numero={asiento[33].numero} />
                <Asiento estado={asiento[34].estado} numero={asiento[34].numero} />
                <Asiento estado={asiento[35].estado} numero={asiento[35].numero} />
                <Asiento estado={asiento[36].estado} numero={asiento[36].numero} />
                <Asiento estado={asiento[37].estado} numero={asiento[37].numero} />
                <Asiento estado={asiento[38].estado} numero={asiento[38].numero} />
                <Asiento estado={asiento[39].estado} numero={asiento[39].numero} />
                <Asiento estado={asiento[40].estado} numero={asiento[40].numero} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: '5%', justifyContent: 'center' }}>
                <Asiento estado={asiento[41].estado} numero={asiento[41].numero} />
                <Asiento estado={asiento[42].estado} numero={asiento[42].numero} />
                <Asiento estado={asiento[43].estado} numero={asiento[43].numero} />
                <Asiento estado={asiento[44].estado} numero={asiento[44].numero} />
                <Asiento estado={asiento[45].estado} numero={asiento[45].numero} />
                <Asiento estado={asiento[46].estado} numero={asiento[46].numero} />
                <Asiento estado={asiento[47].estado} numero={asiento[47].numero} />
                <Asiento estado={asiento[48].estado} numero={asiento[48].numero} />
                <Asiento estado={asiento[49].estado} numero={asiento[49].numero} />
            </View>

 */