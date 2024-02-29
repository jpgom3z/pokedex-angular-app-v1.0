// export interface Pokemon {
//   name : string;
//   height : number;
//   weight : number;
//   types : object;
//   sprites : object
// }

// export interface Pokemon {
//   name: string;
//   height: number;
//   weight: number;
//   types: { [key: string]: boolean }; // Define an index signature for types
//   sprites: object;
// }


// export interface Pokemon {
//   name: string;
//   height: number;
//   weight: number;
//   types: { slot: number; type: { name: string } }[];
//   sprites: object;
// }

export interface Pokemon {
  id :number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string } }[];
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: any; 
      home: any; 
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
      showdown: any; 
      versions: any; 
    };
  };
}