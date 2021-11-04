import React from 'react';

//Components 
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

//Formik
import { Formik } from 'formik';

//Service
import UserService from '../../services/UserService';

// Redux
import { connect } from "react-redux";
import {userSave, userFindById} from "../../redux/actions/UserAction";
import {userFilter} from "../../redux/filters/UserFilter";


const UserForm = (props) => {

    const {userId} = props.route.params || {};

    

     // Construtor - ComponentDidMount
     React.useEffect( () => {

        if( userId !== undefined){
            props.userFindById(userId);
        }

     }, []);

    const handleOnSubmit = (values) => {
        props.userSave(values);
        props.navigation.navigate('UserList');

    }

    const userValues = () => {
        return {
            id: props.userItem.id || undefined,
            name: props.userItem.name || "",
            position: props.userItem.position || "",
            thumb: props.userItem.thumb || ""
        }
    }

    return (
        <View>
            <Text>User Form</Text>

            <Formik
                initialValues={ userValues() }
                onSubmit={ (values) => { handleOnSubmit(values) } }
                enableReinitialize
            >

                {({handleChange, handleSubmit,values}) => (
                    <View>

                        <Input label="Nome" placeholder='Nome' value={values.name} onChangeText={handleChange("name")} />
                        <Input label="Cargo" placeholder='Cargo' value={values.position} onChangeText={handleChange("position")} />

                        <Button title="Salvar" onPress={handleSubmit} />

                    </View>
                )}

            </Formik>


        </View>
    )
}

const styles = StyleSheet.create({

});

export default connect(userFilter, {userSave, userFindById})(UserForm)