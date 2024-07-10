import DataBaseService from "@/infra/DataBaseService";
import { hashPassword } from "@/infra/helpers/SecurityHelper";

export default class CreatePatientUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute(name: string, phone: string, password: string) {
    // vereficar se a paciente já existe.
    const patient = await this.database.getPatientByPhone(phone);

    if (patient) {
      throw new Error("Patient already exists with this phone");
    }

    // gera um hash de seguro para senha ser aemazenada no banco de dados
    const hashedPassword = hashPassword(password);

    // adiciona um novo usuário com novo telefone
    const user = await this.database.createUser(phone, hashedPassword);

    // adidiona o paciente com o nome, telefone e id do usuario criado
    const newPatient = await this.database.createPatient(name, phone, user.id);

    // retorna o paciente criado
    return newPatient;
  }
}
