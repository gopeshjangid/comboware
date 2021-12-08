import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DraggableDialog({ open, title, content, onAction }) {
	const [openBox, setOpen] = React.useState(false);

	React.useEffect(() => {
		if (open) {
			setOpen(true);
		}
	}, [open]);

	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setOpen(false);
		if (onAction) {
			onAction();
		}
	};

	return (
		<div>
			<Dialog
				open={openBox}
				onClose={handleClose}
				aria-labelledby="draggable-dialog-title"
			>
				{title && (
					<DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
						{title}
					</DialogTitle>
				)}
				<DialogContent>
					<DialogContentText>{content}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancel
					</Button>
					<Button onClick={onSubmit}>Confirm</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
