const getAllusers = (req, res) => {
  const data = {
    id: '1',
    name: "yahya",
    email: "yahya@gmail.com",
    address: "singgalang 7'"
  }

  res.json({
    message: "GET all users success",
    data: data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new user success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log('idUser: ', idUser);
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
}

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  console.log('idUser: ', idUser);
  res.json({
    message: "DELETE user success",
    data: {
      id: idUser,
      name: "yahya",
      email: "yahya@gmail.com",
      address: "singgalang 7'"
    }
  })
}

module.exports = {
  getAllusers,
  createNewUser,
  updateUser,
  deleteUser,
};