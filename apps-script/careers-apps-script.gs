const JOBS_SHEET = 'jobs';
const APPLICATIONS_SHEET = 'applications';
const NOTIFICATION_SHEET = 'notification';
const DEFAULT_HR_EMAIL = 'info@ashbit.in';
const DEFAULT_SUBJECT = 'New career application received';
const DEFAULT_CONFIRM_SUBJECT = 'Your AshbitSoft application was received';

function doGet(e) {
  const action = (e.parameter.action || '').toLowerCase();
  if (action === 'getjobs') {
    return ContentService
      .createTextOutput(JSON.stringify(getJobs_()))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService
    .createTextOutput(JSON.stringify({ error: 'Missing or invalid action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const application = appendApplication_(payload);
    sendNotificationEmail_(application);
    if (payload.sendConfirmation && payload.mail) {
      sendConfirmationEmail_(application);
    }
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getJobs_() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(JOBS_SHEET);
  if (!sheet) return [];

  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];

  const headers = rows.shift().map((h) => String(h).trim());
  return rows.map((row) => {
    const job = {};
    row.forEach((value, index) => {
      job[headers[index] ? headers[index].toString().toLowerCase().replace(/\s+/g, '') : `col${index}`] = value;
    });
    return job;
  });
}

function appendApplication_(payload) {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(APPLICATIONS_SHEET) || ss.insertSheet(APPLICATIONS_SHEET);
  const headers = sheet.getDataRange().getValues()[0] || [];
  const row = [
    new Date(),
    payload.tital || payload.ApplyFor || '',
    payload.name || '',
    payload.mobile || '',
    payload.mail || '',
    payload.ApplyFor || '',
    payload.requirment || '',
    payload.type || '',
    payload.experince || '',
    payload.resume || '',
    payload.message || '',
    payload.source || 'website',
    payload.appliedAt || new Date().toISOString(),
  ];

  if (!headers.length) {
    sheet.appendRow(['Timestamp', 'Title', 'Name', 'Mobile', 'Mail', 'ApplyFor', 'Requirment', 'Type', 'Experince', 'Resume', 'Message', 'Source', 'AppliedAt']);
  }
  sheet.appendRow(row);

  return {
    tital: payload.tital || payload.ApplyFor || '',
    ApplyFor: payload.ApplyFor || payload.tital || '',
    name: payload.name || '',
    mobile: payload.mobile || '',
    mail: payload.mail || '',
    requirment: payload.requirment || '',
    type: payload.type || '',
    experince: payload.experince || '',
    resume: payload.resume || '',
    message: payload.message || '',
    source: payload.source || 'website',
    appliedAt: payload.appliedAt || new Date().toISOString(),
  };
}

function getNotificationConfig_() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(NOTIFICATION_SHEET);
  const config = {
    hrEmail: DEFAULT_HR_EMAIL,
    subject: DEFAULT_SUBJECT,
    confirmSubject: DEFAULT_CONFIRM_SUBJECT,
    adminBodyPrefix: 'A new application has been submitted.',
    confirmBodyPrefix: 'Thank you for applying to AshbitSoft.',
  };

  if (!sheet) return config;

  const values = sheet.getDataRange().getValues();
  values.forEach((row) => {
    if (row[0] && row[1]) {
      const key = String(row[0]).trim().toLowerCase();
      const value = String(row[1]).trim();
      if (key === 'hremail') config.hrEmail = value;
      if (key === 'subject') config.subject = value;
      if (key === 'confirmsubject') config.confirmSubject = value;
      if (key === 'adminbody') config.adminBodyPrefix = value;
      if (key === 'confirmbody') config.confirmBodyPrefix = value;
    }
  });
  return config;
}

function sendNotificationEmail_(application) {
  const config = getNotificationConfig_();
  const body = `<p>${config.adminBodyPrefix}</p>
  <ul>
    <li><strong>Title:</strong> ${application.tital || application.ApplyFor}</li>
    <li><strong>Name:</strong> ${application.name}</li>
    <li><strong>Mobile:</strong> ${application.mobile}</li>
    <li><strong>Email:</strong> ${application.mail}</li>
    <li><strong>Apply For:</strong> ${application.ApplyFor}</li>
    <li><strong>Requirement:</strong> ${application.requirment}</li>
    <li><strong>Type:</strong> ${application.type}</li>
    <li><strong>Experience:</strong> ${application.experince}</li>
    <li><strong>Resume:</strong> ${application.resume || 'Not provided'}</li>
    <li><strong>Source:</strong> ${application.source}</li>
    <li><strong>Applied At:</strong> ${application.appliedAt}</li>
  </ul>
  <p><strong>Message:</strong></p>
  <p>${application.message || 'No message provided.'}</p>`;

  MailApp.sendEmail({
    to: config.hrEmail,
    subject: config.subject,
    htmlBody: body,
    replyTo: application.mail || undefined,
  });
}

function sendConfirmationEmail_(application) {
  const config = getNotificationConfig_();
  if (!application.mail) return;

  const body = `<p>${config.confirmBodyPrefix}</p>
  <p>We received your application for the role <strong>${application.ApplyFor || application.tital}</strong>.</p>
  <ul>
    <li><strong>Name:</strong> ${application.name}</li>
    <li><strong>Mobile:</strong> ${application.mobile}</li>
    <li><strong>Email:</strong> ${application.mail}</li>
    <li><strong>Experience:</strong> ${application.experince}</li>
  </ul>
  <p>We will review your application and be in touch soon.</p>
  <p>— AshbitSoft Team</p>`;

  MailApp.sendEmail({
    to: application.mail,
    subject: config.confirmSubject,
    htmlBody: body,
    replyTo: config.hrEmail,
  });
}
