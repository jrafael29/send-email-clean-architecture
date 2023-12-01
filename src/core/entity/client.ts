
interface IClient {
    id: number 
    nome: string
    email: string
    telefone: string
}

export default class Client implements IClient {

    id: number 
    nome: string
    email: string
    telefone: string

    constructor(data: IClient){
        this.id = data.id
        this.nome = data.nome 
        this.email = data.email;
        this.telefone = data.telefone
    }

    telefoneIsValid(): boolean{
        const isValid = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(this.telefone)
        if(isValid){
            return true
        }
        return false
    }

}

