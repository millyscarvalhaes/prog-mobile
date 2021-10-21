import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Components
import { Button, Icon} from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';

// Redux
import { connect } from "react-redux";
import {userList} from "../../redux/actions/UserAction";
import {userFilter} from "../../redux/filters/UserFilter";

const UserList = (props) => {

    const [userList, onChangeUserList] = React.useState([]);

    // Construtor - ComponentDidMount
    React.useEffect( () => {
        
        props.userList();

        props.navigation.setOptions({
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
        props.navigation.navigate('UserForm')
    }

    const handleOnPress = (userId) => {
        props.navigation.navigate('UserDetails', {userId: userId})
    }

    return(
        <View>
            <Text> Perfil do {name} </Text>
            
            {
                props.userArray.map( (item, index) => (

                    <ListItem key={index} bottomDivider onPress={ () => handleOnPress(item.id) }>
                        <Avatar source={{uri: item.thumb}} rounded />
                        <ListItem.Content >
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.position}</ListItem.Subtitle>
                        </ListItem.Content>
                
                    </ListItem>

                ))
            }

        </View>
    );

}

const styles = StyleSheet.create({

});

export default connect(userFilter, {userList})(UserList) ;