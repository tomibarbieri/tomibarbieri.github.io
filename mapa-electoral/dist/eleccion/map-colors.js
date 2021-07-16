var colors = {
    0: "#e1ecf2",
    1: "#ccdfeb", 
    2: "#BDD7E7",
    3: "#6BAED6",
    4: "#3182BD",
    5: "#08519C",
    6: "#074687",
    7: "#00356b"
 }

function getMapColor(num) {
  return colors[Math.trunc(num)];  
}