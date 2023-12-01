declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SMTP_GMAIL_HOST: string;
        SMTP_GMAIL_PORT: string;
        SMTP_GMAIL_USER: string;
        SMTP_GMAIL_PASS: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}