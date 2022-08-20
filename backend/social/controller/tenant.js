
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create Tenat
 const createTenant= async (req, res) => {
    try {
        const {address,city,country,name,phone,state,webUrl,zipCode}=req.body
        const tenant = await prisma.tenant.create({
            data: {
                address,
                city,
                country,
                name,
                phone,
                state,
                webUrl,
                zipCode,

            }
        });
        res.status(201).send({tenant});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
}

// Get Tenat
 const getsingletenant= async (req, res) => {
    try {
        const tenant = await prisma.tenant.findUnique({
            where: {id: parseInt(req.params.id)}
        });
        res.status(201).send({tenant});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
}
// Get All Tenant
 const getAlltenant=( async (req, res) => {
    try {
        const tenants = await prisma.tenant.findMany();
        res.status(201).send({tenants});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
});

// Update Tenant
  const updateTenant= async (req, res) => {
    try {
        const {address,city,country,name,phone,state,webUrl,zipCode}=req.body
        const tenant =await  prisma.tenant.update({
            where: {id: parseInt(req.params.id)},
            data: {
                address,
                city,
                country,
                name,
                phone,
                state,
                webUrl,
                zipCode,

            }
            
        });
        res.status(201).send({tenant});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
}

// Delete Tenant
 const deleteTenant= async (req, res) =>{
    try {
         await prisma.tenant.delete({
            where: {id: parseInt(req.params.id)},
        });
        res.status(201).send({msg:'Deketed'})
    } 
    catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    createTenant,
    getsingletenant,
    getAlltenant,
    updateTenant,
    deleteTenant
};