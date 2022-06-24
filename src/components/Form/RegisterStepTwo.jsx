import { IconButton, InputAdornment, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import eyeOffIcon from '../../assets/icons/eye-off.svg'
import eyeIcon from '../../assets/icons/eye.svg'
import { style } from '../../config/theme/styles'
import { BasicButtonPink } from '../BasicButton/BasicButtonPink'
import InputComponent from '../InputComponent/InputComponent'
import { GenericForm } from './GenericForm'

export const RegisterStepTwo = (props) => {
    const [showPassword, setShowPassword] = useState(false)

    function handleClickShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <Box
            
            padding={2}
            borderRadius={'10px'}
            width={'400px'}
            height={'400px'}
            boxSizing={'medium'}
        >
            <GenericForm
                onSubmit={props.onSubmit}
                ref={props.formRef}
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
            >
                <Typography
                    variant={'h6'}
                    fontWeight="bold"
                    sx={style.textTitle} >
                    Escolha uma senha
                </Typography>
                <InputComponent
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name={'Senha *'}
                    placeholder="••••••••"
                    endAdornment={
                        <InputAdornment>
                          <IconButton
                            aria-label="mostrar ou ocultar a senha"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? 
                                <img src={eyeIcon} alt="olho aberto" style={{width: '20px', height: '18px', fontColor: 'red'}}/> : 
                                <img src={eyeOffIcon} alt="olho fechado" style={{width: '20px', height: '18px'}}/>}
                          </IconButton>
                        </InputAdornment>
                      }
                />
                <InputComponent
                    type={showPassword ? 'text' : 'password'}
                    id="rePass"
                    name={'Repita a senha *'}
                    placeholder="••••••••"
                    endAdornment={
                        <InputAdornment>
                          <IconButton
                            aria-label="mostrar ou ocultar a senha"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? 
                                <img src={eyeIcon} alt="olho aberto" style={{width: '20px', height: '18px'}}/> : 
                                <img src={eyeOffIcon} alt="olho fechado" style={{width: '20px', height: '18px'}}/>}
                          </IconButton>
                        </InputAdornment>
                      }
                />
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={3}
                >
                    <BasicButtonPink sx={style.buttonLogin} type="submit" text={'Cadastrar'} />
                    <Box display="flex" gap={0.4}>
                        <Typography sx={style.textLogin}>Já possui uma conta? Faça seu </Typography>
                        <Link href="/login" underline="hover" sx={style.linkLogin}>Login</Link>
                    </Box>
                </Box>
            </GenericForm>
        </Box>
    )
}