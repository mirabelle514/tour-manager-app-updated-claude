// screens/DaySheet.js - Simple version without icons
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// Sample data - simplified
const sampleDayData = {
    venue: {
        name: 'The Fillmore',
        address: '1805 Geary Blvd, San Francisco, CA 94115',
        capacity: 1150,
        ticketsSold: 987,
        contactPerson: 'Sarah Johnson',
        phone: '+1 (415) 346-3000'
    },
    schedule: {
        loadIn: '14:00',
        soundcheck: '17:30',
        doors: '19:00',
        showTime: '21:30'
    },
    weather: {
        temp: '68°F',
        condition: 'Partly Cloudy'
    },
    notes: 'Guest list heavy tonight - Sarah mentioned local press will be there.'
};

const DaySheet = () => {
    const [expandedSections, setExpandedSections] = useState({
        venue: true,
        schedule: true,
        notes: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    };

    const SectionHeader = ({ title, isExpanded, onPress, rightContent }) => (
        <TouchableOpacity style={styles.sectionHeader} onPress={onPress}>
            <View style={styles.sectionHeaderLeft}>
                <Text style={styles.sectionTitle}>{title}</Text>
            </View>
            <View style={styles.sectionHeaderRight}>
                {rightContent}
                <Text style={styles.chevron}>{isExpanded ? '▲' : '▼'}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header with Date and Weather */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.dateText}>Today - {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                    })}</Text>
                    <Text style={styles.countdownText}>Load-in at {formatTime(sampleDayData.schedule.loadIn)}</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <Text style={styles.weatherText}>{sampleDayData.weather.temp}</Text>
                    <Text style={styles.weatherCondition}>{sampleDayData.weather.condition}</Text>
                </View>
            </View>

            {/* Venue Information */}
            <View style={styles.card}>
                <SectionHeader
                    title="Venue Information"
                    isExpanded={expandedSections.venue}
                    onPress={() => toggleSection('venue')}
                    rightContent={
                        <Text style={styles.capacityBadge}>
                            {sampleDayData.venue.ticketsSold}/{sampleDayData.venue.capacity}
                        </Text>
                    }
                />

                {expandedSections.venue && (
                    <View style={styles.sectionContent}>
                        <Text style={styles.venueName}>{sampleDayData.venue.name}</Text>
                        <Text style={styles.venueAddress}>{sampleDayData.venue.address}</Text>

                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Text style={styles.label}>Contact</Text>
                                <Text style={styles.value}>{sampleDayData.venue.contactPerson}</Text>
                                <Text style={styles.phoneNumber}>{sampleDayData.venue.phone}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>

            {/* Show Schedule */}
            <View style={styles.card}>
                <SectionHeader
                    title="Show Schedule"
                    isExpanded={expandedSections.schedule}
                    onPress={() => toggleSection('schedule')}
                />

                {expandedSections.schedule && (
                    <View style={styles.sectionContent}>
                        <View style={styles.scheduleGrid}>
                            <View style={styles.scheduleItem}>
                                <Text style={styles.scheduleTime}>{formatTime(sampleDayData.schedule.loadIn)}</Text>
                                <Text style={styles.scheduleLabel}>Load In</Text>
                            </View>
                            <View style={styles.scheduleItem}>
                                <Text style={styles.scheduleTime}>{formatTime(sampleDayData.schedule.soundcheck)}</Text>
                                <Text style={styles.scheduleLabel}>Soundcheck</Text>
                            </View>
                            <View style={styles.scheduleItem}>
                                <Text style={styles.scheduleTime}>{formatTime(sampleDayData.schedule.doors)}</Text>
                                <Text style={styles.scheduleLabel}>Doors</Text>
                            </View>
                            <View style={styles.scheduleItem}>
                                <Text style={styles.scheduleTime}>{formatTime(sampleDayData.schedule.showTime)}</Text>
                                <Text style={styles.scheduleLabel}>Show Time</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>

            {/* Tour Manager Notes */}
            <View style={styles.card}>
                <SectionHeader
                    title="Tour Manager Notes"
                    isExpanded={expandedSections.notes}
                    onPress={() => toggleSection('notes')}
                />

                {expandedSections.notes && (
                    <View style={styles.sectionContent}>
                        <Text style={styles.notesText}>{sampleDayData.notes}</Text>
                    </View>
                )}
            </View>

            {/* Bottom spacing */}
            <View style={styles.bottomSpacing} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    dateText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    countdownText: {
        fontSize: 14,
        color: '#007AFF',
        marginTop: 4,
    },
    weatherContainer: {
        alignItems: 'flex-end',
    },
    weatherText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    weatherCondition: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginTop: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    sectionHeaderLeft: {
        flex: 1,
    },
    sectionHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    chevron: {
        fontSize: 12,
        color: '#666',
        marginLeft: 8,
    },
    capacityBadge: {
        backgroundColor: '#007AFF',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        fontSize: 12,
        fontWeight: '600',
        marginRight: 8,
    },
    sectionContent: {
        padding: 16,
    },
    venueName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 4,
    },
    venueAddress: {
        fontSize: 14,
        color: '#666',
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoItem: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#666',
        textTransform: 'uppercase',
        fontWeight: '600',
        marginBottom: 4,
    },
    value: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    phoneNumber: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: '500',
        marginTop: 2,
    },
    scheduleGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    scheduleItem: {
        width: '48%',
        backgroundColor: '#f8f9fa',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        alignItems: 'center',
    },
    scheduleTime: {
        fontSize: 18,
        fontWeight: '700',
        color: '#007AFF',
    },
    scheduleLabel: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    notesText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        fontStyle: 'italic',
    },
    bottomSpacing: {
        height: 20,
    },
});

export default DaySheet;