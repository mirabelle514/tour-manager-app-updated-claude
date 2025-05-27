import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScheduleScreen = () => {
    const upcomingShows = [
        {
            date: '2025-05-28',
            venue: 'Greek Theatre',
            city: 'Berkeley, CA',
            loadIn: '15:00',
            showTime: '20:00'
        },
        {
            date: '2025-05-29',
            venue: 'Paramount Theatre',
            city: 'Oakland, CA',
            loadIn: '16:00',
            showTime: '19:30'
        },
        {
            date: '2025-05-31',
            venue: 'Warfield',
            city: 'San Francisco, CA',
            loadIn: '14:00',
            showTime: '21:00'
        }
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Upcoming Shows</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Add</Text>
                </TouchableOpacity>
            </View>

            {upcomingShows.map((show, index) => (
                <TouchableOpacity key={index} style={styles.showCard}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>
                            {new Date(show.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                            })}
                        </Text>
                    </View>
                    <View style={styles.showInfo}>
                        <Text style={styles.venueName}>{show.venue}</Text>
                        <Text style={styles.cityName}>{show.city}</Text>
                        <View style={styles.timeInfo}>
                            <Text style={styles.timeText}>Load-in: {show.loadIn}</Text>
                            <Text style={styles.timeText}>Show: {show.showTime}</Text>
                        </View>
                    </View>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const scheduleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    showCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    dateContainer: {
        width: 60,
        alignItems: 'center',
        marginRight: 16,
    },
    dateText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007AFF',
    },
    showInfo: {
        flex: 1,
    },
    venueName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    cityName: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    timeInfo: {
        flexDirection: 'row',
        marginTop: 4,
    },
    timeText: {
        fontSize: 12,
        color: '#666',
        marginRight: 16,
    },
    arrow: {
        fontSize: 20,
        color: '#666',
    },
});

// Copy scheduleStyles to styles for ScheduleScreen
Object.assign(ScheduleScreen, { styles: scheduleStyles });

export default ScheduleScreen;