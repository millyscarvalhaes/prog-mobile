import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = ({navigation}) => {

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");


    const handleLogin = () => {
        console.log("handleLogin {"+ username+ ","+ password+ "}" );
        
        navigation.navigate('Profile', {name: username, email: "millys@email.com"})
    
    }

    return(
        <View>
            
            <Input 
                placeholder="username@email.com" 
                leftIcon={ { type: "font-awesome", name: "envelope"} }
                onChangeText={onChangeUsername}
            />

            <Input 
                placeholder="Informe a senha" 
                leftIcon={ { type: "font-awesome", name: "lock"} }
                onChangeText={onChangePassword}
                secureTextEntry={true}
            />

            <Button
                title="Login 2" 
                onPress={handleLogin}
            />

            
        </View>
    );

}

const styles = StyleSheet.create({

});

export default Login;