import IMailer from '../../../core/interface/gateway/mailer/IMailer';
import IMailerPayload from '../../../core/interface/gateway/mailer/IMailerPayload';

export default class AmazonSesGateway implements IMailer {
    async sendEmail(data: IMailerPayload): Promise<boolean> {
        console.log("o email foi enviado com amazon ses:", data);
        return false
    }
}