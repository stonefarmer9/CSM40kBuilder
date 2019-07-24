function addUnit(){
  const roster = document.getElementById("armyRoster");
  const list = document.createElement("li");
  list.appendChild(document.createTextNode("Chaos Space Marines"));
  roster.appendChild(list)
}
