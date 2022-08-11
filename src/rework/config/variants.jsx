import { colors } from "./colors"
import { fonts } from "./fonts"

export const Button = {
    baseStyle: {

    },
    sizes: {

    },
    variants: {
        // variantName : {
        //     style: "type"
        // }
        "basicButton": {
            color: "white",
            background: "#6A6097",
            _hover: {
                transform: "scale(1.05)"
            },
            _active: {
                background: "#6A609780" // just add two last values to change opacity
            }
        },
        "linkButton": {
            color: "white",
            background: "#270645",
            border: "2px solid white",
            _hover : {
                transform : "scale(1.05)",
                background: "#6A609780"
            },
            _active: {
                background: "#6A609780"
            }

        }
    },
    defaultProps: {
        variant: "basicButton"
    }
}

export const Text = {
    baseStyle: {

    },
    sizes: {

    },
    variants: {
        "basicText": {
            fontFamily: fonts.nunito,
            fontWeight: "bold"
        }
    },
    defaultProps: {
        variant: "basicText"
    }
}

export const Input = {
    baseStyle: {

    },
    sizes: {

    },
    variants: {
        "filled": {
            _hover: {
                background: "gray",
                border: `2px solid ${colors.inputBorder}`
            },
            _focus: {
                background: "gray",
                border: `2px solid ${colors.inputBorder}`
            },
        },
        "basicInput": {
            all: "unset"
        },
    },
    defaultProps: {
        variant: "basicInput"
    }
}