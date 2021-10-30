export interface IHired {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone?: string;
    valid: boolean;
    dateValidate: number;
    knowledges: string[];
}

export type IHiredPreview = Omit<IHired, "id">;
export type IHiredRemovedDateValidate = Omit<IHiredPreview, "dateValidate">

export interface IHiredRegister extends IHiredRemovedDateValidate {
    cpfValid: boolean;
}
