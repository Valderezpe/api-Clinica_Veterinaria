import DataBaseService from "@/infra/DataBaseService";

export default class GetDoctorByIdUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute(id: number) {
    const INCLUDE_SCHEDULE = true;
    const doctor = await this.database.getDoctorById(id, INCLUDE_SCHEDULE);

    if (!doctor) {
      throw new Error("No doctor found");
    }
    return doctor;
  }
}
