import {z} from "zod";

export const FormValidationSchema = z.object({
    name: z.string({required_error: "Name is required"}),
    email: z.string({required_error: 'Email is required'}).email(),
    message: z.string({required_error: "this field is required"})
})