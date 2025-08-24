import { number, string } from "zod"
export { ProductRepository } from "../database/types/product-repository";

type ProductRepository = {
id: number
name: string
price:number
created_at: number
update_at: number

}