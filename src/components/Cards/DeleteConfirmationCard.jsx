import { Box, Typography } from '@mui/material'
import { IoWarningOutline as WarningIcon } from 'react-icons/io5'
import { style } from '../../config/theme/styles'

export const DeleteConfirmationCard = (props) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='100%'
            height='fit-content'
            padding='15% 0'
        >
            <WarningIcon
                style={{ width: '96px', height: "96px" }}
                color='#CC7800'
            />
            <Typography
                sx={style.deleteChargeTitle}
                marginTop='35px'
            >
                {props.title}
            </Typography>
            <Box
                display='flex'
                gap={1}
                marginTop='25px'
            >
                <button
                    onClick={props.delCharge}
                    style={style.deleteChargeBtn}
                >
                    Sim
                </button>
                <button
                    onClick={props.closeModal}
                    style={style.deleteChargeBtn}
                >
                    Não
                </button>
            </Box>
        </Box>
    )
}