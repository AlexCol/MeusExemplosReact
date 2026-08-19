const getUsersFn = async () => {
  console.log("getUsersFn called");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export const usersService = { getUsersFn };
