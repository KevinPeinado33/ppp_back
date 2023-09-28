import { CompanyEntity } from "../../data/entities";

export abstract class CompanyRepositroy {

    abstract save(saveCompany: CompanyEntity): Promise< CompanyEntity >
    abstract create(createCompany: CompanyEntity): Promise< CompanyEntity >
    abstract getCompaniesByidPPP(idPPP: string): Promise< CompanyEntity[] >

}