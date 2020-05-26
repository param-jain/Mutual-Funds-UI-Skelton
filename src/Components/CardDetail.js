import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Share, Alert, ToastAndroid } from 'react-native';
import {Card, Avatar, Button, Icon} from 'react-native-elements';

export default class CardDetail extends Component{

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    
      let mf = {
        title: "Nippon India US Equity Opportunities Fund Direct - Growth",
        invested: false,
        minInvestment: 100,
        categoryReturns: '+6.73%',
        maxReturns: '+14.3%',
        schemeManager: 'Mr. Anju Chajjed',
        currentNAV: 18.994,
        updatedOn: '22 May 2020, 09:00 PM',
        plan: 'Growth',
        fundType: 'Open-End',
        schemeSize: '₹121.77Cr',
        expenseRation: '1.50%',
        cashHolding: '4.73%',
        asOn: '30 Apr 2020',
        exitLoad: 'Exit Load 1% if redeemed within 1 year.',
        schemeBenchmark: 'S&P 500 Total Return Index',
        graphData: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2
            }
          ],
          legend: ["Rainy Days", "Sunny Days", "Snowy Days"]
        }
      }

      const { navigation } = this.props; 
      const item = this.props.item;
      
      return(    
        <Card
          title={item.title}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              {
                item.invested ?
                <Text style={{padding: 5, borderWidth: 1, borderRadius: 10, borderColor: 'green'}}>Invested</Text> :
                <Text style={{padding: 5, borderWidth: 1, borderRadius: 10, borderColor: 'red'}}>Not Invested</Text>
              }
              <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <Text style={{color: '#666'}}>Current NAV:</Text>
                  <Text style={{color: 'green'}}> ₹ {item.currentNAV}</Text>
              </View>
              <Icon type='font-awesome' name='chevron-right' color='#aaa' />
          </View>
          <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#666'}}>Min. Invest</Text>
                  <Text style={{color: '#333'}}>₹ {item.minInvestment}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#666'}}>Category Return</Text>
                  <Text style={{color: '#333'}}>{item.categoryReturns}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#666'}}>Max Return</Text>
                  <Text style={{color: 'green'}}>{item.maxReturns}</Text>
              </View>
          </View>
        </Card>
          )
        } 
      }        

const mystyles = StyleSheet.create({
    avatarText: {
        textAlign: 'left',
        paddingLeft: 5,
        paddingTop: 5,
        color: '#000',
        fontWeight: 'bold',
      },
    
})

{/*
<Text style={{fontWeight: '600', marginBottom: 10}}></Text>

              <View style={{flexDirection:'row',justifyContent: 'space-around'}}>

              <View style={{flexDirection:'column', paddingRight: 15}}>
                <Avatar
                size="large"
                activeOpacity={0.7}/>
                <Text style={mystyles.avatarText}>{currCompany}</Text>
              </View>
        
        
        
              <View style={{flexDirection:'row', paddingLeft:5, marginLeft: 5}}>
        
                  <View style={{flexDirection:'column'}}>
        
                      <View style={{flexDirection:'row', paddingLeft:0, paddingBottom: 4}}>
                      <Icon name="cube" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                      <Text style={{fontSize: 12}}>  Work Experience </Text>
                      <Text style={{fontSize: 12, paddingLeft:5, paddingRight:10}}>:</Text>                
                      <Text style={{fontSize: 12}}>{totalWorkExpYears} Yrs {totalWorkExpMonths} Mnts</Text>
                      </View>
        
        
                      <View style={{flexDirection:'row', paddingBottom: 4}}>
                      <Icon name="money" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                      <Text style={{fontSize: 12}}>  Fees per call </Text>
                      <Text style={{fontSize: 12, paddingLeft:27, paddingRight:10}}>:</Text>                
                      <Text style={{fontSize: 12}}>INR {feePer30Mins} / 30 min</Text>
                      </View>
        
        
                      <View style={{flexDirection:'row', paddingBottom: 4}}>
                      <Icon name="industry" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                      <Text style={{fontSize: 12}}>  Industry </Text>
                      <Text style={{fontSize: 12, paddingLeft:54, paddingRight:10}}>:</Text>                
                      <Text style={{fontSize: 12}} >{((JSON.stringify(currIndustry)).length > 14) ? ((JSON.stringify(currIndustry).substring(2, 9)) + ' ...') : currIndustry}</Text> 
                      </View>
        
        
                      <View style={{flexDirection:'row', paddingBottom: 4}}>
                      <Icon name="star-half" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                      <Text style={{fontSize: 12}}>  Rating </Text>
                      <Text style={{fontSize: 12, paddingLeft:64, paddingRight:10}}>:</Text>                
                      <Text style={{fontSize: 12}}>{rating} / 5</Text>
                      </View>
                      
                  </View>

              </View>
        
              <View style={{flexDirection: 'column'}}>
                  <View style={{marginBottom: 30, marginLeft: 25}}>
                    {
                      (this.state.isBookmarked)
                      ? 
                      <Icon onPress={() => {onBookmarkPressed(item, false)}} name="bookmark" type="font-awesome" size={20} style={{alignContent:'center', paddingHorizontal: 10}}/> 
                      : 
                      <Icon onPress={() => {onBookmarkPressed(item, true)}} name="bookmark-o" type="font-awesome" size={20} style={{alignContent:'center', paddingHorizontal: 10}}/> 
                    }
                  </View>
                  <TouchableOpacity onPress={() => {onShare(item)}} style={{marginBottom: 30, marginLeft: 25}}>
                  <Icon name="share" size={18} style={{paddingTop:40}}></Icon>
                  </TouchableOpacity>
              </View>

              </View>
        
        
              <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:0}}>
              {/* <Button type="outline" title="Book an Appointment" buttonStyle={{borderColor: '#FF9800', borderRadius: 10}} titleStyle={{color: '#000'}}></Button>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('adviseeDetails', {item: item})}} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
              <Text style={{alignSelf: 'center', padding: 5}}>Book an Appointment</Text> 
            </TouchableOpacity>
          </View>
                  */}