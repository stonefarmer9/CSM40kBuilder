
class Unit {
  constructor(name, pointsPerModel, role){
    this.name = name;
    this.pointsPerModel = pointsPerModel;
    this.role = role;
  }
}

let marine = new Unit("Chaos Space Marine", 13, "Troop")
let lord = new Unit("Chaos Lord", 65, "HQ")
let terminator = new Unit("Chaos Terminators", 28, "Elites")
let havoc = new Unit("Havocs", 14, "Heavy Support")
let raptor = new Unit("Raptors", 15, "Fast Attack")
let lordOfSkulls = new Unit("Lord of Skulls", 888, "Lord of War")

const unitList = [marine, lord, terminator, havoc, raptor, lordOfSkulls ]
console.log(unitList)

function addUnit(){
  const roster = document.getElementById("armyRoster");
  const list = document.createElement("li");
  list.appendChild(document.createTextNode("Chaos Space Marines"));
  roster.appendChild(list)
}

function listUnits(){
  unitList.forEach(function(unit){
      const list = document.getElementById("list");
      const newItem = document.createElement("li");
      list.appendChild(document.createTextNode(`${unit.name}\n${unit.pointsPerModel}\n${unit.role}`))
      list.appendChild(newItem)
    })
}

listUnits();
