export const usersAdapter = (usersToMap) => {
  const mappedUsers = usersToMap.map((user) => {
    return {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      image: user.image,
    };
  });

  return mappedUsers;
};



export const userAdapter = (userToMap) => {
  const userMapped = {
    id: userToMap.id,
    fullName: `${userToMap.firstName} ${userToMap.lastName}`,
    image: userToMap.image,
  }
  return userMapped;
}
