import { SmallWindow } from "src/Components/SmallWindow/SmallWindow";
import { AuthCheckWithAuth } from "src/Components/AuthChekWithAuth/AuthChekWithAuth";
import { AccountForm } from "src/Components/AccountForm/AccountForm";
import { FormButton } from "src/Components/FormButton/FormButton";
import { Input } from "src/Components/Input/Input";
import { useUpdateCurrentUserMutation } from "src/redux/api/api";
import { useForm } from "react-hook-form";
import { getFetchParam } from "./func";
import { FormHeader } from "src/Components/FormHeader/FormHeader";
import { getUsernameError, getEmailError } from "../SignUpPage/func";
import React from "react";
const Profile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const urlRegex =
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i;
  return (
    <SmallWindow>
      <AccountForm
        fetch={useUpdateCurrentUserMutation}
        handler={handleSubmit}
        getFethParam={getFetchParam}
      >
        <FormHeader header="Edit Profile" />
        <Input
          serverError={getUsernameError(errors)}
          autocomplete="username"
          name="username"
          type="text"
          placeholder="Username"
          header="Username"
          error={errors}
          register={register}
          options={{
            required: "cannot be empty",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username must be at most 20 characters",
            },
          }}
        />
        <Input
          serverError={getEmailError(errors)}
          name="email"
          error={errors}
          type="email"
          placeholder="Email address"
          header="Email address"
          register={register}
          options={{
            required: "cannot be empty",
            pattern: {
              value: emailRegex,
              message: "Invalid email address",
            },
          }}
        />
        <Input
          autocomplete="new-password"
          name="password"
          error={errors}
          type="password"
          placeholder="new password"
          header="Password"
          register={register}
          options={{
            required: "cannot be empty",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 40,
              message: "Password must be at most 40 characters",
            },
          }}
        />
        <Input
          register={register}
          name="image"
          type="url"
          header="Avatar image (url)"
          placeholder="Avatar image"
          error={errors}
          options={{ pattern: { value: urlRegex, message: "Invalid url" } }}
        />
        <FormButton buttonText="Save" />
      </AccountForm>
    </SmallWindow>
  );
};

export const ProfilePage = () => (
  <AuthCheckWithAuth>
    <Profile />
  </AuthCheckWithAuth>
);
