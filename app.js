
const tableHeroes = document.querySelector('#table-heroes')
const tableVillains = document.querySelector('#table-villains')

const getHeroes = async() => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/heroes/', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1OTg2MjE3LCJpYXQiOjE2NzU5ODQ4OTUsImp0aSI6ImVlMWE5Njk3ZmE2ZDQ2ODJhOGY5Njg3NzA3MTkxNjg4IiwidXNlcl9pZCI6MX0.c-fMTuPRSgI01rKt6_XzW5AC6q0rEJP_7Jsr4uWVsKE'
      }
    });
    const data = await response.json()
    printHeroes(data)
  } catch (error) {
    console.log(error)
  }
}

const printHeroes = (data) => {
  tableHeroes.innerHTML = ''

  data.forEach(data => {
    tableHeroes.innerHTML += 
    `
      <td>${data.name}</td>
      <td>${data.alias}</td>
    `
  })
}


const getVillains = async() => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/villains/', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1OTg2MjE3LCJpYXQiOjE2NzU5ODQ4OTUsImp0aSI6ImVlMWE5Njk3ZmE2ZDQ2ODJhOGY5Njg3NzA3MTkxNjg4IiwidXNlcl9pZCI6MX0.c-fMTuPRSgI01rKt6_XzW5AC6q0rEJP_7Jsr4uWVsKE'
      }
    })
    const data = await response.json()
    printVillains(data)
  } catch (error) {
    console.log(error)
  }
}

const printVillains = (data) => {
  tableVillains.innerHTML = ''

  data.forEach(villain => {
    tableVillains.innerHTML += 
    `
      <td>${villain.name}</td>
      <td>${villain.alias}</td>
    `
  })
}

getHeroes()
getVillains()


