// let totalDuration= [];

// function populateTotalDuration() {
//   // reduce transaction amounts to a single total value
//   const total = totalDuration.reduce((total, ) => {
//     return total + parseInt(t.value);
//   }, 0);

//   const totalEl = document.querySelector("#total");
//   totalEl.textContent = total;
// }



const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    var total = 0
      for (let i = 0; i < json[json.length - 1].exercises.length; i++) {
           total += json[json.length - 1].exercises[i].duration; 
          }
      json[json.length - 1].totalDuration = total;
    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
