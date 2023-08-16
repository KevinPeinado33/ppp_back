import { Router } from "express";
import { NotificationController } from "../controllers";
import { validateJWT } from "../../../../common/middlewares/jwt";

const route = Router()

const {
    
    postNotification

} = new NotificationController()

route.post('/create-notification', validateJWT, postNotification)

export default route