import { StyledList } from 'components/base';
import StyledText from 'components/base/StyledText';
import { ListStory } from 'components/common/StaticData';
import StyledHeader from 'components/common/StyledHeader';
import ItemStory from 'feature/components/ItemStory';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const HomeScreen = () => {
    return (
        <>
            <StyledHeader title="homeScreen" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StyledList
                    horizontal={false}
                    numColumns={3}
                    renderItem={({ item }: any) => <ItemStory item={item} />}
                    data={ListStory}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
