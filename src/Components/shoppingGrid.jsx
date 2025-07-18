import { Card } from "./ShoppingCard"


const GROCERIES = [{
    image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +"
},{
  
    image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +" 
},{

    image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +"
},{
    
    image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +"
},{

    image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +"
},{
    image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +" 
},{
     image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +"
},{
     image: "Chips.jpg",
    description: "Lays chips",
    unit : "per unit",
    rupees: "Rs 20",
    Add : "Add +"
},]

export const ShoppingGrid = () => {

    return (
        <div className=" grid grid-cols-1 md:grid-cols-4">
            {GROCERIES.map(groceries => 
               <div>
                <Card
                 
                 image = {groceries.image}
                 description = {groceries.description}
                 unit = {groceries.unit}
                 rupees = {groceries.rupees}
                 Add = {groceries.Add}
                />
               </div>
            )}
        </div>
    )
}