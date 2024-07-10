import DataBaseService from "@/infra/DataBaseService";

export default class CreateAppointmentUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute(patientId: number, scheduleId: number) {
    // verificar se o paciente existe com o id  passado.
    const patient = await this.database.getPatientById(patientId);

    if (!patient) {
      throw new Error("Paciente não encontrado!");
    }

    // verificar se a  agenda existe com o id passado e está disponivel.
    const schedule = await this.database.getScheduleById(scheduleId);

    if (!schedule?.available) {
      throw new Error("Agenda não estar disponível nessa data!");
    }

    await this.database.updateSchedule(schedule.id, { available: false });

    // cria um novo  agendamento para o  paciente com o id passado e a  agenda com id passado
    const appointment = await this.database.createAppointment(
      patient.id,
      schedule.doctorId,
      schedule.date
    );

    // retorno o agendamento criado
    return appointment;
  }
}
