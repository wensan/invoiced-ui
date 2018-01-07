import { CONTACTS_ALL } from './types';

const all = [
		{ 
			id: 1, name: 
			"CamoTechQ", 
			email: "support@camotechq.com" },
		{ 
			id: 2, 
			name: "CamoTechQ Tech", 
			email: "tectsupport@camotechq.com" 
		}
	];
	
export default function contacts(state = {}, action = {}) {
	switch(action.type) {
		case CONTACTS_ALL:
			return all;
		default:
			return state;
	}
}