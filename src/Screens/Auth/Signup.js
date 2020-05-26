import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, TouchableWithoutFeedback, View, Platform, Text, StatusBar, ImageBackground, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Icon, Button, CheckBox } from 'react-native-elements';

import * as Styles from '../../Assets/Styles'
import * as Colors from '../../Assets/Colors'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { withTheme } from 'react-native-paper';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            fNameError: '',
            lName: '',
            lNameError: '',
            emailError: '',
            email: '',
            phoneError: '',
            phone:'',
            passwordError: '',
            password: '',
            confirmPassword: '',
            confirmPasswordError: '',
            isPasswordHidden: true,
            isConfirmPasswordHidden: true,
            loading: false,
            generalError: '',
            male: true,
            coordinator: true,
            age: ''
        }
    }

    onSignupPressed = () => {
        var isEverythingAlright = true;
        const {fName, lName, email, phone, password, confirmPassword, age, male, coordinator } = this.state;

        if(fName.length === 0){
            this.setState({fNameError: "First Name cannot be blank"});
            isEverythingAlright = false;
        }
        if(lName.length === 0){
            this.setState({lNameError: "Last Name cannot be blank"});
            isEverythingAlright = false;
        }
        if(email.length === 0 || email.includes("@")===false || email.includes(".")===false){
            this.setState({emailError: "Invalid Email Address"});
            isEverythingAlright = false;
        }
        if(phone.length != 10 ){
            this.setState({phoneError: "Invalid Phone Number"});
            isEverythingAlright = false;
        }
        if(password.length < 4 ){
            this.setState({passwordError: "Password should have minimum 4 characters, a special character, a uppercase and a lowercase character"});
            isEverythingAlright = false;
        }
        if(confirmPassword != password ){
            this.setState({confirmPasswordError: "Passwords do not match"});
            isEverythingAlright = false;
        }

        if(isEverythingAlright){
            let profile = {
                fName, lName, email, phone, password, confirmPassword, age, male, coordinator
            }
            console.log(profile);
            this.props.navigation.navigate('Main', {profile});
        }
    }

    onLoginPressed = () => {
        this.props.navigation.navigate('Auth');
    }

    renderEye = () => {
        if (this.state.isPasswordHidden) {
            return (
                <Icon 
                name='eye-slash' 
                type='font-awesome' 
                size={22} 
                color={this.state.emailError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }
                onPress={() => {this.setState({isPasswordHidden: false})}}    
                />
            );
        } else {
            return (
                <Icon 
                name='eye' 
                type='font-awesome' 
                size={22} 
                color={this.state.emailError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }
                onPress={() => {this.setState({isPasswordHidden: true})}}    
                />
            );
        }
    }

    renderEye2 = () => {
        if (this.state.isConfirmPasswordHidden) {
            return (
                <Icon 
                name='eye-slash' 
                type='font-awesome' 
                size={22} 
                color={this.state.confirmPasswordError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }
                onPress={() => {this.setState({isConfirmPasswordHidden: false})}}    
                />
            );
        } else {
            return (
                <Icon 
                name='eye' 
                type='font-awesome' 
                size={22} 
                color={this.state.confirmPasswordError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }
                onPress={() => {this.setState({isConfirmPasswordHidden: true})}}    
                />
            );
        }
    }

    renderGeneralError = () => {
        if (this.state.generalError != '') {
            return(
                <View style={{marginBottom: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={[Styles.labelText, {marginLeft: 5, color: Colors.RED_ERROR}]}>{this.state.generalError}</Text>
                </View>
            )
        }
    }
    
    render() {
        return (
            <View style={{flex: 1}} behavior="padding">
                <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
                <LinearGradient
                colors={[Colors.BG_GRADIENT_1, Colors.BG_GRADIENT_2, Colors.BG_GRADIENT_3]}
                style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ImageBackground source={require('../../Assets/png/bgAsset1.png')} style={{flex:1}}>
                           <ScrollView style={{flex: 1, paddingVertical: 100, paddingHorizontal: 0}}>
                           <Text style={[Styles.logoText, {fontWeight: '500'}]}>Signup</Text>
                            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                                <View style={{flex: 1}}>
                                    <Input
                                        placeholder = 'Param'
                                        inputStyle = {{marginHorizontal: 5}}
                                        inputContainerStyle = {{borderWidth: 1, borderColor: this.state.fNameError == '' ? '#eee' : 'red', borderRadius: 20, width: '100%', backgroundColor: '#fff'}}
                                        leftIcon = { <Icon name='person' type='material' size={20} color={this.state.fNameError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }/> }
                                        leftIconContainerStyle = {{padding: 5, marginHorizontal: 5}}
                                        errorMessage = {this.state.fNameError}
                                        errorStyle = {{marginHorizontal: 20, paddingHorizontal: 5}}
                                        autoCapitalize = 'words'
                                        autoCompleteType = 'name'
                                        autoFocus = {false}
                                        clearButtonMode = 'while-editing'
                                        enablesReturnKeyAutomatically = {true}
                                        keyboardType = 'ascii-capable'
                                        onChangeText = {(text) => {this.setState({fNameError: '', fName: text, generalError: ''})}} 
                                        value = {this.state.fName}
                                        returnKeyType = 'next'
                                        onSubmitEditing={() => {this.lNameInput.focus()}}
                                        blurOnSubmit={false}
                                        textContentType = 'name'
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Input
                                        ref={(input) => { this.lNameInput = input; }}
                                        placeholder = 'Jain'
                                        inputStyle = {{marginHorizontal: 5}}
                                        inputContainerStyle = {{borderWidth: 1, borderColor: this.state.lNameError == '' ? '#eee' : 'red', borderRadius: 20, width: '100%', backgroundColor: '#fff'}}
                                        leftIcon = { <Icon name='person-outline' type='material' size={20} color={this.state.lNameError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }/> }
                                        leftIconContainerStyle = {{padding: 5, marginHorizontal: 5}}
                                        errorMessage = {this.state.lNameError}
                                        errorStyle = {{marginHorizontal: 20, paddingHorizontal: 5}}
                                        autoCapitalize = 'words'
                                        autoCompleteType = 'name'
                                        autoFocus = {false}
                                        clearButtonMode = 'while-editing'
                                        enablesReturnKeyAutomatically = {true}
                                        keyboardType = 'ascii-capable'
                                        onChangeText = {(text) => {this.setState({lNameError: '', lName: text, generalError: ''})}} 
                                        value = {this.state.lName}
                                        returnKeyType = 'next'
                                        onSubmitEditing={() => {this.emailInput.focus()}}
                                        blurOnSubmit={false}
                                        textContentType = 'familyName'
                                    />
                                </View>
                            </View>
                            <View style={{paddingHorizontal: 10, marginTop: 0}}>
                                <Input
                                ref={(input) => { this.emailInput = input; }}
                                placeholder = 'param@bunksheet.com'
                                inputStyle = {{marginHorizontal: 5}}
                                inputContainerStyle = {{borderWidth: 1, borderColor: this.state.emailError == '' ? '#eee' : 'red', borderRadius: 20, width: '100%', backgroundColor: '#fff'}}
                                leftIcon = { <Icon name='envelope-o' type='font-awesome' size={20} color={this.state.emailError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }/> }
                                leftIconContainerStyle = {{padding: 5, marginHorizontal: 5}}
                                errorMessage = {this.state.emailError}
                                errorStyle = {{marginHorizontal: 20, paddingHorizontal: 5}}
                                autoCapitalize = 'none'
                                autoCompleteType = 'email'
                                autoFocus = {false}
                                clearButtonMode = 'while-editing'
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'email-address'
                                onChangeText = {(text) => {this.setState({emailError: '', email: text, generalError: ''})}} 
                                value = {this.state.email}
                                returnKeyType = 'next'
                                onSubmitEditing={() => {this.phoneInput.focus()}}
                                blurOnSubmit={false}
                                textContentType = 'emailAddress'
                                />
                                <Input
                                ref={(input) => { this.phoneInput = input; }}
                                placeholder = '9876543210'
                                inputStyle = {{marginHorizontal: 10}}
                                inputContainerStyle = {{borderWidth: 1, borderColor: this.state.phoneError == '' ? '#eee' : 'red', borderRadius: 20, width: '100%',marginTop: 0, backgroundColor: '#fff'}}
                                leftIcon = { <Icon name='phone' type='font-awesome' size={20} color={this.state.phoneError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }/> }
                                leftIconContainerStyle = {{padding: 5, marginHorizontal: 5}}
                                errorMessage = {this.state.phoneError}
                                errorStyle = {{marginHorizontal: 20, paddingHorizontal: 5}}
                                autoCapitalize = 'none'
                                autoCompleteType = 'tel'
                                autoFocus = {false}
                                clearButtonMode = 'while-editing'
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'number-pad'
                                maxLength={10}
                                onChangeText = {(text) => {this.setState({phoneError: '', phone: text, generalError: ''})}} 
                                value = {this.state.phone}
                                returnKeyType = 'next'
                                onSubmitEditing={() => {this.passwordInput.focus()}}
                                blurOnSubmit={false}
                                textContentType = 'telephoneNumber'
                                />
                                <Input
                                ref={(input) => { this.passwordInput = input; }}
                                placeholder = '********'
                                inputStyle = {{marginHorizontal: 8}}
                                inputContainerStyle = {{borderWidth: 1, borderColor: this.state.passwordError == '' ? '#eee' : 'red', borderRadius: 20, width: '100%', marginTop: 0, backgroundColor: '#fff'}}
                                leftIcon = { <Icon name='lock' type='font-awesome' size={22} color={this.state.passwordError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }/> }
                                leftIconContainerStyle = {{padding: 5, marginHorizontal: 10}}
                                rightIcon = {this.renderEye()}
                                rightIconContainerStyle = {{padding: 5, marginHorizontal: 10}}
                                errorMessage = {this.state.passwordError}
                                errorStyle = {{marginHorizontal: 20, paddingHorizontal: 5}}
                                autoCapitalize = 'none'
                                autoCompleteType = 'password'
                                clearTextOnFocus = {true}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'default'
                                onChangeText = {(text) => {this.setState({passwordError: '', password: text, generalError: ''})}} 
                                value = {this.state.password}
                                returnKeyType = 'next'
                                textContentType = 'password'
                                secureTextEntry = {this.state.isPasswordHidden}
                                onSubmitEditing={() => {this.confirmPasswordInput.focus()}}
                                blurOnSubmit={false}
                                />
                                <Input
                                ref={(input) => { this.confirmPasswordInput = input; }}
                                placeholder = '********'
                                inputStyle = {{marginHorizontal: 2}}
                                inputContainerStyle = {{borderWidth: 1, borderColor: this.state.confirmPasswordError == '' ? '#eee' : 'red', borderRadius: 20, width: '100%', marginTop: 0, backgroundColor: '#fff'}}
                                leftIcon = { <Icon name='lock-outline' type='material' size={22} color={this.state.confirmPasswordError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }/> }
                                leftIconContainerStyle = {{padding: 5, marginHorizontal: 10}}
                                rightIcon = {this.renderEye2()}
                                rightIconContainerStyle = {{padding: 5, marginHorizontal: 10}}
                                errorMessage = {this.state.confirmPasswordError}
                                errorStyle = {{marginHorizontal: 20, paddingHorizontal: 5}}
                                autoCapitalize = 'none'
                                autoCompleteType = 'password'
                                clearTextOnFocus = {true}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'default'
                                onChangeText = {(text) => {this.setState({confirmPasswordError: '', confirmPassword: text, generalError: ''})}} 
                                value = {this.state.confirmPassword}
                                returnKeyType = 'next'
                                returnKeyLabel = 'Next'
                                textContentType = 'password'
                                secureTextEntry = {this.state.isConfirmPasswordHidden}
                                focus = {this.state.focusConfirmPasswordInput}
                                />
                                <Input
                                placeholder = 'Age'
                                inputStyle = {{marginHorizontal: 2}}
                                inputContainerStyle = {{borderWidth: 1, borderColor: this.state.confirmPasswordError == '' ? '#eee' : 'red', borderRadius: 20, width: '100%', marginTop: 0, backgroundColor: '#fff'}}
                                leftIcon = { <Icon name='insert-emoticon' type='material' size={22} color={this.state.confirmPasswordError == '' ? Colors.DEEP_BLUE_1 : Colors.RED_ERROR }/> }
                                leftIconContainerStyle = {{padding: 5, marginHorizontal: 10}}
                                errorMessage = {this.state.confirmPasswordError}
                                errorStyle = {{marginHorizontal: 20, paddingHorizontal: 5}}
                                autoCapitalize = 'none'
                                clearTextOnFocus = {true}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'numeric'
                                onChangeText = {(text) => {this.setState({age: text, generalError: ''})}} 
                                value = {this.state.age}
                                returnKeyType = 'go'
                                returnKeyLabel = 'GO'
                                onSubmitEditing = {() => {this.onSignupPressed()}}
                                />
                                {this.renderGeneralError()}
                                <View style={{flexDirection: 'row'}}>
                                    <CheckBox
                                        center
                                        containerStyle={{flex: 1, backgroundColor: 'transparent', borderWidth: 0}}
                                        textStyle={{color: '#fff'}}
                                        title='Male'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        onPress={() => {this.setState({male: !this.state.male})}}
                                        checked={this.state.male}
                                        />
                                    <CheckBox
                                        center
                                        containerStyle={{flex: 1,backgroundColor: 'transparent', borderWidth: 0}}
                                        textStyle={{color: '#fff'}}
                                        title='Female'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={!this.state.male}
                                        onPress={() => {this.setState({male: !this.state.male})}}
                                        />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <CheckBox
                                        center
                                        containerStyle={{flex: 1, backgroundColor: 'transparent', borderWidth: 0}}
                                        textStyle={{color: '#fff'}}
                                        title='Coordinator'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        onPress={() => {this.setState({coordinator: !this.state.coordinator})}}
                                        checked={this.state.coordinator}
                                        />
                                    <CheckBox
                                        center
                                        containerStyle={{flex: 1,backgroundColor: 'transparent', borderWidth: 0}}
                                        textStyle={{color: '#fff'}}
                                        title='Respondant'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={!this.state.coordinator}
                                        onPress={() => {this.setState({coordinator: !this.state.coordinator})}}
                                        />
                                </View>
                                <Button
                                containerStyle={{marginHorizontal: 10, marginTop: 40}}
                                buttonStyle = {{borderRadius: 20}}
                                title = 'Create Account'
                                onPress={() => this.onSignupPressed()}
                                raised = {true}
                                disabled = {this.state.loading}
                                ViewComponent={LinearGradient}
                                loading = {this.state.loading}
                                linearGradientProps={{
                                    colors: [Colors.BTN_GRADIENT_1, Colors.BTN_GRADIENT_2],
                                }}
                                />
                                <TouchableOpacity style={{paddingHorizontal: 30, marginVertical: 15}} onPress={() => this.onLoginPressed()}>
                                    <Text style={[Styles.forgotPassword, {textAlign: 'center', color: '#eee'}]}>Already have an Account? Login!</Text>
                                </TouchableOpacity>
                                <View>
                                </View>
                            </View>
                            <View style={{marginTop: 100}} />
                           </ScrollView>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </LinearGradient>
            </View>
        )
    }

}

export default withTheme(Signup);