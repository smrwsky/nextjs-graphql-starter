import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { InputError, Textarea, TextareaProps } from '@/lib/seed-ui';

export interface TextareaFieldProps<
  Values extends FieldValues,
  Name extends FieldPath<Values>,
> extends Omit<
    TextareaProps,
    | 'defaultValue'
    | 'getName'
    | 'getUrl'
    | 'name'
    | 'value'
    | 'onChange'
    | 'onBlur'
    | 'onUpload'
  > {
  name: Name;
  defaultValue?: Values[Name];
  rules?: RegisterOptions<Values, Name>;
}

const TextareaField = <
  Values extends FieldValues = FieldValues,
  Name extends FieldPath<Values> = FieldPath<Values>,
>({
  rules,
  name,
  ...props
}: TextareaFieldProps<Values, Name>): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Values>();

  return (
    <>
      <Textarea {...register(name, rules)} {...props} />

      {errors[name]?.message && (
        <InputError>{errors[name]?.message as string}</InputError>
      )}
    </>
  );
};

export default TextareaField;
