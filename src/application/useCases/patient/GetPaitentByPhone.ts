import DataBaseService from "@/infra/DataBaseService";
import { NotFoundError } from "@/infra/helpers/Erros";

export default class GetPatientByPhoneUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute(phone: string) {
    const INCLUDE_APPOINTMENT = true;
    const INCLUDE_DOCTOR = true;
    const patient = await this.database.getPatientByPhone(
      phone,
      INCLUDE_APPOINTMENT,
      INCLUDE_DOCTOR
    );

    if (!patient) {
      throw new NotFoundError("No Patient found");
    }
    return patient;
  }
}
