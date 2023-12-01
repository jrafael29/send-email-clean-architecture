import IMailerPayload from "./IMailerPayload"

export default interface IMailer {

    sendEmail(data: IMailerPayload): Promise<boolean>

}