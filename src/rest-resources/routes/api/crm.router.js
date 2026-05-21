import { CreateCampaignSchema } from '@src/json-schemas/campaign/createCampaign.schema'
import { deleteCampaignSchema } from '@src/json-schemas/campaign/deleteCampaign.schema'
import { getAllCampaignSchema } from '@src/json-schemas/campaign/getAllCampaign.schema'
import { getCampaignSchema } from '@src/json-schemas/campaign/getCampaign.schema'
import { updateCampaignStatusSchema } from '@src/json-schemas/campaign/updateCampaignStatus.schema'
import { UpdateCampaignSchema } from '@src/json-schemas/campaign/updateCampaign.schema'
import { getEmailTemplateSchema } from '@src/json-schemas/email/getEmailTemplate.schema'
import { getAllEmailTemplateSchema } from '@src/json-schemas/email/getAllEmailTemplate.schema'
import { updateEmailTemplateSchema } from '@src/json-schemas/email/updateEmailTemplate.schema'
import { createSegmentSchema } from '@src/json-schemas/segment/createSegment.schema'
import { deleteSegmentSchema } from '@src/json-schemas/segment/deleteSegment.schema'
import { getAllSegmentSchema } from '@src/json-schemas/segment/getAllSegment.schema'
import { updateSegmentSchema } from '@src/json-schemas/segment/updateSegment.schema'
import { CampaignController, EmailTemplateController, SegmentController, TicketController } from '@src/rest-resources/controllers/crm.controller'
import { contextMiddleware } from '@src/rest-resources/middlewares/context.middleware'
import { isAdminAuthenticated } from '@src/rest-resources/middlewares/isAdminAuthenticated'
import { requestValidationMiddleware } from '@src/rest-resources/middlewares/requestValidation.middleware'
import { applicationModule } from '@src/utils/constants/starfManagement.constants'
import express from 'express'
import { getEmailEventSchema } from '@src/json-schemas/campaign/getEmailEvents.schema'

const args = { mergeParams: true }
const crmRouter = express.Router(args)

crmRouter.route('/email/templates')
  .get(contextMiddleware(false),
    requestValidationMiddleware(getAllEmailTemplateSchema),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    EmailTemplateController.getAllEmailTemplate
  )

crmRouter.route('/sendgrid/templates').get(contextMiddleware(false), EmailTemplateController.updateSendGridEmailTemplate)

crmRouter.route('/email/template')
  .get(contextMiddleware(false),
    requestValidationMiddleware(getEmailTemplateSchema),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    EmailTemplateController.getEmailTemplateById
  )
  .put(contextMiddleware(true),
    requestValidationMiddleware(updateEmailTemplateSchema),
    isAdminAuthenticated(applicationModule.crmManagement.update),
    EmailTemplateController.updateEmailTemplate
  )

// Support Tickets Router
crmRouter.route('/tickets')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    TicketController.getTickets
  )
  .put(
    contextMiddleware(true),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.crmManagement.toggle),
    TicketController.updateTicketStatus
  )

crmRouter.route('/ticket/message')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    TicketController.getTicketMessages
  )
  .post(
    contextMiddleware(true),
    requestValidationMiddleware({}),
    isAdminAuthenticated(applicationModule.crmManagement.create),
    TicketController.sendTicketMessage
  )


//Campaign Routes
crmRouter.route('/campaign')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getAllCampaignSchema),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    CampaignController.getAllCampaigns
  )
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(CreateCampaignSchema),
    isAdminAuthenticated(applicationModule.crmManagement.create),
    CampaignController.CreateCamapaign
  )
  .patch(
    contextMiddleware(true),
    requestValidationMiddleware(UpdateCampaignSchema),
    isAdminAuthenticated(applicationModule.crmManagement.update),
    CampaignController.updateCampaign
  )
  .delete(
    contextMiddleware(true),
    requestValidationMiddleware(deleteCampaignSchema),
    isAdminAuthenticated(applicationModule.crmManagement.delete),
    CampaignController.deleteCampaign
  )

crmRouter.route('/campaign/details')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getCampaignSchema),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    CampaignController.getCampaign
  )

crmRouter.route("/campaign/status")
  .patch(
    contextMiddleware(true),
    requestValidationMiddleware(updateCampaignStatusSchema),
    isAdminAuthenticated(applicationModule.crmManagement.update),
    CampaignController.updateCampaignStatus
  );

crmRouter.route('/campaign/emailEvents')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getEmailEventSchema),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    CampaignController.getEmailEvents
  )


//segment Routes
crmRouter.route('/segment')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getAllSegmentSchema),
    isAdminAuthenticated(applicationModule.crmManagement.read),
    SegmentController.getAllSegments
  )
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(createSegmentSchema),
    isAdminAuthenticated(applicationModule.crmManagement.create),
    SegmentController.CreateSegment
  )
  .delete(
    contextMiddleware(true),
    requestValidationMiddleware(deleteSegmentSchema),
    isAdminAuthenticated(applicationModule.crmManagement.delete),
    SegmentController.DeleteSegment
  )
  .patch(
    contextMiddleware(true),
    requestValidationMiddleware(updateSegmentSchema),
    isAdminAuthenticated(applicationModule.crmManagement.update),
    SegmentController.UpdateSegment
  )

crmRouter.route('/segment/preview')
  .post(
    contextMiddleware(false), //passed false because we are performing get operation here only
    requestValidationMiddleware(createSegmentSchema),
    isAdminAuthenticated(applicationModule.crmManagement.create),
    SegmentController.PreviewSegment
  )

export { crmRouter }
