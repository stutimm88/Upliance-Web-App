import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";

const UserForm: React.FC = () => {
  const { control, handleSubmit, watch } = useForm();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(`USER-${Math.floor(Math.random() * 10000)}`);
  }, []);

  const onSubmit = (data: any) => {
    localStorage.setItem("userData", JSON.stringify({ ...data, userId }));
    alert("User Data Saved!");
  };

  return (
    <Box textAlign="center">
      <Typography variant="h5">User Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <TextField {...field} label="Name" required />}
        />
        <Button type="submit" variant="contained">Save</Button>
      </form>
    </Box>
  );
};

export default UserForm;
