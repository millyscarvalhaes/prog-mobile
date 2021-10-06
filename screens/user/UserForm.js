import React from 'react';

//Components 
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

//Formik
import { Formik } from 'formik';

//Service
import UserService from '../../services/UserService';


const UserForm = () => {

    const user = {
        id: "",
        name: "",
        position: "",
        thumb: ""
    }

    const handleOnSubmit = (values) => {
        console.log(" Form Submit");
        console.log(values);

        UserService.save(values);

    }

    return (
        <View>
            <Text>User Form</Text>

            <Formik
                initialValues={user}
                onSubmit={ (values) => { handleOnSubmit(values) } }
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