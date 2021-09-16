import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button, Icon} from 'react-native-elements';

const UserDetails = ({navigation, route}) => {

    const {user} = route.params;

    // Construtor - ComponentDidMount
    React.useLayoutEffect( () => {

        navigation.setOptions({
            title: "Detalhes do usuário",
            headerRight: () => (
                <View style={styles.flexContainer} >
                    <Button
                        type="clear"
                        icon={ <Icon name='refresh-circle-outline' size={30} type='ionicon' color='#333333' /> }
                    />

                    <Button
                        type="clear"
                        icon={ <Icon name='trash-outline' type='ionicon' size={30} color='#333333' /> }
                    />

                </View>
            )
        });

    } );

    return (
        <View>
            <Text>User Details: {user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },

});

export default UserDetails;