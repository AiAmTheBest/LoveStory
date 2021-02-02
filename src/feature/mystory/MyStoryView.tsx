import StyledText from 'components/base/StyledText';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const MyStoryView = () => {
    return (
        <View style={{ flex: 1 }}>
            <StyledText i18nText={'MyStoryView'} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MyStoryView;
