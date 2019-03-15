import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-e5298.cloudfunctions.net';

class SignInForm extends Component {

    state = { phone: '', code: '' }; // note this is ES7...same as using this.state in constructor

    handleSubmit = async () => {
        try {
            let { data } = await axios.post(
                `${ROOT_URL}/verifyOneTimePassword`, 
                { phone: this.state.phone, code: this.state.code }
            );
            
            firebase.auth().signInWithCustomToken(data.token)
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
                <View style={{ marginBottom: 10 }}>
                    <Text>Enter Code</Text>
                    <TextInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        )
    }
}

export default SignInForm;