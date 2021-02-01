import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { StyledButton, StyledInput, StyledInputLabel, StyledText, StyledTouchable } from 'components/base';
import StyledOverlayLoading from 'components/base/StyledOverlayLoading';
import { useLogin } from 'utilities/authenticate/AuthenticateService';
import { logger } from 'utilities/helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { navigate } from 'navigation/NavigationService';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import request from 'api/request';
import axios from 'axios';
import Images from 'assets/images';
import { validateMail } from 'utilities/format';

const LoginScreen: React.FunctionComponent = () => {
    const [user, setUser] = useState({ email: 'vdluan01@gmail.com', password: '123123' });
    const passwordRef = useRef<any>(null);
    const { t } = useTranslation();
    const { loading, requestLogin } = useLogin(user);

    const handleChange = (field: string, text: string) => {
        setUser({ ...user, [field]: text });
    };

    const { email, password } = user;
    const doRegister = () => {
        navigate(AUTHENTICATE_ROUTE.REGISTER);
    };
    const goToForgotPassword = () => {
        navigate(AUTHENTICATE_ROUTE.FORGOTPASS);
    };

    const [errors, setError] = useState({
        emailF: '',
        passwordF: '',
    });
    const { emailF, passwordF } = errors;
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        if (email && !validateMail(email)) {
            setError({ ...errors, emailF: t('email không đúng định dạng'), passwordF: '' });
            setDisable(true);
        } else if (password && password.length < 6) {
            setError({ ...errors, passwordF: t('mật khẩu phải lớn hơn 6 ký tự'), emailF: '' });
            setDisable(true);
        } else {
            setError({ emailF: '', passwordF: '' });
            setDisable(false);
            if (email.length > 0 && password.length > 0) {
                setDisable(false);
            } else {
                setDisable(true);
            }
        }
    }, [email, password]);

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground source={Images.photo.background} style={styles.image}>
                <SafeAreaView style={styles.body}>
                    <StyledInputLabel
                        icon={Images.icons.auThen.email}
                        label="Email"
                        value={email}
                        onChangeText={(value: string) => handleChange('email', value)}
                        errorMessage={emailF}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        returnKeyType={'next'}
                        keyboardType="email-address"
                    />
                    <StyledInputLabel
                        icon={Images.icons.auThen.password}
                        label="Password"
                        value={password}
                        onChangeText={(value: string) => handleChange('password', value)}
                        isPassword={true}
                        errorMessage={passwordF}
                        maxLength={32}
                        ref={passwordRef}
                        secureTextEntry={true}
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
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
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
