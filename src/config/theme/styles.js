import notebookImage from "../../assets/images/notebook.png"

export const style = {
    textTitle: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.5rem',
        fontWeight: '700',
        alignSelf: 'center',
        color: '#343447',
    },
    textLogin: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '1em',
        fontWeight: '400',
        lineHeight: '130%',
        color: "#3F3F55",
    },
    buttonLogin: {
        width: '50%',
        borderRadius: '10px'
    },
    linkLogin: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.875rem',
        fontWeight: '600',
        lineHeight: '130%',
        color: ' #DA0175',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    modalBlur: {
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(145, 154, 150, 0.3)",
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            borderRadius: '30px',
            width: 'fit-content',
            height: 'fit-content',
            padding: '1.5% 3.5%'
        },
        '& .css-ypiqx9-MuiDialogContent-root, .css-1h9kgfp-MuiTypography-root-MuiDialogTitle-root': {
            padding: '0'
        },
        '& .css-1h9kgfp-MuiTypography-root-MuiDialogTitle-root': {
            marginBottom: '15px'
        }
    },
    customLabel: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '0.75rem',
        fontWeight: '600',
        lineHeight: '143%',
        color: '#343447',
    },
    customInput: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #D0D5DD",
        borderRadius: "8px",
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        fontFamily: "'Inter', sans-serif",
        padding: "0px 14px",
        color: '#747488',
    },
    leftContainer: {
        background: `url(${notebookImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    leftContainerText: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '130%',
        height: '93px',
        width: '388px',
        textAlign: "center",
        color: "#034A2A",
    },
    userInfoText: {
        textAlign: 'center',
        color: '#6E6E85',
        cursor: 'pointer',
    },
    tableContent: {
        color: '#747488',
        fontFamily: "'Nunito', sans-serif",
        fontSize: '14px',
    },
    deleteChargeTitle: {
        color: '#CC7800',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: '130%',
        textAlign: 'center',
        width: '100%'
    },
    deleteChargeBtn: {
        backgroundColor: '#F0F0F5',
        color: '#CC7800',
        fontFamily: "'Nunito', sans-serif",
        fontSize: '1.125rem',
        width: '88px',
        height: '32px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    summaryTableContainer: {
        borderRadius: '30px',
        boxShadow: '0px 4px 4px rgba(172, 217, 197, 0.25)',
        padding: '0px 0px',
        backgroundColor: '#FFFFFF',
    },
    summaryTableTitle: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.125rem',
        fontWeight: 700,
        lineHeight: '130%',
        color: '#3F3F55',
    },
    summaryTableChip: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1rem',
        fontWeight: 700,
        borderRadius: '8px',
        '& .css-wjsjww-MuiChip-label': {
            padding: '0 15px',
        },
    },
    summaryTableLabel: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '0.005rem',
        lineHeight: '312%',
        padding: '2% 5%',
        color: '#3F3F55',
    },
    summaryTableData: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: '0.005rem',
        lineHeight: '312%',
        padding: '2% 5%',
        color: '#6E6E85',
    },
    summaryTableLink: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: '130%',
        color: '#DA0175',
    },
    billRegisterModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        height: 'fit-content',
        bgcolor: 'background.paper',
        borderRadius: '20px',
        boxShadow: 24,
        p: 3,
    },
    billModal: {

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        height: 'fit-content',
        bgcolor: 'background.paper',
        borderRadius: '20px',
        boxShadow: 24,
        p: 3,
    },
    descriptionInput: {
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
        padding: "2px 14px",
        backgroundColor: "white",
    },
    buttonEditionModal: {
        height: '25px',
        width: '40%',
        borderRadius: '20px'
    },
    PageTitleText: {
        fonttSize: "1.5rem"
    },
    stepRegister: {
        '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
            border: '1.5px solid #0E8750',
            borderRadius: '50%',
            height: '32px',
            width: '32px',
            color: '#F0F0F5',
        },
        '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active, .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
            color: '#0E8750',
            border: '0',
        },
        '& .css-117w1su-MuiStepIcon-text': {
            fill: '#0E8750',
            /* fill: '#F0F0F5', */
        },
        '& .css-qivjh0-MuiStepLabel-label.Mui-active, .css-qivjh0-MuiStepLabel-label.Mui-completed, .css-qivjh0-MuiStepLabel-label.Mui-disabled': {
            font: "700 15px 'Montserrat', sans-serif",
            lineHeight: '130%',
            color: '#0E8750',
            marginLeft: '16px',
        },
        '& .css-14yr603-MuiStepContent-root': {
            borderLeft: '3px solid #0E8750',
            minHeight: '20px',
            marginLeft: '15px',
        },
        '& .css-1mz1l2x-MuiStepContent-root': {
            marginLeft: '18px',
        }
    },
    billDetailsTitle: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '0.005rem',
        lineHeight: '150%',
        color: '#3F3F55',
    },
    billDetailsText: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '150%',
        color: '#3F3F55',
    },
}