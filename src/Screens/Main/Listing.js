import React from 'react';
import { withTheme } from 'react-native-paper';
import { 
    StyleSheet, 
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    StatusBar,
    TextInput,
    Keyboard,
    Animated,
} from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import MyIcon from 'react-native-vector-icons/Ionicons';
import CardDetail from '../../Components/CardDetail';

class Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            originalData: [],
            error: '',
            isSearchClicked: false,
            searchText: '',
            currentLoggedInUser: [],
            searchBarFocused: false
        }
        this.arrayHolder = []
    }

    componentDidMount() {
        let data = [{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "XYZ Fund from China",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          },{
            id: "1011",
            title: "Nippon India US Equity Opportunities Fund Direct - Growth",
            invested: true,
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
            graphData: [
                {x: '2018-01-01', y: 5},
                {x: '2018-01-02', y: 12.3},
                {x: '2018-01-03', y: 17.56},
                {x: '2018-01-04', y: 22},
                {x: '2018-01-05', y: 18.994}
            ]
          }]
        this.setState({
            data: data,
            originalData: data
        });
    }

    returnList = () => {
        let user = this.state.currentLoggedInUser;
       return (
            <Animatable.View animation="slideInUp" iterationCount={1}>
                <ScrollView>
                {
                    this.state.data.map((item, i) => {
                        return(
                            <TouchableOpacity key={i.toString()} onPress={() => this.props.navigation.navigate('ListingDetail', { item })}>
                                <CardDetail key={i.toString()} navigation={this.props.navigation} item={item} />
                            </TouchableOpacity>
                        )
                    })  
                }
                <View style={{marginTop: 50}} />
                </ScrollView>
            </Animatable.View>
        );
      }

    renderRightIcons = () => {
        return (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.setState({ isSearchClicked: true })}>
              <Icon name="search" type="font-awesome" color="#fff" size={18} style={{padding:10}}></Icon>
            </TouchableOpacity>
          </View>
        );
      }

  renderHeader = () => {
    return(
        <Header
          backgroundColor="#4147D9"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'EduFund\'s MF' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
          rightComponent={ this.renderRightIcons() }
        />
      );
    }

    renderListAccordingToSearchBar = (text) => {
        this.setState({searchText: text});
        console.log("All Funds Array Holder: " + this.arrayHolder);
        const newData = this.state.originalData.filter(item => {
          const itemData = `${item.title.toUpperCase()} ${item.plan.toUpperCase()}}`;
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          data: newData,
        });
      }

    renderSearchBarHeader = () => {
        return(
        <View style={{ height: 80, backgroundColor: "#A774DB", justifyContent: 'center', paddingHorizontal: 8, paddingTop: 25}}>
            <Animatable.View animation="slideInRight" duration={500} style={{ height: 30, backgroundColor: 'white', flexDirection: 'row', marginTop: 10, alignItems: 'center', borderRadius: 20 }}>
                <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                <TouchableOpacity onPress={this.onBackPress}>
                <MyIcon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24, marginLeft: 20}} />
                </TouchableOpacity>
                </Animatable.View>
                <TextInput
                ref="searchBarInput"
                autoCapitalize = 'none'
                placeholder="Search" 
                style={{ fontSize: 20, marginLeft: 15, flex: 1 }} 
                onChangeText={(text) => this.renderListAccordingToSearchBar(text)}
                value={this.state.searchText}
                />
                <TouchableOpacity onPress={() => this.setState({isSearchClicked: false, data: this.state.originalData})}>
                <MyIcon name="md-close" style={{ fontSize: 24, marginRight: 20}} />
                </TouchableOpacity>
            </Animatable.View>
        </View>
        );
      }
    render() {
        return (
            <View>
                { this.state.isSearchClicked ? this.renderSearchBarHeader() : this.renderHeader() }
                { this.returnList() }
            </View>
        )
    }
}

export default withTheme(Listing);