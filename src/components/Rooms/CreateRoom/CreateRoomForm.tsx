import React, { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateRoomMutation } from "../../../store/RTK Query/roomApi";
import { Box, Button, TextField } from "@mui/material";

interface ICreateRoomFormInputs {
  name: string;
}

interface ICreateRoomFormProps {
  onClose: () => void;
}

const CreateRoomForm: FC<ICreateRoomFormProps> = ({ onClose }) => {
  const [addRoom, { isSuccess }] = useCreateRoomMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateRoomFormInputs>();

  useEffect(() => {
    if (isSuccess) {
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

  const onSubmit: SubmitHandler<ICreateRoomFormInputs> = async (data) => {
    try {
      await addRoom(data).unwrap();
    } catch (error) {
      console.error(error);
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
        gap: 3,
      }}
    >
      <TextField
        id="standard-basic"
        label="Название комнаты:"
        variant="standard"
        {...register("name", {
          required: true,
          minLength: { value: 4, message: "Минимум 4 символа" },
        })}
        error={errors.name}
        helperText={errors?.name?.message}
      />
      <Box>
        <Button type="submit" variant="contained">
          Создать
        </Button>
      </Box>
    </Box>
  );
};

export default CreateRoomForm;
