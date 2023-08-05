export const validateForm = (
  name: string,
  content: string,
  category: string
) => {
  const errors = {
    name: name.trim().length < 1 ? 'Please fill this field' : null,
    content:
      content.trim().length < 5 ? 'Please write 5 symbols or more' : null,
    category: category === '' ? 'Please choose a category' : null,
  };

  return errors;
};
