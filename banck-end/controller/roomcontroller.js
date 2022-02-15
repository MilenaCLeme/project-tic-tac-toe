const serviceRoom = require('../service/roomservice');

const createRoomsControl = async (req, res, next) => {
  try {
    const { name } = req.body;

    const servCreate = await serviceRoom.createRoomsServ(name)

    return res.status(201).json({mensage: `OK - Room:${servCreate}`});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createRoomsControl,
};