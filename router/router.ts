import {Router, Request, Response} from 'express';

import User from '../model/user';


const router = Router();

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

export default router;