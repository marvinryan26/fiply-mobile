import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { AuthContext } from '../AuthProvider'
import fiplyServer from '../api/fiplyServer'
import useProfile from '../hooks/useProfile'

const TestScreen = () => {

    const { logout, user } = useContext(AuthContext)
    const [getMyInfos ,profile, skills, educationalBG, experiences] = useProfile()

    useEffect(() => {
        fiplyServer.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
        getMyInfos()
    }, [])
    

    return (
        <ScrollView style={styles.container}>
            <Text>This is Test Screen hahaah</Text>

            <View style={styles.infoContainer}>
                <Text>PROFILE</Text>
                <Text>Fullname: {profile.fullname}</Text>
                <Text>Address: {profile.address}</Text>
                <Text>Contact No: {profile.contact_no}</Text>
                <Text>Is Looking for Job: {profile.is_looking_for_job}</Text>
            </View>


            <View style={styles.infoContainer}>
                <Text>SKILLS</Text>
                    <FlatList
                        horizontal 
                        data={skills}
                        keyExtractor={data => data.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.info}>
                                    <Text>{item.skill}</Text>
                                </View>
                            )
                        }}
                    />
            </View>

            <View style={styles.infoContainer}>
                <Text>EDUCATIONAL BACKGROUND</Text>
                    <FlatList 
                        horizontal
                        data={educationalBG}
                        keyExtractor={data => data.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.info}>
                                    <Text>Degree: {item.degree}</Text>
                                    <Text>Major: {item.major}</Text>
                                    <Text>University: {item.university}</Text>
                                    <Text>Starting Date: {item.starting_date}</Text>
                                    <Text>Completion Date: {item.completion_date}</Text>
                                </View>
                            )
                        }}
                    />

            </View>

            <View style={styles.infoContainer}>
                <Text>EXPERIENCES</Text>
                    <FlatList
                        horizontal 
                        data={experiences}
                        keyExtractor={data => data.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.info}>
                                    <Text>Job Title: {item.job_title}</Text>
                                    <Text>Industry: {item.industry}</Text>
                                    <Text>Description: {item.description}</Text>
                                    <Text>Employment Type: {item.employment_type}</Text>
                                    <Text>Start Date: {item.start_date}</Text>
                                    <Text>End Date: {item.end_date}</Text>
                                    <Text>Company: {item.company}</Text>
                                    <Text>Location: {item.location}</Text>
                                    <Text>Is Current Job: {item.is_current_job}</Text>
                                </View>
                            )
                        }}
                    />
            </View>

            <Button 
                title="Log Out"
                onPress={() => {logout()}}    
            />
        </ScrollView>
    )
}

export default TestScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        borderColor: 'red',
        borderWidth: 1
    },
    infoContainer: {
        borderWidth: 2,
        margin: 10,
        padding: 10
    },
    info:{
        borderWidth: 2,
        margin: 10,
        borderColor: '#cecece',
        borderRadius: 25,
        padding: 20
    }
})
