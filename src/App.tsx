import { useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardActionArea, CardContent, Typography, Checkbox, Button, Modal, Box } from '@mui/material';
import Snacks from './assets/Snacks.png';
import Drinks from './assets/Drinks.png';
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [foodType, setFoodType] = useState("")
  const [selectedMenu, setSelectedMenu] = useState<{ id: number, name: string, category: string, ingredients: { id: number, quantity: number }[] }[]>([])
  const [selectedItemPlot, setSelectedItemPlot] = useState([])
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [chipsAndSnacks, setChipsAndSnacks] = useState(false)
  const [carEmissionCalulation, setCarEmissionCalulation] = useState()

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const ingredients = {
    "ingredients": [
      {
        "id": 1,
        "Ingredient": "Chickpea",
        "CO2_emission_per_kg": 0.9
      },
      {
        "id": 2,
        "Ingredient": "Avocado",
        "CO2_emission_per_kg": 2.5
      },
      {
        "id": 3,
        "Ingredient": "Cucumber",
        "CO2_emission_per_kg": 0.1
      },
      {
        "id": 4,
        "Ingredient": "Cherry Tomatoes",
        "CO2_emission_per_kg": 2.1
      },
      {
        "id": 5,
        "Ingredient": "Olive Oil",
        "CO2_emission_per_kg": 6
      },
      {
        "id": 6,
        "Ingredient": "Pasta",
        "CO2_emission_per_kg": 1.8
      },
      {
        "id": 7,
        "Ingredient": "Tomatoes",
        "CO2_emission_per_kg": 2.1
      },
      {
        "id": 8,
        "Ingredient": "Onion",
        "CO2_emission_per_kg": 0.5
      },
      {
        "id": 9,
        "Ingredient": "Basil Leaves",
        "CO2_emission_per_kg": 0.2
      },
      {
        "id": 10,
        "Ingredient": "Bell Peppers",
        "CO2_emission_per_kg": 3
      },
      {
        "id": 11,
        "Ingredient": "Spinach",
        "CO2_emission_per_kg": 2
      },
      {
        "id": 12,
        "Ingredient": "Feta Cheese",
        "CO2_emission_per_kg": 8.5
      },
      {
        "id": 13,
        "Ingredient": "Garlic",
        "CO2_emission_per_kg": 1.5
      },
      {
        "id": 14,
        "Ingredient": "Mushrooms",
        "CO2_emission_per_kg": 1.1
      },
      {
        "id": 15,
        "Ingredient": "Mozzarella Cheese",
        "CO2_emission_per_kg": 9.8
      },
      {
        "id": 16,
        "Ingredient": "Flour Tortillas",
        "CO2_emission_per_kg": 1.9
      },
      {
        "id": 17,
        "Ingredient": "Chicken Breasts",
        "CO2_emission_per_kg": 6.9
      },
      {
        "id": 18,
        "Ingredient": "Quinoa",
        "CO2_emission_per_kg": 1.5
      },
      {
        "id": 19,
        "Ingredient": "Lemon",
        "CO2_emission_per_kg": 0.3
      },
      {
        "id": 20,
        "Ingredient": "Salmon Fillets",
        "CO2_emission_per_kg": 7
      },
      {
        "id": 21,
        "Ingredient": "Green Beans",
        "CO2_emission_per_kg": 0.5
      },
      {
        "id": 22,
        "Ingredient": "Honey",
        "CO2_emission_per_kg": 2
      },
      {
        "id": 23,
        "Ingredient": "Dijon Mustard",
        "CO2_emission_per_kg": 1
      }
    ]
  }

  const data = {
    "recipes": [
      {
        "id": 1,
        "name": "Avocado & Chickpea Salad",
        "category": "Vegan",
        "ingredients": [
          { "id": 1, "quantity": 120 },
          { "id": 2, "quantity": 75 },
          { "id": 3, "quantity": 75 },
          { "id": 4, "quantity": 75 },
          { "id": 5, "quantity": 13.5 }
        ]
      },
      {
        "id": 2,
        "name": "Pasta with Tomato and Basil",
        "category": "Vegan",
        "ingredients": [
          { "id": 6, "quantity": 100 },
          { "id": 7, "quantity": 100 },
          { "id": 8, "quantity": 50 },
          { "id": 5, "quantity": 13.5 },
          { "id": 9, "quantity": 5 }
        ]
      },
      {
        "id": 3,
        "name": "Mushroom & Mozzarella Quesadilla",
        "category": "Vegetarian",
        "ingredients": [
          { "id": 14, "quantity": 100 },
          { "id": 15, "quantity": 50 },
          { "id": 16, "quantity": 100 },
          { "id": 5, "quantity": 13.5 },
          { "id": 8, "quantity": 50 }
        ]
      },
      {
        "id": 4,
        "name": "Spinach & Feta Stuffed Peppers",
        "category": "Vegetarian",
        "ingredients": [
          { "id": 10, "quantity": 150 },
          { "id": 11, "quantity": 50 },
          { "id": 12, "quantity": 50 },
          { "id": 5, "quantity": 13.5 },
          { "id": 13, "quantity": 5 }
        ]
      },
      {
        "id": 5,
        "name": "Grilled Chicken with Quinoa and Veggies",
        "category": "Non-Vegetarian",
        "ingredients": [
          { "id": 17, "quantity": 150 },
          { "id": 18, "quantity": 75 },
          { "id": 10, "quantity": 75 },
          { "id": 5, "quantity": 13.5 },
          { "id": 19, "quantity": 120 }
        ]
      },
      {
        "id": 6,
        "name": "Honey Mustard Glazed Salmon with Green Beans",
        "category": "Non-Vegetarian",
        "ingredients": [
          { "id": 20, "quantity": 150 },
          { "id": 21, "quantity": 100 },
          { "id": 22, "quantity": 30 },
          { "id": 23, "quantity": 15 },
          { "id": 5, "quantity": 13.5 }
        ]
      }
    ]
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getChartData = (recipeId: number) => {
    const recipe = data.recipes.find((item) => item.id === recipeId);
    if (recipe) {
      const chartData = recipe.ingredients.map((ingredient) => {
        const ing = ingredients.ingredients.find((ing) => ing.id === ingredient.id);
        if (ing) {
          // Convert quantity from grams to kilograms
          const quantityInKg = ingredient.quantity / 1000;
          // Calculate CO2 emission based on quantity
          const co2Emission = quantityInKg * ing.CO2_emission_per_kg;

          return {
            id: ingredient.id,
            value: co2Emission,
            label: ing.Ingredient,
          };
        }
        return null;
      });
      return chartData.filter(Boolean);
    }
    return [];
  };


  interface FoodItem {
    value: number;
  }

  function calculateDrivingEquivalent(foodItems: FoodItem[]): string[] {
    // Define the CO₂ emission rate for a regular petrol car (in kg per km)
    const carEmissionRate: number = 0.15; // 150 grams per km converted to kg

    // Calculate the equivalent driving distance for each food item
    return foodItems.map((item: FoodItem) => {
      const distanceEquivalent: number = item.value / carEmissionRate;
      return distanceEquivalent.toFixed(2);
    });
  }


  const collectData = (recipeId: number) => {
    setSelectedCard(recipeId);
    const temp = getChartData(recipeId);
    const sumOfCo2 = temp.reduce((accumulator, item) => accumulator + item?.value, 0);
    setSelectedItemPlot(temp);
    console.log(temp, "selectedItemPlot");
    const mealTemp = []
    data.recipes.map((item) => {
      if (item.id === recipeId) {
        mealTemp.push(item)
      }
    })
    setSelectedMenu(mealTemp)
    const drivingEquivalent = calculateDrivingEquivalent(selectedItemPlot)
    const sum = drivingEquivalent.reduce((partialSum, a) => partialSum + Number(a), 0).toFixed(2);
    setCarEmissionCalulation({ totalCo2Emission: sumOfCo2, drivingEquivalent: sum })
  }

  const foodTypeSelection = (foodType: string) => {
    if (foodType !== "Chips") {
      setFoodType(foodType);
      setSelectedItemPlot([])
      setSelectedCard(null)
      // setChipsAndSnacks(false)
    } else {
      setChipsAndSnacks(true)
    }
  }




  return (
    <>
      <div className='container'>
        <h1>Order Food</h1>
        <div className='food-type-container'>
          <div className='card' onClick={() => foodTypeSelection("Vegetarian")}>
            <h2>Veg</h2>

          </div>
          <div className='card' onClick={() => foodTypeSelection("Non-Vegetarian")}>
            <h2>Non Veg</h2>

          </div>
          <div className='card' onClick={() => foodTypeSelection("Vegan")}>
            <h2>Vegan</h2>

          </div>
        </div>
        {foodType && foodType !== "Chips" && <div className='food-type-menu'>
          {data.recipes.map((item) => {
            if (item.category === foodType) {
              return (
                <Card variant="outlined" sx={{ maxWidth: 600, minWidth: 600 }}>
                  <CardActionArea onClick={() => collectData(item.id)}>
                    <CardContent>
                      <div className='mealCheckbox'>
                        {/* {selectedCard === item.id && ( */}
                        <div>
                          <Checkbox checked={selectedCard === item.id ? true : false} />

                        </div>
                        {/* )} */}
                      </div>

                      <Typography variant="h4" component="div">
                        {item.name}
                      </Typography>

                      <ul>
                        {item.ingredients.map((ingredient) => {
                          return ingredients.ingredients.map((ing) => {
                            if (ingredient.id === ing.id) {
                              return (
                                <li>{ing.Ingredient} - {ingredient.quantity}g</li>
                              )
                            }
                          })
                        })}
                      </ul>
                    </CardContent>
                  </CardActionArea>

                </Card>
              )
            }
          })}
        </div>}
        <div className='plotContainer'>
          {
            selectedItemPlot && selectedItemPlot.length > 0 && <PieChart
              series={[
                {
                  data: selectedItemPlot,
                  highlightScope: { fade: 'global', highlight: 'item' }
                },
              ]}
              width={600}
              height={200}
            />
          }
        </div>
        <>
          <div className='food-type-container'>
            <div className='card' onClick={() => foodTypeSelection("Chips")}>
              <h2>Chips and Drinks</h2>
            </div>
          </div>
          {chipsAndSnacks && <div className='imageContainer'>
            <img src={Snacks} alt='snacks' width={500} height={400} />
            <img src={Drinks} alt='drinks' width={500} height={400} />
          </div>}
        </>

        <div className='completeButton'>
          <Button className='continueButton' variant="contained" onClick={handleOpen}>Complete</Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='orderContainer'>
              <h2>Order Summary</h2>
              <div>
                {selectedMenu.map((item) => {
                  return (
                    <Card variant="outlined" sx={{ maxWidth: 600, minWidth: 600 }}>
                      <CardContent>
                        <Typography variant="h4" component="div">
                          {item?.name}
                          {carEmissionCalulation?.totalCo2Emission && <p>Total CO2 Emission: {carEmissionCalulation?.totalCo2Emission.toFixed(2)} kg</p>}
                          {carEmissionCalulation?.drivingEquivalent && <p>Driving Equivalent: {carEmissionCalulation?.drivingEquivalent} km</p>}
                        </Typography>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </Box>
        </Modal>

      </div >
    </>
  )
}

export default App
