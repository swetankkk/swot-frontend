import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Board } from '../Components/Board';
import { fetchSwot } from '../Utils/manipulatedata';

export function File() {
	const { boardId } = useParams();
	const [shouldLoad, setShouldLoad] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		const data = fetchSwot(boardId);
		data.then((data) => {
			setShouldLoad(data);
		});
	});

	if (shouldLoad === null) return <div>Loading</div>;
	else if (shouldLoad.status === 200)
		return <Board data={shouldLoad.data} boardId={boardId} />;
	else {
		navigate('/error');
	}
}
