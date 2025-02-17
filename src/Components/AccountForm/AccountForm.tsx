import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import React, { useEffect } from "react";
import { IApiHook } from "src/redux/api/api";
import { Alert, Spin } from "antd/es";
import { setError } from "src/redux/slice/errorsDataSlice/errorsDataSlice";
import { useAppDispatch } from "src/redux/store";
import { useNavigate } from "react-router-dom";
import { setAutarization } from "src/redux/slice/AuthorizationSlice/Authorization";
import {
  saveLocalStorageToken,
  saveLocalStorageUsername,
} from "src/LocalStorage/localStorage";

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
      dispatch(setError(data));
      setTimeout(() => dispatch(setError(null)), 5000);
    }
    if (isSuccess) {
      saveLocalStorageToken(data.token);
      saveLocalStorageUsername(data.username);
      dispatch(setAutarization(data));
    }
  }, [error, dispatch, isError, isSuccess, data]);

  if (isSuccess) {
    setTimeout(() => navigate("/articles"), 3000);
  }

  return (
      <Spin spinning={isLoading}>
        {isError && (
            <Alert message="Something went wrong, i think this error from AccountForm" type="error" />
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
