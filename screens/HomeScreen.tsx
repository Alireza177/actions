import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamlist } from '../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamlist, "Home">;

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title='Details' onPress={() => navigation.navigate('Details')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
