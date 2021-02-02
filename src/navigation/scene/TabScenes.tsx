import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Images from 'assets/images';
// Screen
import HomeScreen from 'feature/home/HomeScreen';
import MyStoryView from 'feature/mystory/MyStoryView';
import ProfileView from 'feature/profile/ProfileView';
import SearchView from 'feature/search/SearchView';
import StyledTabBar from 'navigation/components/StyledTabBar';
import navigationConfigs from 'navigation/config/options';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { isIos } from 'utilities/helper';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const HomeStack = () => (
    <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs} keyboardHandlingEnabled={isIos}>
        <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME} component={HomeScreen} />
    </MainStack.Navigator>
);

const SearchStack = () => (
    <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs} keyboardHandlingEnabled={isIos}>
        <MainStack.Screen name={TAB_NAVIGATION_ROOT.SEARCH_ROUTE.SEARCH} component={SearchView} />
    </MainStack.Navigator>
);

const MyStoryStack = () => (
    <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs} keyboardHandlingEnabled={isIos}>
        <MainStack.Screen name={TAB_NAVIGATION_ROOT.MY_STORY.MY_STORY} component={MyStoryView} />
    </MainStack.Navigator>
);

const ProfileStack = () => (
    <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs} keyboardHandlingEnabled={isIos}>
        <MainStack.Screen name={TAB_NAVIGATION_ROOT.PROFILE_ROUTE.PROFILE} component={ProfileView} />
    </MainStack.Navigator>
);

const MainTabContainer = () => {
    const { t } = useTranslation();
    const ArrayTabs = [
        {
            name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
            title: t('tab.home'),
            component: HomeStack,
            icon: Images.icons.tab.home,
        },
        {
            name: TAB_NAVIGATION_ROOT.SEARCH_ROUTE.ROOT,
            title: t('tab.search'),
            component: SearchStack,
            icon: Images.icons.tab.home,
        },
        {
            name: TAB_NAVIGATION_ROOT.MY_STORY.ROOT,
            title: t('tab.myStory'),
            component: MyStoryStack,
            icon: Images.icons.tab.home,
        },
        {
            name: TAB_NAVIGATION_ROOT.PROFILE_ROUTE.ROOT,
            title: t('tab.profile'),
            component: ProfileStack,
            icon: Images.icons.tab.setting,
        },
    ];
    return (
        <MainTab.Navigator tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}>
            {ArrayTabs.map((item, index) => (
                <MainTab.Screen key={`${index}`} options={{ ...item }} {...item} />
            ))}
        </MainTab.Navigator>
    );
};

export default MainTabContainer;
