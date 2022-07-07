import { colors } from "./colors"
import { fonts } from "./fonts"
import { StyleFunctionProps } from "@chakra-ui/theme-tools"

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
                background: "#6A609795"
            },
            _active: {
                background: "#6A609750" // just add two last values to change opacity
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