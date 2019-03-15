import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-e5298.cloudfunctions.net';

class SignUpForm extends Component {

    state = { phone: '' }; // note this is ES7...same as using this.state in constructor

    handleSubmit = async () => {
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });  
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch (err) {
            console.log(err);
        }
    }

    // NOTE: using arrow function above instead of vanilla function prevents
    // us from needing to bind 'this' in the Button tag below!!!

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <Text>Enter Phone Number</Text>
                    <TextInput 
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}   
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        )
    }
}

export default SignUpForm;