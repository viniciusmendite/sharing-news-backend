const mongoose = require('mongoose');

const Sharing = require('../models/SharingModel');

module.exports = {
  async index(req, res) {
    const {page = 1} = req.query;
    const sharing = await Sharing.paginate({}, {page, limit: 100, sort: {created: -1}});

    return res.json(sharing);
  },

  async store(req, res) {
    const sharing = await Sharing.create(req.body);

    return res.json(sharing);
  },

  async delete(req, res) {
    await Sharing.findByIdAndRemove(req.params.id);

    return res.json({message: 'Notícia excluída com sucesso !'})
  }
}