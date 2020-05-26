import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { withTheme } from 'react-native-paper';
import { ListItem, Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Profile extends React.Component {
    render() {
        let profile = this.props.profile;
        return (
            <View style={styles.container}>
                <ScrollView style={[styles.scroll]}>
                    <View style={{marginTop: 30}}/>
                    <View style={styles.userRow}>
                        <View style={styles.userImage}>
                            <Avatar
                            rounded
                            size="large"
                            source={{
                                //uri: avatar,
                            }}
                            />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{ fontSize: 16 }}>{profile.fName} </Text>
                                <Text style={{ fontSize: 16 }}>{profile.lName}</Text>
                            </View>
                            <Text
                            style={{
                                color: 'gray',
                                fontSize: 16,
                            }}
                            >
                            {profile.email}
                            </Text>
                        </View>
                    </View>
                        
                    <View style={[styles.infoTextContainer, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <Text style={styles.infoText}>Personal Information</Text>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Edit', {profile})}}><Text style={[styles.infoText, {marginRight: 10}]}>Edit Details</Text></TouchableOpacity>
                    </View>

                    <View>
                        <ListItem
                            hideChevron
                            title="Age"
                            rightTitle={profile.age}
                            rightTitleStyle={{ fontSize: 15 }}
                            leftIcon={{name: 'person', color: 'red'}}
                            containerStyle={styles.listItemContainer}
                            
                        />
                        <ListItem
                            hideChevron
                            title="Phone No."
                            rightTitle={profile.phone}
                            rightTitleStyle={{ fontSize: 15 }}
                            leftIcon={{name: 'phone', color: 'blue'}}
                            containerStyle={styles.listItemContainer}
                        />
                        <ListItem
                            hideChevron
                            title="Gender"
                            rightTitle={profile.male ? 'Male' : 'Female'}
                            rightTitleStyle={{ fontSize: 15 }}
                            leftIcon={{name: 'intersex', type: 'font-awesome', color: 'green'}}
                            containerStyle={styles.listItemContainer}
                        />
                        <ListItem
                            hideChevron
                            title="User Type"
                            rightTitle={profile.coordinator ? 'Co-ordinator' : 'Respondent'}
                            rightTitleStyle={{ fontSize: 15 }}
                            leftIcon={{name: 'user-md', type: 'font-awesome', color: 'orange'}}
                            containerStyle={styles.listItemContainer}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 30,
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      },
      scroll: {
        backgroundColor: 'white',
      },
      userRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
      },
      userImage: {
        marginRight: 12,
      },
      listItemContainer: {
        height: 55,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
      },
      infoText: {
        fontSize: 16,
        marginLeft: 20,
        color: 'gray',
        fontWeight: '500',
      },
      infoTextContainer: {
        marginTop: 2,
        paddingTop: 20,
        paddingBottom: 12,
        backgroundColor: '#F4F5F4',
      },
}

export default withTheme(Profile);