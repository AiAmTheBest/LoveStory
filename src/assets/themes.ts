const common = {
    white: '#fff',
    transparent: 'transparent',
    black: '#000',
    blue: 'blue',
    focus: 'green',
    borderFocus: '#619CED',
    placeHolderGray: 'rgba(216, 216, 216, 0.6)',
    borderInputError: '#ff0000',
};

const Light = {
    COLORS: {
        ...common,
        primary: '#4287f5',
        secondary: '#E9ECEF',
        textPrimary: '#000000',
        textSecondary: '#607d8b',
        textError: 'red',
        ScreamGreen: '#66ff99',
    },
    FONTS: {
        defaultFont: 'Montserrat-Regular',
        boldFont: 'Montserrat-SemiBold',
        thinFont: 'Montserrat-Light',
    },
};

const Dark = {
    colors: {
        ...common,
        primary: '#607d8b',
        secondary: '#607d8b',
        textPrimary: '#607d8b',
        textSecondary: '#607d8b',
    },
    fonts: {
        defaultFont: 'Montserrat-Regular',
        boldFont: 'Montserrat-SemiBold',
        thinFont: 'Montserrat-Light',
    },
};

export const Themes = Light;

export const ThemesDark = Dark;
