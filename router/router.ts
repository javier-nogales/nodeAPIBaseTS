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

router.post('/post-json/', (req:Request, res:Response) => {
    let user:User = new User(req.body.user.id,
                             req.body.user.name,
                             req.body.user.age);
    res.json({
        ok: true,
        path: '/post-json',
        result: user,
    });
});

export default router;