class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStrength :"",
      isWeights : "",
      availableTime : 0,
      monslot: "",
      tueslot: "",
      wedslot: "",
      thuslot: "",
      frislot: "",
      satslot: "",
      sunslot: "",
      workout: ""
    }
   this.generate = this.generate.bind(this)
  } 

  generate(){  

    let exercises = {
      "Cardio": { 
        "Weighted":{
          Push: {
            Chest:[],
            Tricep:[],
            Delt: []
          },
          Pull: {
            Back:[],
            Bicep:[]
          },
          Legs: {
            Quad:[],
            Calf:[],
            Hamstring:[],
          },
          Abs: {
            Ab:[],
            Oblique:[],
            Rotation:[]
          }
          },
        "UnWeighted":{
          Push: {
            Chest:[],
            Tricep:[],
            Delt: []
          },
          Pull: {
            Back:[],
            Bicep:[]
          },
          Legs: {
            Quad:[],
            Calf:[],
            Hamstring:[],
          },
          Abs: {
            Ab:[],
            Oblique:[],
            Rotation:[]
          }
          }
      },
      "Strength": {
        "Weighted":{
          Push: {
            Chest:["Weighted Bench", "Incline Bench"],
            Delt: ["Shoulder Press", "Rear Delt Flys", "Lateral Raises"],
            Tricep:["Weighted Skullcrushers"]
          },
          Pull: {
            Back:["Weighted Pull Up", "Weighted Chin Up", "Pentlay Row", "Bent Over Row"],
            Bicep:["Bicep Curl", "DB Curl", "Preacher curl"]
          },
          Legs: {
            Quad:["Squat", "Pause Squat", "ATG Squat"],
            Calf:["Calf Raises"],
            Hamstring:["Deadlifts", "Lunges"],
          },
          Abs: {
            Ab:["Leg Raises", "Front Lever Raises", "Deadbugs","Crunches"],
            Oblique:["SidePlank", "Russian Twist", "Lateral Crunches"],
            Rotation:["Rotating Sit Ups", "Hitting Tyres", "Medball Sidetoss"]
          }
            },
            "UnWeighted":{
              Push: {
                Chest:["Push Ups", "Straight Bar Dips"],
                Delt: ["HSPU", "Pike Push ups"],
                Tricep:["Skullcrushers", "Dips"]
              },
              Pull: {
                Back:["Pull Up", "Chin Up", "Pause Chin Up", "Australian Pull up"],
                Bicep:["Bicep Row", "Close Grip Chin Up"]
              },
              Legs: {
                Quad:["Squat", "Pause Squat", "ATG Squat"],
                Calf:["Calf Raises"],
                Hamstring:["Bridges", "Lunges"],
              },
              Abs: {
                Ab:["Leg Raises", "Front Lever Raises", "Deadbugs","Crunches"],
                Oblique:["SidePlank", "Russian Twist", "Lateral Crunches"],
                Rotation:["Rotating Sit Ups", "Hitting Tyres", "Medball Sidetoss"]
              }
                }
      }
  }

    if(document.getElementById("strength").checked){
      this.setState({
        isStrength: "Strength"
      })
    }
    if(document.getElementById("cardio").checked){
      this.setState({
        isStrength: "Cardio"
      })
    }

    if(document.getElementById("weighted").checked){
      this.setState({
        isWeights: "Weighted"
      })
    }
    if(document.getElementById("unweighted").checked){
      this.setState({
        isWeights: "UnWeighted"
      })
    }

    if(document.getElementById("mon").checked){
      this.setState({
        monslot: ["Monday"]
      })
    }
    else {
      this.setState({
        monslot: ""
      })
    }
    if(document.getElementById("tue").checked){
      this.setState({
        tueslot: ["Tuesday"]
      })
    }
    else {
      this.setState({
        tueslot: ""
      })
    }
    if(document.getElementById("wed").checked){
      this.setState({
        wedslot: ["Wednesday"]
      })
    }
    else {
      this.setState({
        wedslot: ""
      })
    }
    if(document.getElementById("thu").checked){
      this.setState({
        thuslot: ["Thursday"]
      })
    }
    else {
      this.setState({
        thuslot: ""
      })
    }
    if(document.getElementById("fri").checked){
      this.setState({
        frislot: ["Friday"]
      })
    }
    else {
      this.setState({
        frislot: ""
      })
    }
    if(document.getElementById("sat").checked){
      this.setState({
        satslot: ["Saturday"]
      })
    }
    else {
      this.setState({
        satslot: ""
      })
    }
    if(document.getElementById("sun").checked){
      this.setState({
        sunslot: ["Sunday"]
      })
    } 
    else {
      this.setState({
        sunslot: ""
      })
    }
 
    if(document.getElementById("30mins").checked){
      this.setState({
        availableTime: 30
      })
    } 
    if(document.getElementById("45mins").checked){
      this.setState({
        availableTime: 45
      })
    } 
    if(document.getElementById("60mins").checked){
      this.setState({
        availableTime: 60
      })
    } 
    if(document.getElementById("75mins").checked){
      this.setState({
        availableTime: 75
      })
    } 

    
    let numberOfUnfilledDays = 
    this.state.monslot.length+
    this.state.tueslot.length+
    this.state.wedslot.length+
    this.state.thuslot.length+
    this.state.frislot.length+
    this.state.satslot.length+
    this.state.sunslot.length

    let template = []

    if(numberOfUnfilledDays>0){

      for(let i = 0;i<numberOfUnfilledDays;i++){

        switch(this.state.availableTime){
          case 30:
          template.push([0,1]);
          break;
          case 45:
          template.push([0,1,2]);
          break;
          case 60:
          template.push([0,1,2,3]);
          break;
          case 75:
          template.push([0,1,2,3,4]);
          break;
        }
        }
    }

    this.setState({
      workout : template
    })
  } 


    

    render() {
        return (
          <div>
          <div>
<input type="radio" id="strength" value="isstrength" name="strengthorcardio"></input>Strength
<input type="radio" id="cardio" value="iscardio" name="strengthorcardio"></input>Cardio
          </div>
            <br></br>
            <div>
<input type="radio" id="weighted" value="isweighted" name="weight"></input>Weighted
<input type="radio" id="unweighted" value="isunweighted" name="weight"></input>Not Weighted
          </div>
            <br></br>
            <div>
<input type="checkbox" id="mon" value="ismon" name="days"></input>Monday
<input type="checkbox" id="tue" value="istue" name="days"></input>Tueday
<input type="checkbox" id="wed" value="iswed" name="days"></input>Wednesday
<input type="checkbox" id="thu" value="isthu" name="days"></input>Thursday
<input type="checkbox" id="fri" value="isfri" name="days"></input>Friday
<input type="checkbox" id="sat" value="issat" name="days"></input>Saturday
<input type="checkbox" id="sun" value="issun" name="days"></input>Sunday
          </div>
            <br></br>
            <div>
<input type="radio" id="30mins" value="is30mins" name="time"></input>30 mins
<input type="radio" id="45mins" value="is45mins" name="time"></input>45 mins
<input type="radio" id="60mins" value="is60mins" name="time"></input>60 mins
<input type="radio" id="75mins" value="is75mins" name="time"></input>75 mins
          </div>
            <br></br>
<button onClick={this.generate}>Generate!</button>   
            <br></br>
            <p>Strength: {`${this.state.isStrength}`}</p>
            <p>Weighted: {`${this.state.isWeights}`}</p>
            <p>Available Time: {`${this.state.availableTime}`}</p>
            <p>Workouts: {`${this.state.workout}`}</p>
            <div>
<div id="schedulecontainer">
<div id="monslot1"><p>{`${this.state.monslot}`}</p></div>
<div id="monslot2"></div>
<div id="monslot3"></div>
<div id="monslot4"></div>
<div id="monslot5"></div>
<div id="tueslot1"><p>{`${this.state.tueslot}`}</p></div>
<div id="tueslot2"></div>
<div id="tueslot3"></div>
<div id="tueslot4"></div>
<div id="tueslot5"></div>
<div id="wedslot1"><p>{`${this.state.wedslot}`}</p></div>
<div id="wedslot2"></div>
<div id="wedslot3"></div>
<div id="wedslot4"></div>
<div id="wedslot5"></div>
<div id="thuslot1"><p>{`${this.state.thuslot}`}</p></div>
<div id="thuslot2"></div>
<div id="thuslot3"></div>
<div id="thuslot4"></div>
<div id="thuslot5"></div>
<div id="frislot1"><p>{`${this.state.frislot}`}</p></div>
<div id="frislot2"></div>
<div id="frislot3"></div>
<div id="frislot4"></div>
<div id="frislot5"></div>
<div id="satslot1"><p>{`${this.state.satslot}`}</p></div>
<div id="satslot2"></div>
<div id="satslot3"></div>
<div id="satslot4"></div>
<div id="satslot5"></div>
<div id="sunslot1"><p>{`${this.state.sunslot}`}</p></div>
<div id="sunslot2"></div>
<div id="sunslot3"></div>
<div id="sunslot4"></div>
<div id="sunslot5"></div>
</div>
          </div>
          </div>
);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

