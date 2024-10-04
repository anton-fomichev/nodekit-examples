import {Request, Response} from '@gravity-ui/expresskit';

export function handler(req: Request, res: Response) {
    res.send(`Hello World! Auth policy is: "${req.routeInfo.authPolicy}"`);
}
