import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Spass} from "./pages/telasenha/index";
import {Home} from "./pages/telamenu/index";

import {Ionicons} from "@expo/vector-icons"
 
const Tab = createBottomTabNavigator();

export function Rotas(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="home"
            component={Home}
            options={{
                tabBarShowLabel:false,
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return <Ionicons size={size} color={color} name={"home"} />
                    }   
                    return <Ionicons size={size} color={color} name={"home-outline"} />
                }
            }}
            />

               
            <Tab.Screen 
            name="pass"
            component ={Spass}
            options={{
                tabBarShowLabel:false,
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return <Ionicons size={size} color={color} name={"lock-closed"} />
                    }
                    return <Ionicons size={size} color={color} name={"lock-closed"} />
                }
            }}
            />
        </Tab.Navigator>
    )
}