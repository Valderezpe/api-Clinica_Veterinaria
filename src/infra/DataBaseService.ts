import { PrismaClient } from "@prisma/client";

export default class DataBaseService {
  constructor(readonly connection: PrismaClient) {}
  listDoctor() {
    return this.connection.doctor.findMany({
      include: {
        schedule: true,
      },
    });
  }

  getDoctorById(id: number, includeSchedule: boolean = false) {
    return this.connection.doctor.findUnique({
      where: { id },
      include: {
        schedule: includeSchedule,
      },
    });
  }

  getPatientByPhone(phone: string, includeAppointment: boolean = false) {
    return this.connection.patient.findUnique({
      where: { phone },
      include: {
        appointment: includeAppointment,
      },
    });
  }

  createUser(phone: string, password: string) {
    return this.connection.user.create({
      data: {
        phone: phone,
        passwords: password,
      },
    });
  }

  createPatient(name: string, phone: string, userId: number) {
    return this.connection.patient.create({
      data: {
        name,
        phone,
        userId,
      },
    });
  }

  getPatientById(id: number) {
    return this.connection.patient.findUnique({
      where: { id },
    });
  }
  getScheduleById(id: number) {
    return this.connection.schedule.findUnique({
      where: { id },
    });
  }
  updateSchedule(id: number, data: { available: boolean }) {
    return this.connection.schedule.update({
      where: { id },
      data,
    });
  }

  createAppointment(patientId: number, doctorId: number, date: Date) {
    return this.connection.appointment.create({
      data: {
        patientId,
        doctorId,
        date,
      },
    });
  }
}

export const database = new DataBaseService(new PrismaClient());
