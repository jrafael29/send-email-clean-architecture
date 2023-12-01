import fs from 'node:fs'
import process  from 'node:process';
import NodeMailerGateway from './infra/gateway/mailer/NodemailerGateway';
import SendEmailToClientsInCsvUseCase from './core/usecase/sendEmail/SendEmailToClientsInCsvUseCase';
import AmazonSesGateway from './infra/gateway/mailer/AmazonSesGateway';

async function main(){
    //  lê o arquivo .csv apartir do diretorio raiz da aplicação.
    const rootPath = process.cwd();
    const csv = fs.readFileSync(`${rootPath}/example.csv`).toString()

    const nodemailerGatewayService: NodeMailerGateway = new NodeMailerGateway()
    const amazonSesGateway = new AmazonSesGateway();
    /* 
        Exemplo pratico do L do SOLID - Liskov Substitution Principle:
        Passe como argumento a implementação do nodemailer
        ou a implementação do amazon SES
        ambos irão funcionar, mesmo que apenas o nodemailer esteja implementado.
    */
    const sendEmailToClientsInCsvUseCase = new SendEmailToClientsInCsvUseCase(nodemailerGatewayService)
    await sendEmailToClientsInCsvUseCase.perform(csv)
}

export {main} 