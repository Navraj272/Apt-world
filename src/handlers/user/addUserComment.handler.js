import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
export class AddCommentHandler extends BaseHandler {
  async run() {
    const { comment, title, userId, authenticatedAdminId } = this.args;
    const adminDetails = await db.AdminUser.findOne({
      where: { adminUserId: authenticatedAdminId },
      attributes: ["email"],
      include: {
        model: db.AdminRole,
        attributes: ["name"],
      },
    });

    const createComment = await db.Comment.create({
      comment,
      title,
      commentedBy: adminDetails.email,
      role: adminDetails.AdminRole.name,
      status: true,
      userId,
    });

    return { createComment, success: true };
  }
}
