import { combineReducers } from 'redux'

const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Wannabe', duration: '3:25' },
		{ title: 'Macarena', duration: '3:02' },
		{ title: 'Touch The Sky', duration: '3:55' },
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	}

	return selectedSong
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
})
