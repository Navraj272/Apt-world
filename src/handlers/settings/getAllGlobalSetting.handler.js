import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"

export class GetAllGlobalSettingHandler extends BaseHandler {
    async run() {
        const setting = await db.GlobalSetting.findAll()
        return { message: 'Success', globalSetting: setting }
    }
}
