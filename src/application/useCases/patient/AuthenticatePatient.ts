// import DataBaseService from "@/infra/DataBaseService";
// import { comparePassword } from "@/infra/helpers/SecurityHelper";

// export default class AuthenticatePaitentUseCase {
//     constructor(readonly database: DataBaseService){}

// async execute(phone: string, password: string){
// verificar se o paciente exist com o telefone passado
// const user = await this.database.getUserByPhone(phone);
//     if(!user){
//         throw new Error("Paciente não encontrado");
//     }
// Verificar se a semnha passada é igual a senha do paciente
// const isPasswordValid = comparePassword(password, user.password);
// retorna o token de autenticação
//  const payload={
//     user:{
//         id: user.id,
//         phone: user.phone
//     }
//  }
// converte payload para base64
//          return Buffer.from(JSON.stringify(payload)).toString();('base64');
//     }
// }
