"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enquiryEmailHtml = void 0;
const enquiryEmailHtml = (enquiry, attachmentCount = 0) => {
  let extraRows = '';
  if (enquiry.type === 'product' && enquiry.product) {
    const productName = enquiry.product.name && enquiry.product.name.en || enquiry.product.baseCode || 'N/A';
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
  if (enquiry.type === 'franchise_product' && enquiry.franchiseLocation) {
    const fl = enquiry.franchiseLocation;
    extraRows = `
      <tr>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;">Franchise</td>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${fl.city}, ${fl.state}</td>
      </tr>
      <tr>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;">Franchise Address</td>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${fl.address}</td>
      </tr>
      <tr>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;white-space:nowrap;">Franchise Contact</td>
        <td style="padding:10px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#111827;font-weight:600;">${fl.contactName || 'N/A'} &middot; ${fl.phone} &middot; <a href="mailto:${fl.email}" style="color:#E11922;text-decoration:none;">${fl.email}</a></td>
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
    enquiry = {
      ...enquiry,
      message: msgAfterFields.trim() || 'No additional details provided.'
    };
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
        ${attachmentCount > 0 ? `
        <div style="margin-top:16px;padding:14px 20px;background:#fef2f2;border-radius:4px;">
          <p style="margin:0;font-size:12px;color:#991b1b;font-weight:600;">&#128206; ${attachmentCount} photo${attachmentCount !== 1 ? 's' : ''} attached to this email.</p>
        </div>` : ''}
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
exports.enquiryEmailHtml = enquiryEmailHtml;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlbnF1aXJ5RW1haWxIdG1sIiwiZW5xdWlyeSIsImF0dGFjaG1lbnRDb3VudCIsImV4dHJhUm93cyIsInR5cGUiLCJwcm9kdWN0IiwicHJvZHVjdE5hbWUiLCJuYW1lIiwiZW4iLCJiYXNlQ29kZSIsImZyYW5jaGlzZUxvY2F0aW9uIiwiZmwiLCJjaXR5Iiwic3RhdGUiLCJhZGRyZXNzIiwiY29udGFjdE5hbWUiLCJwaG9uZSIsImVtYWlsIiwibGluZXMiLCJtZXNzYWdlIiwic3BsaXQiLCJyZW50YWxGaWVsZHMiLCJtc2dBZnRlckZpZWxkcyIsInBhc3NlZEZpZWxkcyIsImxpbmUiLCJ0cmltIiwiY29sb25JZHgiLCJpbmRleE9mIiwibGFiZWwiLCJzdWJzdHJpbmciLCJ2YWx1ZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy9lbWFpbFRlbXBsYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW5xdWlyeUVtYWlsSHRtbCA9IChlbnF1aXJ5LCBhdHRhY2htZW50Q291bnQgPSAwKSA9PiB7XG4gIGxldCBleHRyYVJvd3MgPSAnJztcblxuICBpZiAoZW5xdWlyeS50eXBlID09PSAncHJvZHVjdCcgJiYgZW5xdWlyeS5wcm9kdWN0KSB7XG4gICAgY29uc3QgcHJvZHVjdE5hbWUgPSAoZW5xdWlyeS5wcm9kdWN0Lm5hbWUgJiYgZW5xdWlyeS5wcm9kdWN0Lm5hbWUuZW4pIHx8IGVucXVpcnkucHJvZHVjdC5iYXNlQ29kZSB8fCAnTi9BJztcbiAgICBleHRyYVJvd3MgPSBgXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzZiNzI4MDt3aGl0ZS1zcGFjZTpub3dyYXA7XCI+UHJvZHVjdDwvdGQ+XG4gICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzExMTgyNztmb250LXdlaWdodDo2MDA7XCI+JHtwcm9kdWN0TmFtZX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzoxMHB4IDIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTdlYjtmb250LXNpemU6MTNweDtjb2xvcjojNmI3MjgwO3doaXRlLXNwYWNlOm5vd3JhcDtcIj5TS1U8L3RkPlxuICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjEwcHggMjBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTVlN2ViO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiMxMTE4Mjc7Zm9udC13ZWlnaHQ6NjAwO1wiPiR7ZW5xdWlyeS5wcm9kdWN0LmJhc2VDb2RlIHx8ICdOL0EnfTwvdGQ+XG4gICAgICA8L3RyPmA7XG4gIH1cblxuICBpZiAoZW5xdWlyeS50eXBlID09PSAnZnJhbmNoaXNlX3Byb2R1Y3QnICYmIGVucXVpcnkuZnJhbmNoaXNlTG9jYXRpb24pIHtcbiAgICBjb25zdCBmbCA9IGVucXVpcnkuZnJhbmNoaXNlTG9jYXRpb247XG4gICAgZXh0cmFSb3dzID0gYFxuICAgICAgPHRyPlxuICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjEwcHggMjBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTVlN2ViO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM2YjcyODA7d2hpdGUtc3BhY2U6bm93cmFwO1wiPkZyYW5jaGlzZTwvdGQ+XG4gICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzExMTgyNztmb250LXdlaWdodDo2MDA7XCI+JHtmbC5jaXR5fSwgJHtmbC5zdGF0ZX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzoxMHB4IDIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTdlYjtmb250LXNpemU6MTNweDtjb2xvcjojNmI3MjgwO3doaXRlLXNwYWNlOm5vd3JhcDtcIj5GcmFuY2hpc2UgQWRkcmVzczwvdGQ+XG4gICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzExMTgyNztmb250LXdlaWdodDo2MDA7XCI+JHtmbC5hZGRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjEwcHggMjBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTVlN2ViO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM2YjcyODA7d2hpdGUtc3BhY2U6bm93cmFwO1wiPkZyYW5jaGlzZSBDb250YWN0PC90ZD5cbiAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzoxMHB4IDIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTdlYjtmb250LXNpemU6MTNweDtjb2xvcjojMTExODI3O2ZvbnQtd2VpZ2h0OjYwMDtcIj4ke2ZsLmNvbnRhY3ROYW1lIHx8ICdOL0EnfSAmbWlkZG90OyAke2ZsLnBob25lfSAmbWlkZG90OyA8YSBocmVmPVwibWFpbHRvOiR7ZmwuZW1haWx9XCIgc3R5bGU9XCJjb2xvcjojRTExOTIyO3RleHQtZGVjb3JhdGlvbjpub25lO1wiPiR7ZmwuZW1haWx9PC9hPjwvdGQ+XG4gICAgICA8L3RyPmA7XG4gIH1cblxuICBpZiAoZW5xdWlyeS50eXBlID09PSAncmVudGFsJykge1xuICAgIGNvbnN0IGxpbmVzID0gKGVucXVpcnkubWVzc2FnZSB8fCAnJykuc3BsaXQoJ1xcbicpO1xuICAgIGxldCByZW50YWxGaWVsZHMgPSAnJztcbiAgICBsZXQgbXNnQWZ0ZXJGaWVsZHMgPSAnJztcbiAgICBsZXQgcGFzc2VkRmllbGRzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICBpZiAoIXBhc3NlZEZpZWxkcykge1xuICAgICAgICBpZiAobGluZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgcGFzc2VkRmllbGRzID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvbklkeCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgICAgICBpZiAoY29sb25JZHggPiAwKSB7XG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBsaW5lLnN1YnN0cmluZygwLCBjb2xvbklkeCkudHJpbSgpO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZS5zdWJzdHJpbmcoY29sb25JZHggKyAxKS50cmltKCk7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZW50YWxGaWVsZHMgKz0gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzo4cHggMTZweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTVlN2ViO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM2YjcyODA7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MC41cHg7XCI+JHtsYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6OHB4IDE2cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTdlYjtmb250LXNpemU6MTNweDtjb2xvcjojMTExODI3O2ZvbnQtd2VpZ2h0OjYwMDtcIj4ke3ZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZ0FmdGVyRmllbGRzICs9IChtc2dBZnRlckZpZWxkcyA/ICdcXG4nIDogJycpICsgbGluZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXh0cmFSb3dzID0gcmVudGFsRmllbGRzO1xuICAgIGVucXVpcnkgPSB7IC4uLmVucXVpcnksIG1lc3NhZ2U6IG1zZ0FmdGVyRmllbGRzLnRyaW0oKSB8fCAnTm8gYWRkaXRpb25hbCBkZXRhaWxzIHByb3ZpZGVkLicgfTtcbiAgfVxuXG4gIHJldHVybiBgXG48IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuPGhlYWQ+PG1ldGEgY2hhcnNldD1cInV0Zi04XCI+PC9oZWFkPlxuPGJvZHkgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjA7YmFja2dyb3VuZDojZjFmNWY5O2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsUm9ib3RvLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1wiPlxuICA8dGFibGUgc3R5bGU9XCJ3aWR0aDoxMDAlO21heC13aWR0aDo1NjBweDttYXJnaW46NDBweCBhdXRvO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjZweDtvdmVyZmxvdzpoaWRkZW47Ym94LXNoYWRvdzowIDRweCAyNHB4IHJnYmEoMCwwLDAsMC4wNik7XCI+XG4gICAgPHRyPlxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZDojRTExOTIyO3BhZGRpbmc6MjhweCAzMnB4O3RleHQtYWxpZ246Y2VudGVyO1wiPlxuICAgICAgICA8aDEgc3R5bGU9XCJtYXJnaW46MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToyMHB4O2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC13ZWlnaHQ6OTAwO1wiPkFQVCA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OjMwMDtcIj5XT1JMRDwvc3Bhbj48L2gxPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MCAzMnB4O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDotMTRweDtcIj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrO2JhY2tncm91bmQ6I0UxMTkyMjtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3BhZGRpbmc6NnB4IDIwcHg7Ym9yZGVyLXJhZGl1czozcHg7XCI+JiMxMjgzMDg7IEVOUVVJUlkgJiMxMjgzMDg7PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjI4cHggMzJweCA4cHg7XCI+XG4gICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjAgMCAyNHB4O2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiMzNzQxNTE7bGluZS1oZWlnaHQ6MS42O1wiPkEgbmV3IGVucXVpcnkgaGFzIGJlZW4gc3VibWl0dGVkIHRocm91Z2ggdGhlIEFQVCBXb3JsZCB3ZWJzaXRlLiBQbGVhc2UgZmluZCB0aGUgZGV0YWlscyBiZWxvdzo8L3A+XG4gICAgICAgIDx0YWJsZSBzdHlsZT1cIndpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1wiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzZiNzI4MDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjVweDtcIj5UeXBlPC90ZD5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzExMTgyNztmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcIj4ke2VucXVpcnkudHlwZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzoxMHB4IDIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTdlYjtmb250LXNpemU6MTNweDtjb2xvcjojNmI3MjgwO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjAuNXB4O1wiPk5hbWU8L3RkPlxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzoxMHB4IDIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTdlYjtmb250LXNpemU6MTNweDtjb2xvcjojMTExODI3O2ZvbnQtd2VpZ2h0OjYwMDtcIj4ke2VucXVpcnkubmFtZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzoxMHB4IDIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTdlYjtmb250LXNpemU6MTNweDtjb2xvcjojNmI3MjgwO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjAuNXB4O1wiPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzExMTgyNztmb250LXdlaWdodDo2MDA7XCI+PGEgaHJlZj1cIm1haWx0bzoke2VucXVpcnkuZW1haWx9XCIgc3R5bGU9XCJjb2xvcjojRTExOTIyO3RleHQtZGVjb3JhdGlvbjpub25lO1wiPiR7ZW5xdWlyeS5lbWFpbH08L2E+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU3ZWI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzZiNzI4MDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjVweDtcIj5QaG9uZTwvdGQ+XG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjEwcHggMjBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTVlN2ViO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiMxMTE4Mjc7Zm9udC13ZWlnaHQ6NjAwO1wiPiR7ZW5xdWlyeS5waG9uZSB8fCAnTi9BJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgJHtleHRyYVJvd3N9XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjI0cHg7cGFkZGluZzoyMHB4O2JhY2tncm91bmQ6I2Y5ZmFmYjtib3JkZXItcmFkaXVzOjRweDtib3JkZXItbGVmdDozcHggc29saWQgI0UxMTkyMjtcIj5cbiAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjowIDAgOHB4O2ZvbnQtc2l6ZToxMHB4O2NvbG9yOiM5Y2EzYWY7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjEuNXB4O2ZvbnQtd2VpZ2h0OjcwMDtcIj5NZXNzYWdlPC9wPlxuICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzFmMjkzNztsaW5lLWhlaWdodDoxLjc7XCI+JHtlbnF1aXJ5Lm1lc3NhZ2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHthdHRhY2htZW50Q291bnQgPiAwID8gYFxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDoxNnB4O3BhZGRpbmc6MTRweCAyMHB4O2JhY2tncm91bmQ6I2ZlZjJmMjtib3JkZXItcmFkaXVzOjRweDtcIj5cbiAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjowO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM5OTFiMWI7Zm9udC13ZWlnaHQ6NjAwO1wiPiYjMTI4MjA2OyAke2F0dGFjaG1lbnRDb3VudH0gcGhvdG8ke2F0dGFjaG1lbnRDb3VudCAhPT0gMSA/ICdzJyA6ICcnfSBhdHRhY2hlZCB0byB0aGlzIGVtYWlsLjwvcD5cbiAgICAgICAgPC9kaXY+YCA6ICcnfVxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MjRweCAzMnB4IDMycHg7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXRvcDoxcHggc29saWQgI2YzZjRmNjtcIj5cbiAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46MDtmb250LXNpemU6MTFweDtjb2xvcjojOWNhM2FmO1wiPkFQVCBXT1JMRCAmbWlkZG90OyBJbmR1c3RyaWFsIFRvb2xzICZhbXA7IEVxdWlwbWVudDwvcD5cbiAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46NHB4IDAgMDtmb250LXNpemU6MTBweDtjb2xvcjojZDFkNWRiO1wiPlRoaXMgaXMgYW4gYXV0b21hdGVkIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBBUFQgV29ybGQgcG9ydGFsLjwvcD5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90YWJsZT5cbjwvYm9keT5cbjwvaHRtbD5gLnRyaW0oKTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLGdCQUFnQixHQUFHQSxDQUFDQyxPQUFPLEVBQUVDLGVBQWUsR0FBRyxDQUFDLEtBQUs7RUFDaEUsSUFBSUMsU0FBUyxHQUFHLEVBQUU7RUFFbEIsSUFBSUYsT0FBTyxDQUFDRyxJQUFJLEtBQUssU0FB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