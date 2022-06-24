
export const buttonTheme = {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'pink' },
          style: {
            color: 'white',
            background: '#DA0175',
            borderRadius: '10px',
            textTransform: 'capitalize',
            '&:hover': {
              opacity: '0.8',
              backgroundColor: '#DA0175',
            }
          },
        },
        {
          props: { variant: 'white' },
          style: {
            color: '#DA0175',
            background: 'white',
            textTransform: 'capitalize'
          },
        },
        {
          props: { variant: 'userInterface' },
          style: {
            color: '#3A3A3C',
            fontWeight: 'bold',
            background: 'transparent !important',
            borderColor: '1px solid blue',
            width: 'fit-content'
          },
        },
        {
          props: { variant: 'light' },
          style: {
            backgroundColor: '#F8F8F9',
            color: '#0E8750',
            border: '1px solid #DEDEE9',
            borderRadius: '10px',
            fontFamily: "'Nunito', sans-serif",
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: '140%',
            textTransform: 'capitalize',
            '&:hover': {
              opacity: '0.8',
              backgroundColor: '#F8F8F9',
            }
          },
        }
      ],
    },
  },
};
