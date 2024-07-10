import DataBaseService from "@/infra/DataBaseService";
import { NotFoundError } from "@/infra/helpers/Erros";

export default class GetDoctorByIdUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute(id: number) {
    const INCLUDE_SCHEDULE = true;

    const doctor = await this.database.getDoctorById(id, INCLUDE_SCHEDULE);

    if (!doctor) {
      throw new NotFoundError("No doctor found");
    }
    return doctor;
  }
}
