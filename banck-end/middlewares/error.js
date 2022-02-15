module.exports = (err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json(err.mensage);

  return res.status(500).json({ erro: 'Erro fim' });
}