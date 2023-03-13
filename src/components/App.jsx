import './App.css';
import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [data, setData] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState(null);

	function onSearchSubmit(query) {
		setSelectedArtwork(null); // reset selected artwork
		searchArtworks(query).then((json) => {
			setData(json.data); // update state with the artwork data
		});
	}

	function onArtworkSelect(id) {
		setSelectedArtwork(id);
	}

	function onBackClick() {
		setSelectedArtwork(null);
	}
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{selectedArtwork ? (
				<ImageDetailsPage
					artwork={data.find((artwork) => artwork.id === selectedArtwork)}
					onBackClick={onBackClick}
				/>
			) : (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{data.map(
							({
								artist_title,
								date_display,
								id,
								image_id,
								thumbnail,
								title,
							}) => (
								<li
									key={id}
									role="presentation"
									onClick={() => onArtworkSelect(id)}
									onKeyDown={(event) => {
										if (event.key === 'Enter') {
											onArtworkSelect(id);
										}
									}}
								>
									<h2>{title}</h2>
									<p>{artist_title}</p>
									<img
										alt={thumbnail.alt_text}
										src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
									/>
								</li>
							)
						)}
					</ul>
				</>
			)}
			<Footer />
		</div>
	);
}
