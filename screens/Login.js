import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Login = ({navigation}) => {

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");


    const handleLogin = () => {
        console.log("handleLogin {"+ username+ ","+ password+ "}" );
        
        navigation.navigate('Profile', {name: username})
    
    }

    return(
        <View>
            
            <TextInput placeholder="Usuário" onChangeText={onChangeUsername} value={username} />
            <TextInput placeholder="Senha" onChangeText={onChangePassword} value={password} />

            <Button title="Entrar" onPress={handleLogin} />
            
        </View>
    );

}

const styles = StyleSheet.create({

});

export default Login;