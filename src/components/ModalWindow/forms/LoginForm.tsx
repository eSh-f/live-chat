import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../store/RTK Query/loginApi";
import { Box, Button, TextField, Typography } from "@mui/material";

interface LoginFormProps {
  onSwitch: () => void;
}

interface LoginFormIputs {
  username: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({ onSwitch }) => {
  const navigate = useNavigate();

  const [loginUser, { error, isLoading }] = useLoginUserMutation();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginFormIputs>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<LoginFormIputs> = async (data) => {
    try {
      const response: { token: string } = await loginUser(data).unwrap();
      navigate("/chat");
      return response.token;
    } catch (error) {
      alert(`Ошибка при логине: ${JSON.stringify(error)} `);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        padding: 2,
        height: "100%",
      }}
    >
      <Typography variant="h4"> Вход</Typography>

      <TextField
        id="standard-basic"
        label="Login"
        variant="outlined"
        size="small"
        {...register("username", {
          required: "Поле обязательно к заполнению!",
          minLength: { value: 5, message: "Минимум 5 символов." },
        })}
        error={!!errors.username}
        helperText={errors?.username?.message}
      />

      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        size="small"
        {...register("password", {
          required: "Поле обязательно к заполнению!",
          minLength: { value: 6, message: "Минимум 6 символов." },
        })}
        error={!!errors.password}
        helperText={errors?.password?.message}
      />

      <Button
        type="submit"
        sx={{
          margin: 1,
          bgcolor: "darkgrey  ",
          color: "white",
          width: "50%",
        }}
        disabled={!isValid}
        size="small"
      >
        Войти
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mt: "auto",
        }}
      >
        <Button
          variant="text"
          onClick={() => {
            alert("Ебать ты лох!");
          }}
          sx={{ fontSize: "12px" }}
        >
          Забыли пароль?
        </Button>

        <Button variant="text" onClick={onSwitch} sx={{ fontSize: "12px" }}>
          Зарегистрироваться
        </Button>
      </Box>
    </Box>
  );
};
export default LoginForm;
