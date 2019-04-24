import React, { Component } from "react";
import * as services from "../../Services";
import * as constants from "../../Constants";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getFilms: [],
      charObj: []
    };
  }

  componentDidMount() {
  	let unique = [];
  	let uniqueSpecies = [];
  	let charObj = this.state.charObj;
  	let speciesObj = [];
    services.httpGet(constants.APIS.GET_FILMS).then(response => {
      //console.log(response.results);
      let results = response.results;
      results.map(item => {
      	//console.log('item.species', item.species);
      	item.characters.map(ins => {
      		var a = services.getLocation(ins);
			    var pathArray = a.pathname.split( '/' );
			    unique.push(pathArray[3]);
      	})

      	item.species.map(sp => {
      		//console.log("INS", ins);
      		var a = services.getLocation(sp);
			    var pathArray = a.pathname.split( '/' );
			    uniqueSpecies.push(pathArray[3]);
      	})
      })
      let filterArr = services.ArrNoDupe(unique);
      let filterSpecies = services.ArrNoDupe(uniqueSpecies);

      filterArr.map(item => {
      		services.httpGet(constants.APIS.GET_PEOPLES+ '/' +item).then(i => {
      			charObj.push({
      				unique_id: item,
      				character_name: i.name
      			})
      		});	
      })
      //filterSpecies.sort(function(a, b){return a - b});
      filterSpecies.map((item, i) => {
      		services.httpGet(constants.APIS.GET_SPECIES+ '/' + item).then(i => {
      			speciesObj.push({
      				unique_id: item,
      				species_name: i.name
      			})
      		});
      })
      console.log('charObj', charObj);
      console.log('speciesObj', speciesObj);


      this.setState({
        getFilms: response.results
      });
    });
  }
  render() {
  	let getFilms = this.state.getFilms;
    return (
      <div>
          <div>Movies
          	{getFilms.map((subitem, i) => {
          		//console.log("subitem", subitem.title);
          		return (<div key={i}>{subitem.title}</div>)
          	 })
          	}
          </div>
      </div>
    );
  }
}
export default Movies;