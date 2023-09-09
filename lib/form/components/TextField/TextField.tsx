import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { InputError, TextInput, TextInputProps } from '@/lib/seed-ui';

export interface TextFieldProps<
  Values extends FieldValues,
  Name extends FieldPath<Values>,
> extends Omit<
    TextInputProps,
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

const TextField = <
  Values extends FieldValues = FieldValues,
  Name extends FieldPath<Values> = FieldPath<Values>,
>({
  rules,
  name,
  defaultValue,
  ...props
}: TextFieldProps<Values, Name>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Values>();

  return (
    <>
      <TextInput
        defaultValue={defaultValue}
        {...register(name, rules)}
        {...props}
      />

      {errors[name]?.message && (
        <InputError>{errors[name]?.message as string}</InputError>
      )}
    </>
  );
};

export default TextField;
