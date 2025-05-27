import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const LoginScreen = ({ onLogin }) => {
    const userTypes = [
        {
            key: 'admin',
            title: 'Super Admin',
            subtitle: 'Full system access',
            color: '#FF3B30',
            symbol: '🛡️'
        },
        {
            key: 'tourManager',
            title: 'Tour Manager',
            subtitle: 'Schedule & logistics management',
            color: '#007AFF',
            symbol: '💼'
        },
        {
            key: 'bandMember',
            title: 'Band Member',
            subtitle: 'Personal schedules & basic info',
            color: '#34C759',
            symbol: '🎵'
        },
        {
            key: 'crew',
            title: 'General Crew',
            subtitle: 'Basic schedules & communication',
            color: '#FF9500',
            symbol: '🔧'
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.titleSymbol}>🎵</Text>
                    <Text style={styles.title}>Tour Manager - Claude</Text>
                    <Text style={styles.subtitle}>Choose your role to continue</Text>
                </View>

                <View style={styles.buttonContainer}>
                    {userTypes.map((userType) => (
                        <TouchableOpacity
                            key={userType.key}
                            style={[styles.roleButton, { borderColor: userType.color }]}
                            onPress={() => onLogin(userType.key)}
                        >
                            <View style={[styles.symbolContainer, { backgroundColor: userType.color }]}>
                                <Text style={styles.symbol}>{userType.symbol}</Text>
                            </View>
                            <View style={styles.roleInfo}>
                                <Text style={styles.roleTitle}>{userType.title}</Text>
                                <Text style={styles.roleSubtitle}>{userType.subtitle}</Text>
                            </View>
                            <Text style={styles.arrow}>→</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.demoNote}>
                    This is a demo version. In production, use proper authentication.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    titleSymbol: {
        fontSize: 64,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#333',
        marginTop: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
    buttonContainer: {
        marginBottom: 30,
    },
    roleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    symbolContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    symbol: {
        fontSize: 24,
    },
    roleInfo: {
        flex: 1,
    },
    roleTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    roleSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    arrow: {
        fontSize: 20,
        color: '#666',
    },
    demoNote: {
        textAlign: 'center',
        fontSize: 12,
        color: '#999',
        fontStyle: 'italic',
    },
});

export default LoginScreen;
