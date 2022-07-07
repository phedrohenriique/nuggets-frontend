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

export const styles = {
    pages,
    textTitles,
    textInputs,
    cardsFlexColumn,
    cardsFlexRow,
    cardsCenterItems,
    link,
    linkComponent
}