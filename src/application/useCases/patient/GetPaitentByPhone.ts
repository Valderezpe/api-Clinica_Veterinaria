import DataBaseService from "@/infra/DataBaseService";

export default class GetPatientByPhoneUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute(phone: string) {
    const INCLUDE_APPOINTMENT = true;
    const patient = await this.database.getPatientByPhone(
      phone,
      INCLUDE_APPOINTMENT
    );

    if (!patient) {
      throw new Error("No Patient found");
    }
    return patient;
  }
}
