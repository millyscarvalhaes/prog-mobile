import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements';

const UserList = ({navigation}) => {

    const list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
          subtitle: 'Vice Chairman'
        },
    ]

    const handleOnPress = (item) => {
        navigation.navigate('UserDetails', {user: item})
    }

    return(
        <View>
            <Text> Perfil do {name} </Text>
            
            {
                list.map( (item, index) => (

                    <ListItem key={index} bottomDivider onPress={ () => handleOnPress(item) }>
                        <Avatar source={{uri: item.avatar_url}} rounded />
                        <ListItem.Content >
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
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