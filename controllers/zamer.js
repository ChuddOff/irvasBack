import {lodzi, lodziExtensive} from '../models/model.js';

class Zamer{

    test(req, res) {
          res.send(true);
     }
     async mongopost(req, res) {
          try {
               const {name, tel} = req.body;

               const isNotNewEl = await lodzi.findOne({
                    tel: tel
               })
               if (isNotNewEl) {
                    res.status(409).json({
                         message: 'Уже имеется'
                    })
                    return;
               }

               const postzamer = new lodzi({
                    name: name,
                    tel: tel
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
     async mongopostExtensive(req, res) {
          try {
               const {name, tel, type, width, height, glass, glass2} = req.body;

               const isNotNewEl = await lodzi.findOne({
                    tel: tel
               })
               if (isNotNewEl) {
                    res.status(409).json({
                         message: 'Уже имеется'
                    })
                    return;
               }

               const postzamer = new lodzi({
                    name: name,
                    tel: tel,
                    type: type,
                    width: width,
                    height: height,
                    glass: glass,
                    glass2: glass2,
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
}
export default new Zamer();