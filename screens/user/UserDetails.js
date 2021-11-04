import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button, Icon, Overlay} from 'react-native-elements';
import Modal from 'modal-react-native-web'; // apenas para DEV

// Redux
import { connect } from "react-redux";
import {userFindById, userDeleteById} from "../../redux/actions/UserAction";
import {userFilter} from "../../redux/filters/UserFilter";

const UserDetails = (props) => {

    const {userId} = props.route.params;
    const [visible, setVisible] = React.useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
      };

    const handleOnPressUpdate = () => {
        props.navigation.navigate('UserForm', {userId: userId})
    }

    const handleOnPressDelete = () => {
        props.userDeleteById(props.userItem.id);
        props.navigation.navigate('UserList')
    }

    // Construtor - ComponentDidMount
    React.useEffect( () => {

        props.userFindById(userId);

        props.navigation.setOptions({
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

    },[]);

    return (
        <View>
            <Text>Name: {props.userItem.name}s </Text>
            <Text>Position: {props.userItem.position}</Text>

            <Overlay  ModalComponent={Modal} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text style={styles.textHeader}>Confirmação !</Text>
                    <Text>Deseja excluir o {props.userItem.name} ?</Text>

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

export default connect(userFilter,{userFindById, userDeleteById})(UserDetails);