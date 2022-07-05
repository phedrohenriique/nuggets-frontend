import { extendTheme } from "@chakra-ui/react";
import { 
    Button,
    Text
 } from "./variants";

export const theme = extendTheme({
    //styles,
    //borders,
    // other foundational styles go there
    components: {
        Button,
        Text
        // components with their variant go there
    },

})