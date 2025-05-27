import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.placeholderContainer}>
                <Text style={styles.placeholderSymbol}>⚙️</Text>
                <Text style={styles.placeholderTitle}>Settings</Text>
                <Text style={styles.placeholderText}>
                    User management, permissions, and app configuration coming soon.
                </Text>
            </View>
        </ScrollView>
    );
};

const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        minHeight: 400,
    },
    placeholderSymbol: {
        fontSize: 64,
    },
    placeholderTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginTop: 16,
        textAlign: 'center',
    },
    placeholderText: {
        fontSize: 16,
        color: '#666',
        marginTop: 12,
        textAlign: 'center',
        lineHeight: 22,
    },
});

Object.assign(SettingsScreen, { styles: settingsStyles });

export default SettingsScreen;