import { extendTheme } from "@chakra-ui/react";
import {
    Button,
    Text,
    Input
} from "./variants";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

export const theme = extendTheme({
    //styles,
    //borders,
    // other foundational styles go there
    components: {
        Button,
        Text,
        Steps,
        Input
        // components with their variant go there
    },

})