import { categories } from "../Models/categories";

interface FilterExpenseProps {
    selectedItem : (e : string) => void;
}


const FilterExpense = ({selectedItem} : FilterExpenseProps) => {
  return (
    <div>
        <select className="form-select" onChange={(e) => selectedItem(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(category => <option value={category} key={category}>{category}</option>)}
        </select>
    </div>
  )
}

export default FilterExpense