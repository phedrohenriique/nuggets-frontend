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

const pagesBasic = {
    background: colors.pagesBackground,
    width: "100vw",
    height: "100vh",
    display: "flex",
}

const menu = {
    display: "flex",
    background: colors.pagesMenu,
    fontFamily: fonts.montserrat,
    weight: "bold"

}

const menuSide = {
    height: "100%",
    background: colors.pagesMenu,
}

const cardsCenterItems = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const cardsFlexRow = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
}

const cardsFlexColumn = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}

const textTitles = {
    fontFamily: fonts.montserrat,
    weight: "bold"
}

const textInputs = {
    fontFamily: fonts.montserrat,
    weight: "bold",
}

const link = {
    color: colors.link
}

const linkComponent = {
    all: "unset"
}

const errorText = {
    color: colors.errorColor,
    fontFamily: fonts.montserrat,
    weight: "bold",
}

export const styles = {
    pages,
    pagesBasic,
    menu,
    menuSide,
    textTitles,
    textInputs,
    cardsFlexColumn,
    cardsFlexRow,
    cardsCenterItems,
    link,
    linkComponent,
    errorText
}