import { Injectable } from "@nestjs/common";
import { DataSource, Repository, Equal } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import { ResidentEntity } from "./entities/resident.entity";

@Injectable()
export class ResidentRepository extends Repository<ResidentEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(ResidentEntity, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<ResidentEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const resident = await this.findOne({ where: { id }, loadRelationIds: true });
        resolve(resident);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getAll(): Promise<ResidentEntity[]> {
    return await this.find({
      where: { deletedAt: null },
      relations: { apartment: true },
    });
  }

  async getByApartmentId(apartmentId: number): Promise<ResidentEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const resident = await this.findOne({
          where: {
            apartment: Equal(apartmentId),
          },
        });
        console.log("RESIDENT: ", resident);
        resolve(resident);
      } catch (error) {
        reject(error);
      }
    });
  }

  async createResident(newResident: ResidentEntity): Promise<ResidentEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const residentSaved = await this.save(newResident);
        resolve(residentSaved);
      } catch (error) {
        reject(error);
      }
    });
  }

  async removeResident(residentId: number): Promise<object> {
    return new Promise((resolve, reject) => {
      try {
        const resident = new ResidentEntity();
        resident.deletedAt = new Date();
        resident.apartment = null;

        const residentDeleted = this.update({ id: residentId }, resident);
        console.log(residentDeleted);
        if (residentDeleted) {
          console.log(residentDeleted);
          resolve({ code: 200, message: "Removido com sucesso" });
        }
      } catch (error) {
        reject({ code: error.code });
      }
    });
  }

  async updateResident(id: number, resident: ResidentEntity): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const { affected } = await this.update({ id }, resident);
        if (affected > 0) {
          resolve("Dados atualizados com sucesso");
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
