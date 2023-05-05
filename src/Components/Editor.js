import { $getRoot, $getSelection } from 'lexical';
import { useEffect } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import { forwardRef } from 'react';

const theme = {
	div: {
		':focus': {
			outline: 'none !important',
			boxShadow: 'none',
			border: 'none !important',
		},
	},
};

function onChange(editorState) {
	editorState.read(() => {
		// Read the contents of the EditorState here.
		const root = $getRoot();
		const selection = $getSelection();

		console.log(root, selection);
	});
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		// Focus the editor when the effect fires!
		editor.focus();
	}, [editor]);

	return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
	console.error(error);
}

export default forwardRef(function Editor(
	{ value, onChange, onKeyDown, id },
	ref
) {
	const initialConfig = {
		namespace: 'MyEditor',
		theme,
		onError,
	};

	return (
		<List sx={{ padding: 0 }} id={id?.toString()} ref={ref}>
			<ListItem sx={{ display: 'flex' }}>
				<ListItemIcon sx={{ paddingTop: '3px', minWidth: 'unset' }}>
					<FiberManualRecordSharpIcon
						sx={{ color: '#000000', fontSize: 'large' }}
					/>
				</ListItemIcon>
				<TextField
					variant='standard'
					value={value}
					onChange={onChange}
					onKeyDown={onKeyDown}
					sx={{
						'& .MuiInput-underline:before': {
							borderBottom: 'unset',
						},
						'& .Mui-underline:hover:before': {
							borderBottom: 'unset',
							border: 'unset',
						},
						'& .MuiInput-underline:after': {
							borderBottom: 'unset',
						},
					}}
				/>
			</ListItem>
		</List>
	);
});
