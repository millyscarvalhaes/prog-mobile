import React from 'react';

//Components 
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

//Formik
import { Formik } from 'formik';

//Service
import UserService from '../../services/UserService';


const UserForm = ({navigation, route}) => {

    const [userItem, onChangeUserItem] = React.useState({});

    const {userId} = route.params || {};
    if( userId !== undefined){
        UserService.findById(userId)
            .then( reponse => {
                onChangeUserItem(reponse.data);
                console.log(reponse.data)
            });
    }

    const handleOnSubmit = (values) => {
        console.log(" Form Submit");
        console.log(values);

        UserService.save(values);
        navigation.navigate('UserList');

    }

    const userValues = () => {
        return {
            id: userItem.id || undefined,
            name: userItem.name || "",
            position: userItem.position || "",
            thumb: userItem.thumb || ""
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

export default UserForm;