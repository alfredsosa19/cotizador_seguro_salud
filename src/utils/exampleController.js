<Controller
  control={control}
  name="fechaNac"
  defaultValue=""
  rules={{
    required: true,
    message: "Fecha de nacimiento es requerida",
  }}
  render={(
    { onChange, onBlur, value, name, ref },
    { invalid, isTouched, isDirty }
  ) => <DatePicker onChange={onChange} value={value} />}
/>;
