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
            _hover:{
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
        "baiscText":{
            fontFamily: fonts.nunito,
            fontWeight: "bold"
        }
    },
    defaultProps: {
        
    }
}