import React from 'react';

export function ImageDetailsPage({ artwork, onBackClick }) {
	return (
		<div>
			<h2>{artwork.title}</h2>
			<p>{artwork.artist_title}</p>
			<img
				alt={artwork.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
			/>
			{/* add any other details you want to display */}
			<button onClick={onBackClick}>Back to results</button>
		</div>
	);
}
