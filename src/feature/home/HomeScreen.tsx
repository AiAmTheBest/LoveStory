import Metrics from 'assets/metrics';
import { Themes } from 'assets/themes';
import { StyledList } from 'components/base';
import StyledText from 'components/base/StyledText';
import { ListStory } from 'components/common/StaticData';
import StyledHeader from 'components/common/StyledHeader';
import ItemStory from 'feature/components/ItemStory';
import ItemStoryNew from 'feature/components/ItemStoryNew';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, ScrollView } from 'react-native';

const HomeScreen = () => {
    const renderItemStory = ({ item, index }: any) => {
        return <ItemStoryNew onPress={() => alert('sdsd')} item={item} index={index} />;
    };

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    paddingTop: Metrics.safeTopPadding,
                    paddingLeft: 15,
                    borderWidth: 1,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    shadowOffset: { width: 0, height: 13 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 3,
                }}
            >
                <Text style={{ paddingVertical: 5 }}>Name: {'Vu Dinh Luan'}</Text>
                <Text style={{ paddingVertical: 5 }}>Point: {9999} p</Text>
            </View>
            <ScrollView
                style={{ marginTop: 10 }}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <StyledText customStyle={styles.txtStory} i18nText={'New Story'} />
                <StyledList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={renderItemStory}
                    data={ListStory}
                />
                <StyledText customStyle={styles.txtStory} i18nText={'Story'} />
                {ListStory.map((item, index) => {
                    return <ItemStory key={index} onPress={() => alert('sdsd')} item={item} index={index} />;
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    txtStory: {
        fontSize: 18,
        color: 'orange',
        left: 30,
        marginRight: 'auto',
        paddingVertical: 10,
    },
    dotStyle: {
        width: 24,
        height: 6,
        borderRadius: 3,
        backgroundColor: Themes.COLORS.primary,
    },
    inactiveDotStyle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Themes.COLORS.ScreamGreen,
    },
});

export default HomeScreen;
