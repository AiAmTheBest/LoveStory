import React from 'react';
import { Platform, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Metrics from 'assets/metrics';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyledText } from 'components/base';
import { Themes } from 'assets/themes';
import Size from 'assets/sizes';
import { isIos } from 'utilities/helper';

const StyledTabBar: React.FunctionComponent<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        accessibilityRole="button"
                        // accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        style={[
                            styles.tabButton,
                            {
                                backgroundColor: isFocused ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.75)',
                            },
                        ]}
                    >
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-ignore */}
                        <Image source={options?.icon} style={[styles.tabIcon]} tintColor={Themes.COLORS.white} />
                        <StyledText customStyle={styles.tabLabel} i18nText={options?.title || ''} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        paddingBottom: isIos ? Metrics.safeBottomPadding : 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Themes.COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,
    },
    tabButton: {
        flex: 1,
        marginTop: 5,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 55,
    },
    tabIcon: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        tintColor: Themes.COLORS.white,
        marginVertical: 2,
    },
    tabLabel: {
        color: Themes.COLORS.white,
        paddingLeft: Size.PADDING.defaultTextPadding,
        textAlign: 'center',
    },
});

export default StyledTabBar;
