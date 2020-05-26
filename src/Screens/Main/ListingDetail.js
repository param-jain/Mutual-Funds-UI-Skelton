import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import PureChart from 'react-native-pure-chart';

class ListingDetail extends React.Component {
    render() {
        const item = this.props.route.params.item;
        return(
            <ScrollView style={{flex: 1}}>
                <Header
                leftComponent={<Icon name='arrow-back' onPress={() => this.props.navigation.navigate('Main')} color='#fff' />}
                centerComponent={{ text: 'Fund Details', style: { color: '#fff', fontSize: 24 } }}
                />
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
                <Card title="Trendz">
                    <PureChart data={item.graphData} type='line' />
                </Card>
                <Card 
                    title="Scheme Managed By"
                    containerStyle={{justifyContent: 'center', alignItems: 'center'}}
                >
                    <Text style={{fontSize: 26}}>{item.schemeManager}</Text>
                </Card>
                <Card title="Fund Information">
                    <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{alignSelf: 'center', fontSize: 20, textAlign: 'center'}}>{item.title}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>Fund Type</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.fundType}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>Plan</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.plan}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>Scheme Size</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.schemeSize}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>Plan</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.plan}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>Cash Holding</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.cashHolding}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>As on Date</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.asOn}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>Exit Load</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.exitLoad}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#666'}}>Scheme Benchmark</Text>
                            <Text style={{color: '#333', marginTop: 3}}>{item.schemeBenchmark}</Text>
                        </View>
                    </View>
                </Card>
                <View style={{marginTop: 50}} />
            </ScrollView>
        )
    }
}

export default ListingDetail;