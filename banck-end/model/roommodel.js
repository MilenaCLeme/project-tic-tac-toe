const connect = require('./connection');


const createRooms = async (name) => {
  const players = [];
  const section = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  };

  const db = await connect();
  const { insertedId } = await db.collection('rooms').insertOne({ name, players, section });
  return insertedId;
};

module.exports = {
  createRooms,
};