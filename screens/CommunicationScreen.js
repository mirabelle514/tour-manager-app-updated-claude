import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CommunicationScreen = () => {
    const messages = [
        {
            id: '1',
            sender: 'Sarah Johnson',
            role: 'Tour Manager',
            message: 'Load-in moved to 2:30pm tomorrow - please update your schedules',
            time: '10:30 AM',
            unread: true
        },
        {
            id: '2',
            sender: 'Mike Rodriguez',
            role: 'Sound Engineer',
            message: 'Need to discuss monitor setup for tonight',
            time: '9:45 AM',
            unread: true
        },
        {
            id: '3',
            sender: 'Band Group',
            role: 'Group Chat',
            message: 'Great show last night everyone!',
            time: 'Yesterday',
            unread: false
        }
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                {messages.map((message) => (
                    <TouchableOpacity key={message.id} style={styles.messageItem}>
                        <View style={styles.messageHeader}>
                            <View>
                                <Text style={styles.senderName}>{message.sender}</Text>
                                <Text style={styles.senderRole}>{message.role}</Text>
                            </View>
                            <View style={styles.messageTime}>
                                <Text style={styles.timeText}>{message.time}</Text>
                                {message.unread && <View style={styles.unreadDot} />}
                            </View>
                        </View>
                        <Text style={styles.messageText}>{message.message}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.composeButton}>
                <Text style={styles.composeButtonText}>✏️ New Message</Text>
            </TouchableOpacity>
        </View>
    );
};

const communicationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    messageItem: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 12,
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    senderName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    senderRole: {
        fontSize: 12,
        color: '#666',
    },
    messageTime: {
        alignItems: 'flex-end',
    },
    timeText: {
        fontSize: 12,
        color: '#666',
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#007AFF',
        marginTop: 4,
    },
    messageText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },
    composeButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    composeButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});

Object.assign(CommunicationScreen, { styles: communicationStyles });

export default CommunicationScreen;