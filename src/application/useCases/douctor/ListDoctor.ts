import DataBaseService from "@/infra/DataBaseService";

export default class ListDoctorUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute() {
    const doctors = await this.database.listDoctor();

    if (!doctors) {
      throw new Error("No doctors found");
    }

    return doctors;
  }
}
