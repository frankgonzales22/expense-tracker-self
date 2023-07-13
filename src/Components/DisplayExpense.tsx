

interface items {
    id: number,
    description: string,
    amount: number,
    category: string
}


interface DisplayExpenseProps {
    item: items[],
    onRemove : (id : number) => void
}

export const DisplayExpense = ({ item, onRemove }: DisplayExpenseProps) => {
    if (item.length < 1) return null;
    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {item.map(item =>  <tr key={item.id}>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td>
                                <button 
                                className="btn btn-outline-danger"
                                onClick={() => onRemove(item.id)}
                                >Remove</button>
                            </td>
                        </tr>
                    )}

                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <td>&#8369; {item.reduce((acc, item) => item.amount + acc, 0).toFixed(2)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
