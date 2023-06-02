const userAdapter = (usersToMap) => {
  const mappedUsers = usersToMap.map((user) => {
    return {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      image: user.image,
    };
  });

  return mappedUsers;
};

export default userAdapter;
