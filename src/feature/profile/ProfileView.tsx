import { StyledButton } from 'components/base';
import StyledText from 'components/base/StyledText';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AuthenticateService from 'utilities/authenticate/AuthenticateService';

const ProfileView = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StyledText originValue={'Setting'} />
            <StyledButton onPress={AuthenticateService.logOut} title={'Log out'} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProfileView;
