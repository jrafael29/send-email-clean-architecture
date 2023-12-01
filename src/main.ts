import ClientEntity from '../src/core/entity/client'
import SendEmailUseCase from './core/usecase/sendEmail/SendEmailUseCase';
import NodeMailerGateway from './infra/gateway/mailer/NodeMailerGateway';
import ConvertCsvToJsonUseCase from './core/usecase/convert/ConvertCsvToObjectUseCase';
import INodemailerTransporterPayload from './core/interface/gateway/mailer/INodemailerTransporterPayload';

const nodemailerConstructorPayload: INodemailerTransporterPayload = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'jrafael5758@gmail.com',
        pass: 'uvkx rinc lzit kcid '
    }
}
const csv: string = `nome,email,telefone
Laura Gomes,laura-gomes@tuamaeaquelaursa.com,81994760417`

function main(){
    
    const nodemailerGatewayService: NodeMailerGateway = new NodeMailerGateway(nodemailerConstructorPayload)
    const convertCsvToJsonUseCase: ConvertCsvToJsonUseCase = new ConvertCsvToJsonUseCase()
    const clientsArray: Array<any> = convertCsvToJsonUseCase.perform(csv);

    clientsArray.forEach( async function({nome, email, telefone}, index){
        const client = new ClientEntity({
            id: index,
            email,
            nome,
            telefone
        });
        
        const sendEmailUsecase: SendEmailUseCase = new SendEmailUseCase(client, nodemailerGatewayService)
        const resultSendEmail = await sendEmailUsecase.perform({
            from: "Anony",
            subject: `Olá, ${nome}!!!`,
            html: `<div style="background-color: #f0f; padding: 10px;"> <strong> PAGUE-ME JÁ </strong>  </div>`
        })

        if(resultSendEmail){
            console.log("envio do email OK");
        }else{
            console.log("envio do email NOT OK");
        }
    } )
}

export {main} 