import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { StyledButton, StyledInput, StyledText, StyledTouchable } from 'components/base';
import StyledOverlayLoading from 'components/base/StyledOverlayLoading';
import { useLogin } from 'utilities/authenticate/AuthenticateService';
import { logger } from 'utilities/helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { navigate } from 'navigation/NavigationService';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import request from 'api/request';
import axios from 'axios';

const LoginScreen: React.FunctionComponent = () => {
    const [user, setUser] = useState({ email: 'hoan.nguyen@amela.vn', password: '123123' });
    const passwordRef = useRef<any>(null);
    const { t } = useTranslation();
    const { loading, requestLogin } = useLogin(user);
    const onChangeEmail = (text: string) => {
        setUser({ ...user, email: text });
    };
    const onChangePassword = (text: string) => {
        setUser({ ...user, password: text });
    };
    const doRegister = () => {
        navigate(AUTHENTICATE_ROUTE.REGISTER);
    };
    const goToForgotPassword = () => {
        navigate(AUTHENTICATE_ROUTE.FORGOTPASS);
    };

    // useEffect(() => {
    //     test();
    // }, []);

    // const test = async () => {
    //     const data = await request.get('api/products');
    //     const test = await axios.get('http://192.168.8.163:5000/api/products');
    //     console.log('data', data);
    //     console.log('test: ', test);
    // };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={{
                    uri: 'https://img1.kienthucvui.vn/uploads/2019/10/27/hinh-nen-dien-thoai-sieu-dep_111222232.jpg',
                }}
                style={styles.image}
            >
                <SafeAreaView style={styles.body}>
                    <StyledInput
                        value={user.email}
                        onChangeText={onChangeEmail}
                        placeholder={t('login.placeholderEmail')}
                        keyboardType="email-address"
                        returnKeyType={'next'}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <StyledInput
                        value={user.password}
                        onChangeText={onChangePassword}
                        placeholder={t('login.placeholderPassword')}
                        ref={passwordRef}
                        secureTextEntry={true}
                        maxLength={32}
                    />
                    <StyledButton onPress={requestLogin} title={'Log in'} customStyle={styles.loginButton} />
                    <StyledTouchable onPress={goToForgotPassword} customStyle={styles.registerButton}>
                        <StyledText originValue={'Quên mật khẩu'} />
                    </StyledTouchable>
                    <StyledTouchable onPress={doRegister} customStyle={styles.registerButton}>
                        <StyledText originValue={'Đăng ký'} />
                    </StyledTouchable>
                </SafeAreaView>
            </ImageBackground>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    loginButton: {
        marginTop: 20,
    },
    registerButton: {
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
export default LoginScreen;
