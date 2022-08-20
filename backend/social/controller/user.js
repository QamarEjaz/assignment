
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create User
 const createUser=async (req, res) => {
  try {
    const {firstName, lastName,bio,country,department,designation,imageUrl,city,employeeId}=req.body
    const user = await prisma.user.create({
      data: {
        city,
        country,
        department,
        designation,
        firstName,
        lastName,bio,imageUrl
      }
    });
    res.status(201).send({ user });
  } catch (error) {
    res.status(500).json(error);
  }
}

// Get User
 const getSingleuser= async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
// Get All Users
 const getAlluser=( async (req, res) => {
  
  try {
    const users = await prisma.user.findMany();
    res.status(201).send({ users });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update User
 const updateUser= async (req, res) => {
  try {
    const {firstName, lastName,bio,country,department,designation,imageUrl,city}=req.body
    const user = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: {
        city,
        country,
        department,
        designation,
        firstName,
        lastName,bio,imageUrl
      }
    });
    res.status(201).send({ user });
  } catch (error) {
    res.status(500).json({
      success:false,
      error
    })
  }
}

// Delete User
 const deleteUser= async (req, res) => {
  try {
    await  prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(201).send({ message:'Deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
createUser,
getSingleuser,
getAlluser,
updateUser,
deleteUser
};
