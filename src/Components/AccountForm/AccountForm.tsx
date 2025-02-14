import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { useEffect } from "react";
import { IApiHook } from "../../redux/api/api";
import { Alert, Spin } from "antd/es";
import { setError } from "../../redux/slice/errorsDataSlice/errorsDataSlice";
import { useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { setAutarization } from "../../redux/slice/AuthorizationSlice/Authorization";

interface IAccountFormProps {
  children: React.ReactNode;
  handler: UseFormHandleSubmit<FieldValues, undefined>;
  fetch: IApiHook;
  getFethParam: (data: FieldValues) => FieldValues;
}

export const AccountForm: React.FC<IAccountFormProps> = ({
  handler,
  children,
  fetch,
  getFethParam,
}) => {
  const [submit, { isLoading, isError, isSuccess, error, data }] = fetch();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      dispatch(setError(error));
      setTimeout(() => dispatch(setError(null)), 5000);
    }
    if (isSuccess) {
      dispatch(setAutarization(data));
    }
  }, [error, dispatch, isError, isSuccess, data]);

  if (isSuccess) {
    setTimeout(() => navigate("/"), 1000);
  }

  return (
    <Spin spinning={isLoading} size="large">
      {isError && (
        <Alert message="Извините, такого аккаунта не существует" type="error" />
      )}
      {isSuccess && (
        <Alert
          message="Success, you will be redirected to the main page"
          type="success"
        />
      )}
      <form
        onSubmit={handler((data) => {
          const user = getFethParam(data);
          submit(user);
        })}
      >
        {children}
      </form>
    </Spin>
  );
};
