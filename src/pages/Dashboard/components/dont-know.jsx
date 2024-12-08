import React from "react";
import { makeStyles, Dialog } from "@material-ui/core";

const useStyles = makeStyles({
	dialog: {
		position: "absolute",
		left: 10,
		top: 50,
	},
});

function Example() {
	const classes = useStyles();

	return (
		<Dialog
			classes={{
				paper: classes.dialog,
			}}

			/* rest of the props */
		>
			{/* content of the dialog */}
		</Dialog>
	);
}
