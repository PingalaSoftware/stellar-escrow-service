const router = require('express').Router();
const contractRepo = require('../repo/contract');

router.get('/', function (req, res, next) {
  const contract = contractRepo.getEscrow();
  res.send(contract);
});

router.post('/', function (req, res, next) {
  const { pub1, pub2, envelope1, envelope2, envelope3 } = req.body;

  contractRepo.createEscrow(pub1, pub2, envelope1, envelope2, envelope3);
  res.send();
})

router.put('/', function (req, res, next) {
  const { envelope, number } = req.body;
  console.log(envelope);
  contractRepo.updateEnvelope(number, envelope);
  res.send();
})

router.get('/reset', function (req, res, next) {
  contractRepo.reset();
  res.send();
})
module.exports = router;
