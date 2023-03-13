import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState, useEffect } from 'react';

export function App() {
	const [data, setData] = useState([]);

	function onSearchSubmit(query) {
		searchArtworks(query).then((json) => {
			setData(json.data); // update state with the artwork data
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<ul>
				{data.map(
					({ artist_title, date_display, id, image_id, thumbnail, title }) => (
						<>
							<h2>{title}</h2>
							<p>{artist_title}</p>
							<img
								alt={thumbnail.alt_text}
								src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
							/>
						</>
					)
				)}
			</ul>
			<Footer />
		</div>
	);
}
