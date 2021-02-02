import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { StyledIcon, StyledImage, StyledTouchable } from 'components/base';
import StyledText from 'components/base/StyledText';
import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';

interface StoryProps {
    item?: any;
    index?: number;
    onPress?(): void;
}

const ItemStoryNew = (props: StoryProps) => {
    const { image = '', status = false, like = 0, comment = 0, title = '' } = props?.item;
    return (
        <StyledTouchable onPress={props?.onPress} customStyle={styles.container}>
            <StyledImage
                resizeMode="stretch"
                customStyle={styles.image}
                source={{
                    uri: image,
                }}
            >
                {status && (
                    <View style={styles.containerTextFinish}>
                        <StyledText customStyle={styles.txtFinish} i18nText={'hoàn thành'} />
                    </View>
                )}
                <View style={styles.containerLike}>
                    <StyledIcon customStyle={styles.iconComment} source={Images.icons.heart} size={scale(8)} />
                    <StyledText customStyle={styles.txtLike} i18nText={like} />
                    <StyledIcon customStyle={styles.iconComment} source={Images.icons.comment} size={scale(8)} />
                    <StyledText customStyle={styles.txtLike} i18nText={comment} />
                </View>
            </StyledImage>
            <StyledText numberOfLines={2} customStyle={styles.title} i18nText={title} />
        </StyledTouchable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: scale(90),
        margin: 10,
    },
    image: {
        width: '100%',
        height: scale(140),
        borderRadius: 15,
        borderWidth: 0.1,
    },
    containerTextFinish: {
        backgroundColor: Themes.COLORS.ScreamGreen,
        borderRadius: 15,
        width: '80%',
        height: 20,
        marginTop: 7,
        marginLeft: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtFinish: {
        color: Themes.COLORS.white,
    },
    containerLike: {
        paddingBottom: 5,
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtLike: {
        paddingLeft: 3,
        fontSize: 9,
        color: 'orange',
    },
    iconComment: {
        marginLeft: 7,
        tintColor: 'red',
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        paddingVertical: 5,
    },
});

export default ItemStoryNew;
