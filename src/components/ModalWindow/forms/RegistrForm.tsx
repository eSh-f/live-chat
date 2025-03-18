import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterUserMutation } from "../../../store/RTK Query/registerApi";
import { Box, Button, TextField, Typography } from "@mui/material";

interface RegisterProps {
  onSwitch: () => void;
}

interface RegistrFormInputs {
  username: string;
  password: string;
  email: string;
}

const RegistrForm: FC<RegisterProps> = ({ onSwitch }) => {
  const [registerUser, { data, error, isLoading }] = useRegisterUserMutation();

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<RegistrFormInputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<RegistrFormInputs> = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      alert(`Регистрация прошла успешно: ${JSON.stringify(response)}`);
      onSwitch();
      reset();
    } catch (error) {
      alert(JSON.stringify(error) || "Произоишла ошибка при регистрации!");
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
      }}
    >
      <Typography sx={{ marginBottom: 1 }} variant="h4">
        Введите данные
      </Typography>

      <TextField
        id="outlined-basic"
        label="Login"
        variant="outlined"
        size="small"
        {...register("username", {
          required: "Поле обязательно к заполнению!",
          minLength: { value: 5, message: "Минимум 5 символов." },
        })}
        error={errors.username}
        helperText={errors?.username?.message}
      />

      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        size="small"
        {...register("password", {
          required: "Поле обязательно к заполнению!",
          minLength: { value: 6, message: "Минимум 6 символов." },
        })}
        error={errors.password}
        helperText={errors?.password?.message}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        size="small"
        {...register("email", {
          required: "Поле обязательно к заполнению!",
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        error={errors.email}
        helperText={errors?.email?.message}
      />
      <Button
        type="subbmit"
        variant="contained"
        sx={{ boxShadow: "0 10px 20px rgba(0,0,0,0.2)", marginTop: 1 }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default RegistrForm;
