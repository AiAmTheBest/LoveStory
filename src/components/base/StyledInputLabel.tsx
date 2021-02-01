import Images from 'assets/images';
import { Themes } from 'assets/themes';
import React, { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { StyledIcon, StyledImage } from '.';

interface StyledInputProps extends TextInputProps {
    errorMessage?: string;
    isPassword?: boolean;
    label?: string;
    icon?: any;
}

const StyledInputLabel = (props: StyledInputProps, ref: any) => {
    const [isFocused, setIsFocused] = useState(false);
    const input = React.useRef<TextInput>(null);
    const { isPassword = false, label = '', icon, errorMessage = '' } = props;
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <FloatingLabelInput
                containerStyles={
                    isFocused ? (errorMessage?.length !== 0 ? styles.bodyError : styles.bodyFocus) : styles.body
                }
                ref={ref || input}
                label={label}
                leftComponent={
                    icon ? (
                        <StyledIcon customStyle={styles.imageShow} resizeMode="contain" size={24} source={icon} />
                    ) : (
                        <StyledImage source={icon} customStyle={styles.noIcon} />
                    )
                }
                labelStyles={styles.labelStyles}
                inputStyles={styles.textInput}
                isPassword={isPassword}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                isFocused={isFocused}
                customShowPasswordComponent={
                    <StyledIcon
                        resizeMode="contain"
                        size={24}
                        customStyle={styles.imageShow}
                        source={Images.icons.auThen.showPass}
                    />
                }
                maxLength={256}
                customHidePasswordComponent={
                    <StyledIcon
                        resizeMode="contain"
                        size={24}
                        customStyle={styles.imageShow}
                        source={Images.icons.auThen.noShowPass}
                    />
                }
                {...props}
            />
            {errorMessage?.length !== 0 && isFocused && <Text style={styles.txtError}>Error: {t(errorMessage)}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    body: {
        borderWidth: 2,
        paddingHorizontal: 10,
        borderColor: Themes.COLORS.placeHolderGray,
        borderRadius: 8,
        height: 52,
    },
    bodyFocus: {
        borderWidth: 2,
        paddingHorizontal: 10,
        borderColor: Themes.COLORS.borderFocus,
        borderRadius: 8,
        height: 52,
    },
    bodyError: {
        borderWidth: 2,
        paddingHorizontal: 10,
        borderColor: Themes.COLORS.borderInputError,
        borderRadius: 8,
        height: 52,
    },
    noIcon: {
        width: 0,
        height: 28,
    },
    textInput: {
        paddingLeft: 10,
    },
    labelStyles: {
        paddingLeft: 5,
    },
    imageShow: {
        tintColor: Themes.COLORS.placeHolderGray,
    },
    txtError: {
        paddingTop: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: Themes.COLORS.textError,
    },
});

export default forwardRef(StyledInputLabel);
