import {Router, Request, Response} from 'express';

import User from '../src/endpoint/user/user';
import Login from '../src/endpoint/login/Login';
import SecurityFilter from '../src/security/securityFilter';


const router = Router();

router.all(
  '/*',
  new SecurityFilter().checkAuth,
  (req, res, next) => {
      next();
  }
);

router.get('/', (req:Request, res:Response) => {
    res.json({
        ok: true,
        msg: 'Hello World with router'
    });
});

router.get('/get/:id', (req:Request, res:Response) => {
    const id:String = req.params.id;
    res.json({
        ok: true,
        path: '/get/:id',
        result: `/get/${id}`,
    });
});

router.post('/post/:id', (req:Request, res:Response) => {
    const id:String = req.params.id;
    res.json({
        ok: true,
        path: '/post/:id',
        result: `/post/${id}`,
    });
});

router.post('/user/', (req:Request, res:Response) => {
    try {
        let user:User = new User(req.body.user.id,
                                 req.body.user.name,
                                 req.body.user.age);
        res.json({
            ok: true,
            path: '/user',
            result: user,
        });
    } catch (err) {
        let trace:string|undefined = (err as Error).stack;
        console.log(`Endpoint /user Error:\n${trace}`);
        res.json({
            ok: false,
            path: 'user',
            result: 'Error'
        });
    }
});

// router.post('/login', (req:Request, res:Response) => {
//     try {
//         let login:Login = new Login(
//                                 req.body.login.id,
//                                 req.body.login.passwd);
//         res.json({
//             ok: true,
//             path: '/login',
//             result: login,
//         });
//     } catch (err) {
//         let trace:string|undefined = (err as Error).stack;
//         console.log(`Endpoint /login Error:\n${trace}`);
//         res.json({
//             ok: false,
//             path: 'login',
//             result: 'Error'
//         });
//     }
// });

export default router;