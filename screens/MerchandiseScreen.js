import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MerchandiseScreen = () => {
    const merchItems = [
        { name: 'Tour T-Shirt (Black)', sold: 45, remaining: 23, price: 25 },
        { name: 'Tour T-Shirt (White)', sold: 32, remaining: 18, price: 25 },
        { name: 'Vinyl LP', sold: 12, remaining: 8, price: 35 },
        { name: 'Poster', sold: 28, remaining: 22, price: 15 }
    ];

    const totalSales = merchItems.reduce((sum, item) => sum + (item.sold * item.price), 0);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.summaryCard}>
                <Text style={styles.summaryTitle}>👕 Total Merch Sales</Text>
                <Text style={styles.summaryAmount}>${totalSales.toLocaleString()}</Text>
                <Text style={styles.summarySubtext}>This tour</Text>
            </View>

            <Text style={styles.sectionTitle}>📦 Inventory</Text>

            {merchItems.map((item, index) => (
                <View key={index} style={styles.merchItem}>
                    <View style={styles.merchInfo}>
                        <Text style={styles.merchName}>{item.name}</Text>
                        <Text style={styles.merchDetails}>
                            Sold: {item.sold} | Remaining: {item.remaining} | ${item.price}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const merchStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    summaryCard: {
        backgroundColor: '#fff',
        margin: 16,
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    summaryTitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    summaryAmount: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 4,
        color: '#007AFF',
    },
    summarySubtext: {
        fontSize: 14,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    merchItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    merchInfo: {
        flex: 1,
    },
    merchName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    merchDetails: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    updateButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
    },
    updateButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});

Object.assign(MerchandiseScreen, { styles: merchStyles });

export default MerchandiseScreen;