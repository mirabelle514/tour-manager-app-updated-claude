import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FinancesScreen = () => {
    const recentTransactions = [
        { date: '2025-05-26', description: 'Hotel - San Francisco', amount: -450, type: 'expense' },
        { date: '2025-05-26', description: 'Fillmore Settlement', amount: 2850, type: 'income' },
        { date: '2025-05-25', description: 'Gas - Oakland', amount: -65, type: 'expense' },
        { date: '2025-05-25', description: 'Catering', amount: -180, type: 'expense' }
    ];

    const totalProfit = recentTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.summaryCard}>
                <Text style={styles.summaryTitle}>💰 Tour Profit/Loss</Text>
                <Text style={[styles.summaryAmount, { color: totalProfit >= 0 ? '#34C759' : '#FF3B30' }]}>
                    ${Math.abs(totalProfit).toLocaleString()}
                </Text>
                <Text style={styles.summarySubtext}>
                    {totalProfit >= 0 ? '📈 Profit' : '📉 Loss'} (Last 7 days)
                </Text>
            </View>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recent Transactions</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllText}>See All →</Text>
                </TouchableOpacity>
            </View>

            {recentTransactions.map((transaction, index) => (
                <View key={index} style={styles.transactionItem}>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.transactionDescription}>{transaction.description}</Text>
                        <Text style={styles.transactionDate}>{transaction.date}</Text>
                    </View>
                    <Text style={[
                        styles.transactionAmount,
                        { color: transaction.type === 'income' ? '#34C759' : '#FF3B30' }
                    ]}>
                        {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount)}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};

const financesStyles = StyleSheet.create({
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
    },
    summarySubtext: {
        fontSize: 14,
        color: '#666',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    seeAllText: {
        fontSize: 14,
        color: '#007AFF',
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    transactionInfo: {
        flex: 1,
    },
    transactionDescription: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    transactionDate: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: '600',
    },
});

Object.assign(FinancesScreen, { styles: financesStyles });

export default FinancesScreen;