type themeType = {
    colors: {
        backgroundColor: string,
        defaultColor: string,
    },

    buttonColors: {
        defaultButtonColor: string,
        secondaryButtonColor: string,
        hoverButtonColor: string,
        hoverSecondaryButtonColor: string,
        activeButton: string,
    },

    fontColors: {
        darkerColor: string,
        darkColor: string,
        lightColor: string,
        lighterColor: string,

        titleColor: string,
    },
}

export const theme: themeType = {

    colors: {
        backgroundColor: '#e0e5e1',
        defaultColor: '#FDFFFD',
    },

    buttonColors: {
        defaultButtonColor: '#FA81B1',
        secondaryButtonColor: '#F7E3EB',
        hoverButtonColor: '#FAABCB',
        hoverSecondaryButtonColor: '#fff1f7',
		activeButton: '#B87B96'

    },

    fontColors: {
        darkerColor: '#1E1E1E',
        darkColor: '#5E5E5F',
        lightColor: '#ACACAC',
        lighterColor: '#E1E1E1',

        titleColor: '#00a789',
    },
}