type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValue: Partial<User>) {}

createOrUpdateUser({
  email: "user@mail.com",
  password: "123456",
});
