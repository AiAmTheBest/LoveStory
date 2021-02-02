import StyledText from 'components/base/StyledText';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const HistoryView = () => {
    return (
        <View style={{ flex: 1 }}>
            <StyledText i18nText={'HistoryView'} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HistoryView;
