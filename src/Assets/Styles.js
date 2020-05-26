import { Platform } from 'react-native';

import * as Colors from '../Assets/Colors'

export const text = {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    color: Colors.DEEP_BLUE_BLACK
};

export const loginFormTextInput = {
    height: 43,
    fontSize: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#777777',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
};

export const logoText = {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    fontSize: 35,
    fontWeight: "800",
    marginTop: -15,
    marginBottom: 30,
    textAlign: 'center',
    color:'#fff'
};

export const noteText = {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    fontSize: 12,
    fontWeight: "300",
    marginTop: -15,
    marginBottom: 30,
    textAlign: 'center',
    color:'#fff'
};

export const labelText ={
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    fontSize: 14,
    fontWeight: "300",
    color:'#fff'
}

export const cardText = {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    fontSize: 16,
    marginTop: 5,
    fontWeight: "300",
    textAlign: 'center',
    color:'#fff'
};

export const forgotPassword = {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    color:'#fff'
};

export const animationContainer = {
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
};


export const raised = {
    borderRadius:20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
};

export const container = {
    borderColor: Colors.DEEP_BLUE_BLACK,
    borderWidth: 0,
    marginHorizontal: 0,
    borderRadius: 20,
    justifyContent: 'center',
};

export const scrollcontent = {
    borderColor: 'black',
    borderWidth: 0,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'

};

export const barContainer = {
    zIndex: 2,
    borderWidth: 0,
    borderColor: Colors.DEEP_BLUE_BLACK,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 30
};

export const track = {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 10,
    width: 10,
    borderRadius: 50,
};

export const bar = {
    backgroundColor: Colors.BTN_GRADIENT_1,
    height: 10,
    position: 'absolute',
    left: 0,
    top: 0,
};

