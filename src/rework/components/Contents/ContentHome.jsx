import React from 'react'
import {
    Box,
    Text,
    Image,
    Fade,
    useMediaQuery
} from '@chakra-ui/react'
import { colors } from '../../config/colors'
import { styles } from '../../config/styles'
import { FooterBasic } from '../Footer/FooterBasic'
import mountainsOne from '../../assets/mountains_01.jpg'
import mountainsTwo from '../../assets/mountains_02.jpg'

export const ContentHome = (props) => {
    const [minWidth, isDisplayingInBrowser] = useMediaQuery(['(min-width: 500px)', '(display-mode: browser)'])

    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"

        >
            {/* First  box content */}
            <Box
                padding="1em"
                paddingTop="2em"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                width="100%"
                gap="1em"
            >
                <Box
                    height="fit-content"
                    padding="1em"
                    width="40%"
                    background={colors.pagesMenu}
                    borderRadius="10px"
                    color="white"
                    _hover={{ transform: "scale(1.05)", transition: "0.5s" }}
                >
                    <Text styles={styles.textTitles} >
                        The Project is designed to reduce the search time for the price of an item, thus improving quotations in places where there was no previous contact with native companies.
                    </Text>
                    <Text styles={styles.textTitles} >
                        The idea of ​​the project is that registered customers have access to a dashboard to manage their purchases or finances, so that they can evaluate the best price in a given region, currently the main goal of the application is retrieve the users data and attach it to their list.
                    </Text>
                </Box>
                <Box
                    _hover={{ transform: "scale(1.05)", transition: "0.5s" }}
                    borderRadius="10px"
                    background="white"
                    width="40%"
                    padding="1em"
                >
                    <Image
                        borderRadius="10px"
                    //src={mountainsOne}
                    />
                </Box>
            </Box>
            <FooterBasic />
        </Box>
    )
}