import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button, Icon} from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';

//Service
import UserService from '../../services/UserService';

const UserList = ({navigation}) => {

    const [userList, onChangeUserList] = React.useState([]);

    // Construtor - ComponentDidMount
    React.useEffect( () => {

        UserService.list()
            .then( (response) => {
                onChangeUserList(response.data);
            });

        navigation.setOptions({
            title: "Lista de usuários",
            headerRight: () => (
                <View style={styles.flexContainer} >
                    <Button
                        type="clear"
                        onPress={ () => handleOnPressAdd() }
                        icon={ <Icon name='add-circle-outline' size={30} type='ionicon' color='#333333' /> }
                    />

                </View>
            )
        });

    } );

    const handleOnPressAdd = () => {
        navigation.navigate('UserForm')
    }

    const handleOnPress = (item) => {
        navigation.navigate('UserDetails', {user: item})
    }

    return(
        <View>
            <Text> Perfil do {name} </Text>
            
            {
                userList.map( (item, index) => (

                    <ListItem key={index} bottomDivider onPress={ () => handleOnPress(item) }>
                        <Avatar source={{uri: item.thumb}} rounded />
                        <ListItem.Content >
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.postion}</ListItem.Subtitle>
                        </ListItem.Content>
                
                    </ListItem>

                ))
            }

        </View>
    );

}

const styles = StyleSheet.create({

});

export default UserList;