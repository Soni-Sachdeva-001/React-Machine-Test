import {createStyles, Theme} from "@material-ui/core";


export const styleSheet = (theme: Theme): any => createStyles({
	formControl: {
		minWidth: 270,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	labelColor: {
		color: 'black',
	},
	menuItems: {
		color: "red",
	}
	});