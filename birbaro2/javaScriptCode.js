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

   this.handleChangeStrength = this.handleChangeStrength.bind(this)
   this.handleChangeWeight = this.handleChangeWeight.bind(this)
   this.handleChangeMon = this.handleChangeMon.bind(this)
   this.handleChangeTue = this.handleChangeTue.bind(this)
   this.handleChangeWed = this.handleChangeWed.bind(this)
   this.handleChangeThu = this.handleChangeThu.bind(this)
   this.handleChangeFri = this.handleChangeFri.bind(this)
   this.handleChangeSat = this.handleChangeSat.bind(this)
   this.handleChangeSun = this.handleChangeSun.bind(this)
   this.handleChangeTime = this.handleChangeTime.bind(this)
   this.generate = this.generate.bind(this)
  } 

  handleChangeStrength(event){
    this.setState({
      isStrength: event.target.value
    })
  }

  handleChangeWeight(event){
    this.setState({
      isWeights: event.target.value
    })
  }

  handleChangeMon(event){
    this.setState({
      monslot: event.target.value
    })
    if(document.getElementById("mon").checked == false){
    this.setState({
      monslot: ""
    })
    }
  }
  handleChangeTue(event){
    this.setState({
      tueslot: event.target.value
    })
    if(document.getElementById("tue").checked == false){
      this.setState({
        tueslot: ""
      })
      }
  }
  handleChangeWed(event){
    this.setState({
      wedslot: event.target.value
    })
    if(document.getElementById("wed").checked == false){
      this.setState({
        wedslot: ""
      })
      }
  }
  handleChangeThu(event){
    this.setState({
      thuslot: event.target.value
    })
    if(document.getElementById("thu").checked == false){
      this.setState({
        thuslot: ""
      })
      }
  }
  handleChangeFri(event){
    this.setState({
      frislot: event.target.value
    })
    if(document.getElementById("fri").checked == false){
      this.setState({
        frislot: ""
      })
      }
  }
  handleChangeSat(event){
    this.setState({
      satslot: event.target.value
    })
    if(document.getElementById("sat").checked == false){
      this.setState({
        satslot: ""
      })
      }
  }
  handleChangeSun(event){
    this.setState({
      sunslot: event.target.value
    })
    if(document.getElementById("sun").checked == false){
      this.setState({
        sunslot: ""
      })
      }
  }

  handleChangeTime(event){
    this.setState({
      availableTime: event.target.value
    })
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
    
    let numberOfUnfilledDays = 
    document.getElementById("mon").checked+
    document.getElementById("tue").checked+
    document.getElementById("wed").checked+
    document.getElementById("thu").checked+
    document.getElementById("fri").checked+
    document.getElementById("sat").checked+
    document.getElementById("sun").checked

    let template = []

    if(numberOfUnfilledDays>0){

      for(let i = 0;i<numberOfUnfilledDays;i++){

        switch(this.state.availableTime){
          case "is30mins":
          template.push([0,1]);
          break;
          case "is45mins":
          template.push([0,1,2]);
          break;
          case "is60mins":
          template.push([0,1,2,3]);
          break;
          case "is75mins":
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
<input type="radio" id="strength" value="Strength" name="strengthorcardio"
onChange={this.handleChangeStrength}></input>Strength
<input type="radio" id="cardio" value="Cardio" name="strengthorcardio"
onChange={this.handleChangeStrength}></input>Cardio
          </div>
            <br></br>
            <div>
<input type="radio" id="weighted" value="Weighted" name="weight"
onChange={this.handleChangeWeight}></input>Weighted
<input type="radio" id="unweighted" value="UnWeighted" name="weight"
onChange={this.handleChangeWeight}></input>Not Weighted
          </div>
            <br></br>
            <div>
<input type="checkbox" id="mon" value={["Monday"]} name="days"
onChange={this.handleChangeMon}></input>Monday
<input type="checkbox" id="tue" value={["Tuesday"]} name="days"
onChange={this.handleChangeTue}></input>Tuesday
<input type="checkbox" id="wed" value={["Wednesday"]} name="days"
onChange={this.handleChangeWed}></input>Wednesday
<input type="checkbox" id="thu" value={["Thursday"]} name="days"
onChange={this.handleChangeThu}></input>Thursday
<input type="checkbox" id="fri" value={["Friday"]} name="days"
onChange={this.handleChangeFri}></input>Friday
<input type="checkbox" id="sat" value={["Saturday"]} name="days"
onChange={this.handleChangeSat}></input>Saturday
<input type="checkbox" id="sun" value={["Sunday"]} name="days"
onChange={this.handleChangeSun}></input>Sunday
          </div>
            <br></br>
            <div>
<input type="radio" id="30mins" value="is30mins" name="time"
onChange={this.handleChangeTime}></input>30 mins
<input type="radio" id="45mins" value="is45mins" name="time"
onChange={this.handleChangeTime}></input>45 mins
<input type="radio" id="60mins" value="is60mins" name="time"
onChange={this.handleChangeTime}></input>60 mins
<input type="radio" id="75mins" value="is75mins" name="time"
onChange={this.handleChangeTime}></input>75 mins
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

