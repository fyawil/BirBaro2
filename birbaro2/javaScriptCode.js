const Intro = () => { 
  return (
  <div>

    <h1>Bir Baro</h1>
    <h2>Xoog Dis</h2>
        <p>Kordi Intaad Qaadey Kartid</p>
        <button href="#form">Xoog Dis</button>
    <h2>Tamar Dhis</h2>
        <p>Kordhi Tamartaadha</p>
        <button href="#form">Tamar Dis</button>
    <h2>Xoog Iyo Tamar Dhis</h2>
        <p>Kordhi Xoogaadha Iyo Tamartaadha</p>
        <button href="#form">Xoog Iyo Tamar Dis</button>
  </div>
  )
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.generate = this.generate.bind(this)
    this.state = {plan: [""]}
  }

  generate() {
    var days = document.getElementById("days").value
      let daysOfTheWeek = {
      0: "Mon:",
      1: "Tue:",
      2: "Wed:",
      3: "Thu:",
      4: "Fri:",
      5: "Sat:",
      6: "Sun:"
};
      let exercises = {
      "Push":{"Weighted": ["Bench", "Military Press", "Incline Bench","Cardio"],"Nonweighted":["Dips","HSPU","PushUps","Cardio"]},
      "Pull":{"Weighted": ["Chin Ups", "Pull Ups", "Rows","Cardio"],"Nonweighted":["Chin Ups", "Pull Ups", "Rows","Cardio"]},
      "Legs":{"Weighted": ["Deadlift", "Squat", "Pause Squat","Cardio"],"Nonweighted":["Pistol Squat","Squat","Lunges","Cardio"]},
      "Core":{"Weighted": ["Front Lever", "Leg Raises", "Knee Raises","Cardio"],"Nonweighted":["Ab Wheel","Plank","Sit Ups","Cardio"]}
      }
      let bodyPartIndices = {
        0 : "Push",
        1 : "Pull",
        2 : "Legs",
        3 : "Core"
      };
      let workout = [];
      let bodyParts = 4;
      for(let i = 0; i < (days * 2)-1; i += 2){
      workout.push(daysOfTheWeek[i]);
      if(document.getElementById('weighted').checked){
        for(let j = i/2; j < bodyParts+(i/2); j++){
        if(j >= bodyParts){
        workout.push(exercises[bodyPartIndices[j-bodyParts]]["Weighted"][j-(i/2)])
        }
        else {
        workout.push(exercises[bodyPartIndices[j]]["Weighted"][j-(i/2)])
        }
        }
      }
      else {
        for(let j = i/2; j < bodyParts+(i/2); j++){
        if(j >= bodyParts){
        workout.push(exercises[bodyPartIndices[j-bodyParts]]["Nonweighted"][j-(i/2)])
        }
        else {
        workout.push(exercises[bodyPartIndices[j]]["Nonweighted"][j-(i/2)])
        }
        }
      }
      workout.push("*")
      } 

    this.setState({plan : workout.join(" ").split("*")});
}

    render() {

      return (
        <div id="form">

          <div id="q1">
          <h2 id="imasa">Imasa Maalmo Aad Waqti Xoog siina Kartaa? </h2>
          <input type="number" name="days" id="days" min="1" max="4"></input>
          </div>

          <div id="q2">
          <h2>Biro Oo Qaadid Maad Haysataa?</h2>
          <input type="radio" id="weighted" name="isweighted" value="true"></input>
          <label for="weighted">Haa</label>
          <input type="radio" id="nonweighted" name="isweighted" value="false"></input>
          <label for="nonweighted">Maya</label>
          </div>

          <button id="generatorbutton" onClick={this.generate}>Generate</button>

          <div id="schedule">
          <h1 id="day1">{this.state.plan[0]}</h1>
          <h1 id="day2">{this.state.plan[1]}</h1>
          <h1 id="day3">{this.state.plan[2]}</h1>
          <h1 id="day4">{this.state.plan[3]}</h1>
          </div>

        </div>
        )
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
          <div>
          <h1 id="title">BirBaro</h1>
          <Form />
          </div>
);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

