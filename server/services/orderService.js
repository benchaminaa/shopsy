const Models = require('../models/sequelize');

let client = null;
let models = null;

async function inTransaction(work) {
  // return client.transaction().then(async (t) => {
  //   work(t)
  //     .then(() => t.commit())
  //     .catch((err) => {
  //       console.log('rrr', err);
  //       t.rollback();
  //       throw err;
  //     });
  // });

  const t = await client.transaction();

  try {
    await work(t);
    return t.commit();
  } catch (err) {
    t.rollback();
    throw err;
  }
}

async function create(user, items, t) {
  // console.log('within create', ...items, user);
  const order = await models.Order.create({
    userId: user.id,
    email: user.email,
    status: 'Not shipped',
  }, { t });

  return Promise.all(items.map(async (item) => {
    const orderItem = await models.OrderItem.create({
      sku: item.sku,
      qty: item.quantity,
      price: item.price,
      name: item.name,
    });
    return order.addOrderItem(orderItem, { t });
  }));
}

async function getAll() {
  return models.Order.findAll({ where: {}, include: [models.OrderItem] });
}

async function setStatus(orderId, status) {
  return models.Order.update({ status }, { where: { id: orderId } });
}

module.exports = (_client) => {
  models = Models(_client);
  client = _client;
  return {
    inTransaction,
    create,
    getAll,
    setStatus,
  };
};
