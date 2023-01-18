import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useState } from "react";

import Session from "./src/navigations/session";
import Auth from "./src/navigations/auth";
import { jsonFonts } from "./src/hooks/fonts";
import { Authen } from "./src/components/contex";


export default function App() {

  const [state,setState] = useState(false)
    

    const [fontsLoaded] = useFonts(jsonFonts);

    if (!fontsLoaded) {
        return null;
    }

  return (
    <Authen.Provider value={{state,setState}}>
          <NavigationContainer>
      {
        state ?  <Session/> : <Auth/> 
      }

    </NavigationContainer>
    </Authen.Provider>

  );
}

