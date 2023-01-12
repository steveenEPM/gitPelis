import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

import ListHome from '../containers/session/Home/listHome';
import { Vista } from "../components/components";
import { Peliculas } from '../utils/databases/peliculas';

export default function Homes() {

    const route = useRoute()

    const navigation = useNavigation()


    return (
        <Vista>
            <ScrollView>
                <ListHome etiquiteta={'Peliculas'} lista={Peliculas} />
                <ListHome etiquiteta={'Proximas peliculas'} lista={Peliculas} />
                <ListHome etiquiteta={'Top peliculas'} lista={Peliculas} />
            </ScrollView>
        </Vista>
    )

}