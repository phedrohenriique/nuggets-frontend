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
                background: "#6A609790" // just add two last values to change opacity
            }
        }
    },
    defaultProps: {
        variant: "basicButton"
    }
}