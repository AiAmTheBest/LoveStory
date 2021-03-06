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

const ItemStory = (props: StoryProps) => {
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
            </StyledImage>
            <View style={{ flex: 1, marginHorizontal: 10, marginBottom: 5 }}>
                <View style={styles.containerLike}>
                    <StyledIcon customStyle={styles.iconComment} source={Images.icons.heart} size={scale(15)} />
                    <StyledText customStyle={styles.txtLike} i18nText={like} />
                    <StyledIcon
                        customStyle={[styles.iconComment, { marginLeft: 7 }]}
                        source={Images.icons.comment}
                        size={scale(15)}
                    />
                    <StyledText customStyle={styles.txtLike} i18nText={comment} />
                </View>
                <StyledText numberOfLines={2} customStyle={styles.title} i18nText={title} />
                <StyledText customStyle={styles.text} i18nText={title} />
            </View>
        </StyledTouchable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 25,
        marginVertical: 5,
        flex: 1,
        borderWidth: 0.2,

        borderRadius: 15,
    },
    image: {
        width: scale(90),
        height: scale(140),
        borderRadius: 15,
        borderWidth: 0.1,
        margin: 2,
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
        paddingVertical: 5,
        flexDirection: 'row',
    },
    txtLike: {
        paddingLeft: 3,
        fontSize: 16,
        color: 'orange',
    },
    iconComment: {
        tintColor: 'red',
    },
    title: {
        fontSize: 12,
        paddingVertical: 5,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        paddingVertical: 5,
    },
});

export default ItemStory;
