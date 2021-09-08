import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Profile = ({navigation, route}) => {

    const {name} = route.params;
    console.log(route);

    return(
        <View>
            <Text> Perfil do {name} </Text>
        </View>
    );

}

const styles = StyleSheet.create({

});

export default Profile;