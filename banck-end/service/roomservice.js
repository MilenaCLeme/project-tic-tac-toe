const modelRoom = require('../model/roommodel');
const error = require('../useful/mensage');

const createRoomsServ = (name) => {
  if (!name) throw error(404, 'name not found');

  const modelCreate = await modelRoom.createRoomsServ(name);

  return modelCreate;
}

module.exports = {
  createRoomsServ,
}