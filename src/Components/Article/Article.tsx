import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { BigWindow } from "../BigWindow/BigWindow";
import { FormHeader } from "../FormHeader/FormHeader";
import { Alert, Button, Form, Input, Spin } from "antd/es";
import { FormError } from "../FormError/FormError";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import styles from './Article.module.scss'
export interface IPostForm {
  title: string;
  description: string;
  body: string;
  tagList: { tag: string }[];
}

interface IArticleProps {
  onSubmit: SubmitHandler<IPostForm>;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  defaultVal: IPostForm;
}

export const Article: React.FC<IArticleProps> = ({
  onSubmit,
  isSuccess,
  isError,
  isLoading,
  defaultVal,
}) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IPostForm>({ defaultValues: defaultVal });

  const { fields, append, remove } = useFieldArray<IPostForm>({
    name: "tagList",
    control,
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/articles");
    }
  }, [isSuccess, navigate]);

  return (
    <BigWindow>
      <Spin spinning={isLoading}>
        {isError && <Alert type="error" message="Something went wrong" />}
        <FormHeader header="Create new article" />
        <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
          <Form.Item
            label="Title"
            validateStatus={errors.title ? "error" : undefined}
            help={errors.title ? errors.title.message : undefined}
          >
            <Controller
              name="title"
              control={control}
              rules={{
                required: "Is required",
                maxLength: { value: 30, message: "Max length is 30" },
              }}
              render={({ field }) => <Input {...field} placeholder="Title" />}
            />
          </Form.Item>
          <Form.Item
            label="Short description"
            validateStatus={errors.description ? "error" : undefined}
            help={errors.description ? errors.description.message : undefined}
          >
            <Controller
              name="description"
              control={control}
              rules={{
                required: "Is required",
                maxLength: { value: 200, message: "Max length is 200" },
              }}
              render={({ field }) => <Input {...field} placeholder="Title" />}
            />
          </Form.Item>
          <Form.Item
            label="Text"
            validateStatus={errors.description ? "error" : undefined}
            help={errors.description ? errors.description.message : undefined}
          >
            <Controller
              name="body"
              control={control}
              rules={{
                required: "Is required",
              }}
              render={({ field }) => (
                <Input.TextArea
                  {...field}
                  placeholder="Text"
                  autoSize={{ minRows: 6 }}
                />
              )}
            />
          </Form.Item>
          <Form.Item label="Tags">
            {fields.map((field, index) => (
              <div key={field.id}>
                <Controller
                  name={`tagList.${index}.tag`}
                  control={control}
                  rules={{
                    required: "Is required",
                    maxLength: { value: 20, message: "Max length is 20" },
                  }}
                  render={({ field }) => (
                    <Input {...field} placeholder="Tag" className={styles.Tag} />
                  )}
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className={styles.delete}
                  disabled={fields.length === 1}
                >
                  Remove
                </button>
                {fields.length - 1 === index && fields.length < 11 && (
                  <button
                    type="button"
                    onClick={() => append({ tag: "" })}
                    className={styles.add}
                  >
                    Add Tag
                  </button>
                )}
                {errors?.tagList?.[index]?.tag && (
                  <FormError error={errors?.tagList[index]?.tag.message} />
                )}
              </div>
            ))}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Send</Button>
          </Form.Item>
        </Form>
      </Spin>
    </BigWindow>
  );
};
