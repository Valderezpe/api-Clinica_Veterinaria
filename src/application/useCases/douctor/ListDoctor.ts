import DataBaseService from "@/infra/DataBaseService";
import { NotFoundError } from "@/infra/helpers/Erros";

export default class ListDoctorUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute() {
    const doctors = await this.database.listDoctor();

    if (!doctors) {
      throw new NotFoundError("No doctors found");
    }

    return doctors;
  }
}
