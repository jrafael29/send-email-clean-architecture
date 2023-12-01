
import ClientEntity from "../../entity/client"
import IMailer from "../../interface/gateway/mailer/IMailer"
import IMailerPayload from "../../interface/gateway/mailer/IMailerPayload"

export default class SendEmail {
    #mailerService: IMailer
    #targetClient: ClientEntity

    constructor(targetClient: ClientEntity, mailerService: IMailer){
        this.#targetClient = targetClient
        this.#mailerService = mailerService
    }

    async perform(data: {
        from: string,
        subject: string
        html: string
    }): Promise<boolean>{
        const payload: IMailerPayload = {
            from: data.from,
            subject: data.subject,
            to: this.#targetClient.email,
            html: data.html
        }
        return await this.#mailerService.sendEmail(payload)
    }

}