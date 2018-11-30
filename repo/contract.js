const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ contract: {} })
  .write();

module.exports.createEscrow = function(pub1, pub2, envelope1, envelope2, envelope3){
    db.get('contract')
    .set("pub1", pub1)
    .set("pub2", pub2)
    .set("envelope1", envelope1)
    .set("envelope2", envelope2)
    .set("envelope3", envelope3)
    .write();
}

module.exports.getEscrow = function(){
    const contract = db.get('contract').value();
    return contract;
}

module.exports.updateEnvelope = function(number, envelope){
    const path = `contract.envelope${number}`;
    db.set(path, envelope).write();
}
module.exports.reset = function(){
    db.set('contract', {}).write();
}
