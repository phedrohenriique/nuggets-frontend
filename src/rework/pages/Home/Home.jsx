import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'
import { MenuNavigation } from '../../components/Menu/MenuNavigation'
import { FooterBasic } from '../../components/Footer/FooterBasic'
import { colors } from '../../config/colors'
import { styles } from '../../config/styles'

export const Home = (props) => {
    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="column"
        >
            <MenuNavigation />
            <Box
                width="100%"
                display="flex"
                flexDirection="column"

            >
                <Box
                    padding="1em"
                    display="flex"
                    flexDirection="row"
                    width="100%"
                >
                    <Box
                        padding="1em"
                        width="50%"
                        background={colors.pagesMenu}
                        borderRadius="10px"
                        color="white"
                    >
                        <Text styles={styles.textTitles}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt impedit fugiat recusandae quod maxime porro eum, exercitationem commodi odio neque tenetur cum illo iure facilis eius accusamus aspernatur perferendis tempore ex sequi. Ratione eaque laborum iure error corrupti perspiciatis voluptates dolorum aliquid nostrum enim? Nulla, fugit consequatur. Corporis iusto dolorem dolores tempore voluptas ducimus! Tenetur quidem nisi, et alias officia vel provident! Odit amet consequatur culpa quibusdam quasi facilis quos pariatur sed eius. Exercitationem eum debitis laborum corrupti deleniti, ratione nesciunt odit itaque iure. Ducimus, accusantium ullam nostrum sequi suscipit, velit aut libero saepe nihil inventore magni ipsam laboriosam ab.
                        </Text>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}