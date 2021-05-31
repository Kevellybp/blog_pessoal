import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem {
    private id: number
    private titulo: string
    private texto: string
    public date: Date
    public usuario: User
    public tema: Tema
}