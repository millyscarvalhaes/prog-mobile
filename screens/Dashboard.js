import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dashboard = ({navigation, route}) => {

    const list = [
        {
            title: 'Usuários',
            icon: 'user',
            path: 'UserList'
        },
        {
            title: 'Produtos',
            icon: 'user',
            path: 'Login'
        }
    ];

    const handleOnPress = (path) => {
        navigation.navigate(path)
    }


    const {name, email} = route.params;

    return(
        <View>
            <Text> Perfil do {name} </Text>
            
            {
                list.map( (item, index) => (

                    <ListItem key={index} bottomDivider  onPress={ () => handleOnPress(item.path)}>
                        <Icon name={item.icon} type='font-awesome' />
                        <ListItem.Content >
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                
                    </ListItem>

                ))
            }

        </View>
    );

}

const styles = StyleSheet.create({

});

export default Dashboard;