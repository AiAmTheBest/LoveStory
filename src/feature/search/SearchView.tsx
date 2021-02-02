import StyledText from 'components/base/StyledText';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const SearchView = () => {
    return (
        <View style={{ flex: 1 }}>
            <StyledText i18nText={'SearchView'} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchView;
