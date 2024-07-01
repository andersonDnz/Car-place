export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': 'd64c24e974msh1b540dd739731cfp17cf45jsn5d6be5acb5e1',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}