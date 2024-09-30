import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamlist = {
    Home: undefined;
    Details: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamlist>();

export default function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen}></RootStack.Screen>
            <RootStack.Screen name="Details" component={DetailsScreen}></RootStack.Screen>
        </RootStack.Navigator>
    )
}