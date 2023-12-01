import IMailer from "../../interface/gateway/mailer/IMailer";
import ConvertCsvToObjectUseCase from "../convert/ConvertCsvToObjectUseCase";
import SendEmailUseCase from "./SendEmailUseCase";
import ClientEntity from "../../entity/client";
export default class SendEmailToClientsInCsvUseCase {

    constructor(private mailerService: IMailer){}

    async perform(csv: string): Promise<void>{
        const convertCsvToObjectUseCase: ConvertCsvToObjectUseCase = new ConvertCsvToObjectUseCase()
        const clientsArray: Array<any> = convertCsvToObjectUseCase.perform(csv)
        clientsArray.forEach(async (clientData: {nome: string, email: string, telefone: string}, index: number) => {
            const clientEntity = new ClientEntity({
                id: index,
                email: clientData.email,
                nome: clientData.nome,
                telefone: clientData.telefone
            });
            const sendEmailUsecase: SendEmailUseCase = new SendEmailUseCase(clientEntity, this.mailerService)
            const resultSendEmail = await sendEmailUsecase.perform({
                from: "Anony",
                subject: `Olá, ${clientEntity.nome}!!!`,
                html: `<div style="background-color: #00f; padding: 10px;"> <strong> PAGUE-ME JÁ </strong>  </div>`
            })
            if(resultSendEmail){
                console.log("email enviado");
            }else{
                console.log("email NÃO enviado");
            }
        })
    }

}