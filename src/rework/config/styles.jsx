import { colors } from "./colors"
import { fonts } from "./fonts"

const pages = {
    background: colors.pagesBackground,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const textTitles = {
    fontFamily: fonts.montserrat,
    weight: "bold"
}

const textInputs = {
    fontFamily: fonts.nunito,
    weight: "bold"
}

const buttonColor = {

}

export const styles = {
    pages,
    textTitles,
    textInputs
}