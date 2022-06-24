import { Dialog, DialogContent, DialogTitle, Icon, IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { style } from "../../config/theme/styles";

export default function Modal(props) {
    return (
        <>
            <Dialog
                sx={style.modalBlur}
                BackdropProps={{ invisible: true }}
                {...props}
            >
                <DialogTitle
                    variant='h5'
                    fontWeight={700}
                    textAlign="center"
                    sx={{ display: 'flex', gap: '15px' }}
                >   
                    {props.iconimage &&
                        <Icon style={{ width: '32px', height: '32px' }}>
                            {props.iconimage}
                        </Icon>
                    }
                    {props.title}
                    {!props.hideCloseButton && 
                        <IconButton
                            sx={{ position: 'absolute', right: 8, top: 8, }}
                            onClick={props.onClose}
                        >
                            <MdClose />
                        </IconButton>
                    }
                </DialogTitle>                
                <DialogContent>
                    {props.children}
                </DialogContent>
            </Dialog>
        </>
    )
}