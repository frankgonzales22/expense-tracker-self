import { categories } from '../Models/categories';
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    description: z.string().min(3, { message: 'Description should be atleast 3 characters.' }).max(50),
    amount: z.number({ invalid_type_error: 'Amount required.' }).min(0.01).max(100000),
    category: z.enum(categories, {
        errorMap: () => ({ message: 'category is requred' })
    })
})

interface FormExpenseProps {
    onSubmit: (data: ExpenseData) => void
}

type ExpenseData = z.infer<typeof schema>
const FormExpense = ({ onSubmit }: FormExpenseProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ExpenseData>({ resolver: zodResolver(schema) })

    return (
        <div className="container">
            {/* <form action="" onSubmit={handleSubmit(onSubmit)}> */}
            <form action="" onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
            })}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input {...register('description')} id="description" type="text" className="form-control" />
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input {...register('amount', { valueAsNumber: true })} id="amount" type="number" className="form-control" />
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select {...register('category')} id="category" className="form-select">
                        <option value="">All Categories</option>
                        {categories.map(category => <option value={category} key={category}>{category}</option>)}
                    </select>
                    {errors.category && <p className="text-danger">{errors.category.message}</p>}
                </div>

                <button className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default FormExpense