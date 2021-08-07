import React, { useEffect } from 'react'
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Token_Balances = ({route}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://stg-api.unmarshal.io/v1/ethereum/address/${route.params.data}/assets?auth_key=VGVtcEtleQ%3D%3D`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("Response data", data);
                
    //         })
            
    // }, [] );

    const getCoins = async () => {
        try {
            const response = await fetch(`https://stg-api.unmarshal.io/v1/ethereum/address/${route.params.data}/assets?auth_key=VGVtcEtleQ%3D%3D`);
            const res = await response.json();
            setData(res);
            console.log("response ", res)
        } catch (error) {
            console.log("there was an problem", error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCoins();
    }, [])

    const bsc = async () => {
        try {
            const response = await fetch(`https://stg-api.unmarshal.io/v1/bsc/address/${route.params.data}/assets?auth_key=VGVtcEtleQ%3D%3D`);
            const res = await response.json();
            setData(res);
            console.log("response ", res)
        } catch (error) {
            console.log("there was an problem", error)
        } finally {
            setLoading(false);
        }
    }

    const polygon = async () => {
        try {
            const response = await fetch(`https://stg-api.unmarshal.io/v1/matic/address/${route.params.data}/assets?auth_key=VGVtcEtleQ%3D%3D`);
            const res = await response.json();
            setData(res);
            console.log("response ", res)
        } catch (error) {
            console.log("there was an problem", error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={{backgroundColor: "white", marginBottom: 10}}>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginHorizontal: 50, marginBottom: 10}}>

                <TouchableOpacity onPress={() => getCoins()} style={styles.ethTopButton1}>
                    <Text style={{color: "white", fontWeight: "bold"}}>Ethereum</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => bsc()} style={styles.ethTopButton}>
                    <Text style={{color: "gray", fontWeight: "bold"}}>BSC</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => polygon()} style={styles.ethTopButton}>
                    <Text style={{color: "gray", fontWeight: "bold"}}>Polygon</Text>
                </TouchableOpacity>

            </View>
            {/* <Text>All your Ethereum tokens</Text> */}
            {isLoading ? <ActivityIndicator/> : (
            <FlatList style={{backgroundColor: "#EEEEEE", borderRadius: 10}}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View style={styles.coinContainer}>
                        
                            <View style={{flexDirection: "row", alignItems: 'center'}}>

                                <View>
                                    <Image source={{uri: item.logo_url}} style={{height: 35, width: 35 }} />
                                </View>

                                <View style={{marginLeft: 10}} >
                                    <Text >{item.contract_name}</Text>
                            
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={{color: "gray"}}>{item.contract_ticker_symbol} </Text>
                                        <Text style={{color: "gray"}}>{(item.quote/item.quote_rate).toFixed(4)} </Text>
                                        <Text style={{color: "gray"}}>${item.quote_rate}</Text>
                                    </View>    
                                </View>

                            </View>

                            <View>
                                <Text>${item.quote.toFixed(4)}</Text>
                            </View>
                    
                    </View>
                )}
                
            />
            )}
        </View>
    )
}

export default Token_Balances

const styles = StyleSheet.create({
    coinContainer: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        // paddingVertical: 5, 
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        marginTop: 10,
        paddingBottom: 10,
        // marginBottom: 5
        // elevation: 2
    },

    ethTopButton1: {
        borderWidth: 2,
        backgroundColor: "#28FFBF",
        height: 40,
        width: "30%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        // elevation: 10,

    },

    ethTopButton: {
        borderWidth: 2,
        borderColor: "#28FFBF",
        // backgroundColor: "#28FFBF",
        height: 40,
        width: "30%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"

    }
})

