
type EmailData = {
  subject: string;
  bodyHtml: string;
  bodyText: string;
};

function isExtensionContextValid(): boolean {
  try {
    return chrome.runtime?.id !== undefined;
  } catch {
    return false;
  }
}

function getComposeEmailData(): EmailData {
    // make this more accurate
    
    const subjectInput = document.querySelector<HTMLInputElement>(
        'input[name="subjectbox"]',
    );
    const bodyInput = document.querySelector<HTMLTextAreaElement>(
        'textarea[name="body"]',
    );
    return {
        subject: subjectInput?.value || '',
        bodyHtml: bodyInput?.value || '',
        bodyText: bodyInput?.value || '',
    };
}