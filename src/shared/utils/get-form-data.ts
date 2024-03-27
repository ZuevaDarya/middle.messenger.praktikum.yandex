export function getFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  const data: Record<string, string> = {};

  Object(formData).forEach((value: string, key: string) => {
    data[key] = value;
  });

  return data;
}

