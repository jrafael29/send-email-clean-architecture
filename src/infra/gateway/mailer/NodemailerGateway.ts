import IMailerPayload from "../../../core/interface/gateway/mailer/IMailerPayload";
import IMailer from "../../../core/interface/gateway/mailer/IMailer";
import { Transporter, createTransport } from 'nodemailer';

export default class NodemailerGateway implements IMailer {
    #transporter: Transporter
    constructor(){
        this.#transporter = createTransport({
            host: process.env.SMTP_GMAIL_HOST,
            port: +process.env.SMTP_GMAIL_PORT,
            secure: false, 
            auth: {
                user: process.env.SMTP_GMAIL_USER,
                pass: process.env.SMTP_GMAIL_PASS 
            }
        })
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