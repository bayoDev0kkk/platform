import { useForm } from "react-hook-form";
import { AccountForm } from "../../Components/AccountForm/AccountForm";
import { FooterFormLink } from "../../Components/FooterFormLink/FooterFormLink";
import { FormButton } from "../../Components/FormButton/FormButton";
import { Input } from "../../Components/Input/Input";
import { SmallWindow } from "../../Components/SmallWindow/SmallWindow";
import { useLoginUserMutation } from "../../redux/api/api";
import { getFetchParam, getLoginError } from "./func";
import { useAppSelector } from "../../redux/store";
import { AuthCheck } from "../../Components/AuthCheck/AuthCheck";
import { FormHeader } from "../../Components/FormHeader/FormHeader";

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const error = useAppSelector((state) => state.error);

  return (
    <SmallWindow>
      <FormHeader header="Sign In" />
      <AccountForm
        getFethParam={getFetchParam}
        handler={handleSubmit}
        fetch={useLoginUserMutation}
      >
        <Input
          serverError={getLoginError(error)}
          autocomplete="email"
          name="email"
          error={errors}
          type="email"
          placeholder="Email address"
          header="Email address"
          register={register}
        />
        <Input
          serverError={getLoginError(error)}
          autocomplete="current-password"
          name="password"
          error={errors}
          type="password"
          placeholder="Password"
          header="Password"
          register={register}
        />
        <FormButton buttonText="Sign In" />
        <FooterFormLink
          to="/sign-up"
          linkText="Sign Up"
          footerText="Don't have an account?"
        />
      </AccountForm>
    </SmallWindow>
  );
};

export const SignInPage = () => (
  <AuthCheck>
    <SignIn />
  </AuthCheck>
);
