import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState, useCallback, useEffect, useMemo, memo, useTransition } from 'react'

const Elemento =  memo(({ estado, numero ,onSelect,onRemove}) => {


    const [status, setStatus] = useState(estado)

    return (
        <TouchableOpacity
            style={({ pressed }) => [pressed && { backgroundColor: 'rgba(0,0,0,.3)' }]}
            onPress={() => {
               if (status === 1) onSelect(numero, status)
               else if (status == 3)  onRemove(numero, status)
            }}
            
            
        >
            {
                /**Vacio */
                status === 1 &&
                <Image
                    source={require('../../../assets/imagenes/sillon-disponible.png')}
                    style={styles.imagen}
                />
            }
            {
                /**reservado */
                status === 2 &&
                <Image
                    source={require('../../../assets/imagenes/sillon-reservado.png')}
                    style={styles.imagen}
                />
            }
            {
                /**Seleccionado */
                status === 3 &&
                <Image
                    source={require('../../../assets/imagenes/sillon-selecion.png')}
                    style={styles.imagen}
                />
            }
        </TouchableOpacity>
    )

})


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

export default Elemento