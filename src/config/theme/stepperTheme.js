import createTheme from "@material-ui/core/styles/createTheme"

export const stepperTheme = createTheme({
   components: {
    MuiStep: {
        style: {
            backgroundColor: "red"
        }
    }
   }
})