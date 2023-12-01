import IMailerPayload from "../../../core/interface/gateway/mailer/IMailerPayload";
import IMailer from "../../../core/interface/gateway/mailer/IMailer";
import INodemailerTransporterPayload from "../../../core/interface/gateway/mailer/INodemailerTransporterPayload";
import { Transporter, createTransport } from 'nodemailer';

export default class NodeMailerGateway implements IMailer {
    #transporter: Transporter
    constructor(data: INodemailerTransporterPayload){
        this.#transporter = createTransport(data)
    }
    async sendEmail(data: IMailerPayload): Promise<boolean>{
        try{
            await this.#transporter.sendMail({
                from: '"José Rafael 👻" <jrafael5758@gmail.com>',
                to: data.to,
                subject: data.subject,
                html: data.html,
            })
            return true
        }catch(error: any){
            console.log("ocorreu um erro ao enviar email: ", error.message);
            return false
        }
    }
}