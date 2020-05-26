import React from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image, ImageBackground, StatusBar, Platform, YellowBox } from 'react-native';
import { withTheme, Avatar } from 'react-native-paper';
import { Icon, Button, Input } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";

import * as Styles from "../../Assets/Styles";
import * as Colors from "../../Assets/Colors";
import { TouchableOpacity } from 'react-native-gesture-handler';

class Auth extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            dummyAccess: {
                email: 'param_jain@icloud.com',
                password: '1234567890'
            }
        }
    }

    onLoginPressed = () => {
        if (this.state.email == this.state.dummyAccess.email && this.state.password == this.state.dummyAccess.password) {
            //alert('Logged In')
            let profile = {
                "age": "22",
                "confirmPassword": "1234567890",
                "coordinator": true,
                "email": "param_jain@icloud.com",
                "fName": "Param",
                "lName": "Jain",
                "male": true,
                "password": "1234567890",
                "phone": "8668462386",
              }
            this.props.navigation.navigate('Main', { profile });
        }
    } 

    onSignupPressed = () => {
        this.props.navigation.navigate('Signup')
    }

    render() {
        return (
            <ImageBackground source={require('../../Assets/png/bgAsset1.png')} style={{flex:1, backgroundColor: '#fff', paddingHorizontal: 10}}>
                <StatusBar translucent={true} hidden={false} barStyle='dark-content' animated={true} backgroundColor="#fff"/>
                <View style={{paddingHorizontal: 25, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    {
                        Dimensions.get('window').height < 800 ? 
                        Dimensions.get('window').height < 700 ? <View style={{marginTop: -135}} /> : <View style={{marginTop: -50}} />  :
                        <View style={{marginTop: 0}} />
                    }
                    <Image style={{marginLeft: 0}} source={require("../../Assets/png/download.png")} />
                    <Text style={[Styles.text, {fontSize: 35, fontWeight: "800", marginTop: 0, textAlign: 'left',}]}>EduFund's MF</Text>
                    {
                        Dimensions.get('window').height < 800 ? 
                        <View style={{marginTop: 0}} /> :
                        <View style={{marginTop: 50}} />
                    }
                    <Text style={[Styles.text, {fontSize: 18, marginBottom: 10}]}>Get started with</Text>
                    <View style={{flexDirection: 'column'}}>
                    <Input
                        placeholder="param@bunksheet.com"
                        inputStyle={{ marginHorizontal: 5 }}
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor: this.state.emailError == "" ? "#eee" : "red",
                            borderRadius: 20,
                            width: "100%",
                            backgroundColor: "#fff",
                        }}
                        leftIcon={
                            <Icon
                            name="envelope-o"
                            type="font-awesome"
                            size={20}
                            color={
                                this.state.emailError == ""
                                ? Colors.DEEP_BLUE_1
                                : Colors.RED_ERROR
                            }
                            />
                        }
                        leftIconContainerStyle={{ padding: 5, marginHorizontal: 5 }}
                        errorMessage={this.state.emailError}
                        errorStyle={{ marginHorizontal: 20, paddingHorizontal: 5 }}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoFocus={false}
                        clearButtonMode="while-editing"
                        enablesReturnKeyAutomatically={true}
                        keyboardType="email-address"
                        onChangeText={(text) => {
                            this.setState({
                            emailError: "",
                            email: text
                            });
                        }}
                        value={this.state.email}
                        textContentType="emailAddress"
                        />
                    <Input
                        placeholder="********"
                        inputStyle={{ marginHorizontal: 8 }}
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor:
                            this.state.passwordError == "" ? "#eee" : "red",
                            borderRadius: 20,
                            width: "100%",
                            marginTop: -10,
                            backgroundColor: "#fff",
                        }}
                        leftIcon={
                            <Icon
                            name="lock"
                            type="font-awesome"
                            size={22}
                            color={
                                this.state.emailError == ""
                                ? Colors.DEEP_BLUE_1
                                : Colors.RED_ERROR
                            }
                            />
                        }
                        leftIconContainerStyle={{ padding: 5, marginHorizontal: 10 }}
                        errorMessage={this.state.passwordError}
                        errorStyle={{ marginHorizontal: 20, paddingHorizontal: 5 }}
                        autoCapitalize="none"
                        autoCompleteType="password"
                        clearTextOnFocus={true}
                        enablesReturnKeyAutomatically={true}
                        keyboardType="default"
                        onChangeText={(text) => {
                            this.setState({
                            passwordError: "",
                            password: text,
                            generalError: "",
                            });
                        }}
                        value={this.state.password}
                        returnKeyType="go"
                        textContentType="password"
                        secureTextEntry={true}
                        onSubmitEditing={() => {
                            this.onLoginPressed();
                        }}
                        />
                        <Button
                            containerStyle={{ marginHorizontal: 10, marginTop: -10 }}
                            buttonStyle={{ borderRadius: 20 }}
                            title="Login"
                            onPress={() => this.onLoginPressed()}
                            raised={true}
                            disabled={this.state.loading}
                            ViewComponent={LinearGradient}
                            loading={this.state.loading}
                            linearGradientProps={{
                                colors: ['#A774DB', '#4147D9'],
                            }}
                        />
                        <TouchableOpacity
                            style={{ paddingHorizontal: 30, marginVertical: 15 }}
                            onPress={() => this.onSignupPressed()}
                            >
                            <Text
                                style={[
                                Styles.text,
                                { textAlign: "center", color: "#666" },
                                ]}
                            >
                                New to EduFund? Sign Up!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default withTheme(Auth);