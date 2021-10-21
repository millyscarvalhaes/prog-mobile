import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button, Icon, Overlay} from 'react-native-elements';
import Modal from 'modal-react-native-web'; // apenas para DEV

//Service
import UserService from '../../services/UserService';

const UserDetails = ({navigation, route}) => {

    const {userId} = route.params;
    const [userItem, onChangeUserItem] = React.useState({});
    const [visible, setVisible] = React.useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
      };

    const handleOnPressUpdate = () => {
        navigation.navigate('UserForm', {userId: userId})
    }

    const handleOnPressDelete = () => {
        UserService.deleteById( userItem.id)
            .then( response => {
                navigation.navigate('UserList');
            })
    }

    // Construtor - ComponentDidMount
    React.useEffect( () => {

        UserService.findById(userId)
            .then( reponse => {
                onChangeUserItem(reponse.data);
            });

        navigation.setOptions({
            title: "Detalhes do usuário",
            headerRight: () => (
                <View style={styles.flexContainer} >
                    <Button
                        type="clear"
                        onPress={ () => handleOnPressUpdate() }
                        icon={ <Icon name='pencil-sharp' size={30} type='ionicon' color='#333333' /> }
                    />

                    <Button
                        type="clear"
                        onPress={ ()=> toggleOverlay()}
                        icon={ <Icon name='trash-outline' type='ionicon' size={30} color='#333333' /> }
                    />

                </View>
            )
        });

    } );

    return (
        <View>
            <Text>Name: {userItem.name}</Text>
            <Text>Position: {userItem.position}</Text>

            <Overlay  ModalComponent={Modal} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text style={styles.textHeader}>Confirmação !</Text>
                    <Text>Deseja excluir o {userItem.name} ?</Text>

                    <View  style={styles.container}>
                        <Button
                            type="solid"
                            onPress={ () => toggleOverlay() }
                            title="Cancelar"
                            buttonStyle={styles.btnSecondary}
                        />
                        <Button
                            type="solid"
                            onPress={ () => handleOnPressDelete() }
                            title="Excluir"
                            buttonStyle={styles.btnDanger}
                        />
                    </View>



            </Overlay>



        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },
    container: {
        padding: 10
    },
    textHeader: {
        fontWeight: "bold",
        fontSize: 22
    },

    btnDanger: {
        backgroundColor: "#dc3545",
        color: "#fff"
    },
    btnSecondary: {
        backgroundColor: "#6c757d",
        color: "#fff",
        marginRight: 20
    }

});

export default UserDetails;