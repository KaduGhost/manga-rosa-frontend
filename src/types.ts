export interface IHired {
    _id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    knowledges: string[];
}

export type IHiredPreview = Omit<IHired, "_id">;

export interface IHiredRegister extends IHiredPreview {
    cpfValid: boolean;
}
