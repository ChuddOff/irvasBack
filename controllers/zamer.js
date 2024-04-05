import logger from '../middlewares/logger.js';
import lodzi from '../models/model.js';

class Zamer{

    test(req, res) {
          res.send(true);
     }
     async mongopost(req, res) {
          try {
               console.log(req);
               const {name, phone} = req.body;

               const isNotNewEl = await lodzi.findOne({
                    tel: phone
               })

               if (isNotNewEl) {
                    res.status(409).json({
                         message: 'Уже имеется'
                    })
                    return;
               }

               const postzamer = new lodzi({
                    name: name,
                    tel: phone
               })

               await postzamer.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }
     // site(req, res) {
     //      res.sendFile('index.html')
     // }
}
export default new Zamer();