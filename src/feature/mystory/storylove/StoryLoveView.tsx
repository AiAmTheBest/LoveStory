import StyledText from 'components/base/StyledText';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const StoryLove = () => {
    return (
        <View style={{ flex: 1 }}>
            <StyledText i18nText={'StoryLove'} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default StoryLove;
