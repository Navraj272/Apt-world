export const enquiryEmailHtml = (enquiry) => {
  let extraRows = '';

  if (enquiry.type === 'product' && enquiry.product) {
    const productName = (enquiry.product.name && enquiry.product.name.en) || enquiry.product.baseCode || 'N/A';
    extraRows = `
      <tr>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;">Product</td>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${productName}</td>
      </tr>
      <tr>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;">SKU</td>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${enquiry.product.baseCode || 'N/A'}</td>
      </tr>`;
  }

  if (enquiry.type === 'rental') {
    const lines = (enquiry.message || '').split('\n');
    let rentalFields = '';
    let msgAfterFields = '';
    let passedFields = false;
    for (const line of lines) {
      if (!passedFields) {
        if (line.trim() === '') {
          passedFields = true;
          continue;
        }
        const colonIdx = line.indexOf(':');
        if (colonIdx > 0) {
          const label = line.substring(0, colonIdx).trim();
          const value = line.substring(colonIdx + 1).trim();
          if (value) {
            rentalFields += `
              <tr>
                <td style="padding:8px 16px;border-bottom:1px solid #e5e7eb;font-size:12px;color:#6b7280;white-space:nowrap;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">${label}</td>
                <td style="padding:8px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${value}</td>
              </tr>`;
          }
        }
      } else {
        msgAfterFields += (msgAfterFields ? '\n' : '') + line;
      }
    }
    extraRows = rentalFields;
    enquiry = { ...enquiry, message: msgAfterFields.trim() || 'No additional details provided.' };
  }

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;max-width:560px;margin:40px auto;background:#fff;border-radius:6px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
    <tr>
      <td style="background:#E11922;padding:28px 32px;text-align:center;">
        <h1 style="margin:0;color:#fff;font-size:20px;letter-spacing:3px;text-transform:uppercase;font-weight:900;">APT <span style="font-weight:300;">WORLD</span></h1>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px;">
        <div style="text-align:center;margin-top:-14px;">
          <span style="display:inline-block;background:#E11922;color:#fff;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 20px;border-radius:3px;">&#128308; ENQUIRY &#128308;</span>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px 8px;">
        <p style="margin:0 0 24px;font-size:14px;color:#374151;line-height:1.6;">A new enquiry has been submitted through the APT World website. Please find the details below:</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Type</td>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;text-transform:capitalize;">${enquiry.type}</td>
          </tr>
          <tr>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Name</td>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${enquiry.name}</td>
          </tr>
          <tr>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Email</td>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;"><a href="mailto:${enquiry.email}" style="color:#E11922;text-decoration:none;">${enquiry.email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Phone</td>
            <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${enquiry.phone || 'N/A'}</td>
          </tr>
          ${extraRows}
        </table>
        <div style="margin-top:24px;padding:20px;background:#f9fafb;border-radius:4px;border-left:3px solid #E11922;">
          <p style="margin:0 0 8px;font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Message</p>
          <p style="margin:0;font-size:13px;color:#1f2937;line-height:1.7;">${enquiry.message}</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px 32px;text-align:center;border-top:1px solid #f3f4f6;">
        <p style="margin:0;font-size:11px;color:#9ca3af;">APT WORLD &middot; Industrial Tools &amp; Equipment</p>
        <p style="margin:4px 0 0;font-size:10px;color:#d1d5db;">This is an automated notification from the APT World portal.</p>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
};
