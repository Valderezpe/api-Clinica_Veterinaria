import PatientController from "@/application/controller/PatientController";
import CreateAppointmentUseCase from "@/application/useCases/patient/CreateAppointment";
import CreatePatientUseCase from "@/application/useCases/patient/CreatePatient";
import GetPatientByPhoneUseCase from "@/application/useCases/patient/GetPaitentByPhone";
import { database } from "@/infra/DataBaseService";
import { Request, Response } from "express";

export default class PatientControllerImpl implements PatientController {
  async createPatient(req: Request, res: Response) {
    const { name, phone, password } = req.body;
    const useCase = new CreatePatientUseCase(database);
    const patient = await useCase.execute(name, phone, password);

    res.status(201).json(patient);
  }
  async createAppointment(req: Request, res: Response) {
    const { scheduleId } = req.body;
    const { patientId } = req.params;
    const useCase = new CreateAppointmentUseCase(database);
    const appointment = await useCase.execute(
      Number(patientId),
      Number(scheduleId)
    );

    res.status(201).json(appointment);
  }

  async getPatientByPhone(req: Request, res: Response) {
    const { phone } = req.params;
    const useCase = new GetPatientByPhoneUseCase(database);
    const patient = await useCase.execute(phone);

    res.status(200).json(patient);
  }
}
