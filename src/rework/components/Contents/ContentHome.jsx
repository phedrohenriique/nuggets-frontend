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
                        O Projeto é feito para que o tempo de procura pelo preço de algum item seja reduzido, melhorando assim as cotações por locais aonde não se teve contato prévio com empresas nativas.
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
        </Box>
    )
}