const modelRoom = require('../model/roommodel');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('createRoom', async ({ name }) => {
      console.log('creato uma sala');
      const { insertedId } = await modelRoom.createRooms(name);
      const room = await modelRoom.getById(insertedId);
      io.emit('refreshGame', room);
    });
  });
};
